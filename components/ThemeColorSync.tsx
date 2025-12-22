"use client";

import { useEffect } from "react";

const resolveThemeColor = () => {
  const root = document.documentElement;
  const rootStyle = getComputedStyle(root);
  const token = rootStyle.getPropertyValue("--soft").trim();
  if (token) {
    return token;
  }

  const rootBackground = rootStyle.backgroundColor;
  if (rootBackground && rootBackground !== "rgba(0, 0, 0, 0)") {
    return rootBackground;
  }

  return getComputedStyle(document.body).backgroundColor || "#ffffff";
};

export default function ThemeColorSync() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const themeColor = resolveThemeColor();
    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", themeColor);
  }, []);

  return null;
}
