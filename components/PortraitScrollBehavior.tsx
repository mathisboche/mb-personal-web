"use client";

import { useEffect } from "react";

const MOBILE_QUERY = "(max-width: 640px)";
const BLUR_MAX = 10;
const FADE_DISTANCE_MULTIPLIER = 0.75;
const MIN_FADE_DISTANCE = 140;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function PortraitScrollBehavior() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const portrait = document.querySelector<HTMLElement>(".garage-portrait-frame");

    if (!portrait) {
      return;
    }

    let fadeDistance = 0;
    let rafId: number | null = null;
    let isActive = false;

    const updateMetrics = () => {
      const nextHeight = portrait.getBoundingClientRect().height;
      if (Number.isFinite(nextHeight) && nextHeight > 0) {
        fadeDistance = Math.max(
          MIN_FADE_DISTANCE,
          nextHeight * FADE_DISTANCE_MULTIPLIER
        );
      }
    };

    const applyStyles = () => {
      if (!fadeDistance) {
        updateMetrics();
        if (!fadeDistance) {
          return;
        }
      }

      const scrollY = Math.max(0, window.scrollY);
      const progress = clamp(scrollY / fadeDistance, 0, 1);
      const opacity = 1 - progress;
      const blur = progress * BLUR_MAX;

      portrait.style.setProperty("--portrait-opacity", opacity.toFixed(3));
      portrait.style.setProperty("--portrait-blur", `${blur.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        applyStyles();
      });
    };

    const handleScroll = () => {
      requestUpdate();
    };

    const handleResize = () => {
      updateMetrics();
      requestUpdate();
    };

    const activateMobile = () => {
      if (isActive) {
        return;
      }
      isActive = true;
      updateMetrics();
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
      portrait.style.setProperty("--portrait-opacity", "1");
      portrait.style.setProperty("--portrait-blur", "0px");
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
