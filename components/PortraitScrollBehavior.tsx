"use client";

import { useEffect } from "react";

const MOBILE_QUERY = "(max-width: 640px)";

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
    let rafId: number | null = null;
    let isActive = false;

    const updateMetrics = () => {
      const nextHeight = portrait.getBoundingClientRect().height;
      if (Number.isFinite(nextHeight) && nextHeight > 0) {
        portraitHeight = nextHeight;
        shell.style.setProperty("--portrait-height", `${portraitHeight}px`);
      }
    };

    const updateOpacity = () => {
      const baseHeight = portraitHeight || portrait.getBoundingClientRect().height;
      const fadeDistance = Math.max(100, baseHeight * 0.55);
      const progress = clamp(window.scrollY / fadeDistance, 0, 1);
      const offset = -window.scrollY * 0.35;
      shell.style.setProperty("--portrait-opacity", `${(1 - progress).toFixed(3)}`);
      shell.style.setProperty("--portrait-offset", `${offset.toFixed(1)}px`);
    };

    const handleScroll = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updateOpacity();
      });
    };

    const handleResize = () => {
      updateMetrics();
      updateOpacity();
    };

    const activateMobile = () => {
      if (isActive) {
        return;
      }
      isActive = true;
      updateMetrics();
      updateOpacity();
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
      shell.style.setProperty("--portrait-opacity", "1");
      shell.style.setProperty("--portrait-offset", "0px");
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
