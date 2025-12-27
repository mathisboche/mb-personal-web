"use client";

import { useEffect } from "react";

const MOBILE_QUERY = "(max-width: 640px)";
const PARALLAX_FACTOR = 0.6;
const OPACITY_SMOOTHING_DURATION = 100;
const OFFSET_SMOOTHING_ACTIVE = 32;
const OFFSET_SMOOTHING_IDLE = 70;
const SCROLL_ACTIVE_WINDOW = 90;
const SCROLL_IDLE_DELAY = 90;
const MAX_FRAME_DELTA = 64;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function PortraitScrollBehavior() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const shell = document.querySelector<HTMLElement>(".garage-shell");
    const portrait = document.querySelector<HTMLElement>(".garage-portrait-frame");

    if (!shell || !portrait) {
      return;
    }

    let portraitHeight = 0;
    let fadeDistance = 0;
    let rafId: number | null = null;
    let isActive = false;
    let currentOpacity = 1;
    let currentOffset = 0;
    let targetOpacity = 1;
    let targetOffset = 0;
    let lastTimestamp = 0;
    let lastScrollTime = 0;

    const updateMetrics = () => {
      const nextHeight = portrait.getBoundingClientRect().height;
      if (Number.isFinite(nextHeight) && nextHeight > 0) {
        portraitHeight = nextHeight;
        fadeDistance = Math.max(140, portraitHeight * 0.75);
        shell.style.setProperty("--portrait-height", `${portraitHeight}px`);
      }
    };

    const applyStyles = () => {
      portrait.style.setProperty("--portrait-opacity", `${currentOpacity.toFixed(3)}`);
      portrait.style.setProperty("--portrait-offset", `${currentOffset.toFixed(2)}px`);
    };

    const updateTargets = () => {
      if (!fadeDistance) {
        updateMetrics();
        if (!fadeDistance) {
          return;
        }
      }
      const scrollY = Math.max(0, window.scrollY);
      const progress = clamp(scrollY / fadeDistance, 0, 1);
      targetOpacity = 1 - progress;
      targetOffset = -scrollY * PARALLAX_FACTOR;
    };

    const tick = (timestamp: number) => {
      if (!isActive) {
        rafId = null;
        return;
      }
      updateTargets();
      const frameDelta = lastTimestamp ? timestamp - lastTimestamp : 16;
      const clampedDelta = Math.min(MAX_FRAME_DELTA, frameDelta);
      lastTimestamp = timestamp;
      const isScrolling = timestamp - lastScrollTime < SCROLL_ACTIVE_WINDOW;
      const offsetDuration = isScrolling ? OFFSET_SMOOTHING_ACTIVE : OFFSET_SMOOTHING_IDLE;
      const opacitySmoothing = 1 - Math.exp(-clampedDelta / OPACITY_SMOOTHING_DURATION);
      const offsetSmoothing = 1 - Math.exp(-clampedDelta / offsetDuration);
      const opacityDelta = targetOpacity - currentOpacity;
      const offsetDelta = targetOffset - currentOffset;
      currentOpacity += opacityDelta * opacitySmoothing;
      currentOffset += offsetDelta * offsetSmoothing;

      if (Math.abs(opacityDelta) < 0.001 && Math.abs(offsetDelta) < 0.1) {
        currentOpacity = targetOpacity;
        currentOffset = targetOffset;
      }

      applyStyles();

      const isSettled =
        Math.abs(targetOpacity - currentOpacity) < 0.001 &&
        Math.abs(targetOffset - currentOffset) < 0.1;
      if (!isActive || (isSettled && timestamp - lastScrollTime > SCROLL_IDLE_DELAY)) {
        rafId = null;
        return;
      }
      rafId = window.requestAnimationFrame(tick);
    };

    const requestTick = () => {
      if (rafId === null) {
        lastTimestamp = 0;
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const handleScroll = () => {
      lastScrollTime = window.performance?.now?.() ?? Date.now();
      updateTargets();
      requestTick();
    };

    const handleResize = () => {
      lastScrollTime = window.performance?.now?.() ?? Date.now();
      updateMetrics();
      updateTargets();
      requestTick();
    };

    const activateMobile = () => {
      if (isActive) {
        return;
      }
      isActive = true;
      updateMetrics();
      updateTargets();
      currentOpacity = targetOpacity;
      currentOffset = targetOffset;
      lastScrollTime = window.performance?.now?.() ?? Date.now();
      applyStyles();
      requestTick();
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize);
    };

    const deactivateMobile = () => {
      if (!isActive) {
        return;
      }
      isActive = false;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
      currentOpacity = 1;
      currentOffset = 0;
      targetOpacity = 1;
      targetOffset = 0;
      lastTimestamp = 0;
      lastScrollTime = 0;
      portrait.style.setProperty("--portrait-opacity", "1");
      portrait.style.setProperty("--portrait-offset", "0px");
      shell.style.removeProperty("--portrait-height");
    };

    const media = window.matchMedia(MOBILE_QUERY);

    const handleChange = () => {
      if (media.matches) {
        activateMobile();
      } else {
        deactivateMobile();
      }
    };

    handleChange();
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
      deactivateMobile();
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return null;
}
