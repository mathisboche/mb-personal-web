"use client";

import { useEffect } from "react";

const MOBILE_QUERY = "(max-width: 640px)";
const PARALLAX_FACTOR = 0.6;
const SMOOTHING = 0.65;
const SCALE_REDUCTION = 0.06;

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
    let currentScale = 1;
    let targetOpacity = 1;
    let targetOffset = 0;
    let targetScale = 1;

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
      portrait.style.setProperty("--portrait-scale", `${currentScale.toFixed(3)}`);
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
      targetScale = 1 - progress * SCALE_REDUCTION;
    };

    const tick = () => {
      rafId = null;
      updateTargets();
      const opacityDelta = targetOpacity - currentOpacity;
      const offsetDelta = targetOffset - currentOffset;
      const scaleDelta = targetScale - currentScale;
      currentOpacity += opacityDelta * SMOOTHING;
      currentOffset += offsetDelta * SMOOTHING;
      currentScale += scaleDelta * SMOOTHING;

      if (
        Math.abs(opacityDelta) < 0.001 &&
        Math.abs(offsetDelta) < 0.1 &&
        Math.abs(scaleDelta) < 0.001
      ) {
        currentOpacity = targetOpacity;
        currentOffset = targetOffset;
        currentScale = targetScale;
      }

      applyStyles();

      if (
        Math.abs(targetOpacity - currentOpacity) >= 0.001 ||
        Math.abs(targetOffset - currentOffset) >= 0.1 ||
        Math.abs(targetScale - currentScale) >= 0.001
      ) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const requestTick = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const handleScroll = () => {
      updateTargets();
      requestTick();
    };

    const handleResize = () => {
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
      currentScale = targetScale;
      applyStyles();
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
      currentScale = 1;
      targetOpacity = 1;
      targetOffset = 0;
      targetScale = 1;
      portrait.style.setProperty("--portrait-opacity", "1");
      portrait.style.setProperty("--portrait-offset", "0px");
      portrait.style.setProperty("--portrait-scale", "1");
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
