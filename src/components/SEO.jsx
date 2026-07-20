import React, { useEffect } from "react";

/**
 * Reusable SEO Component for dynamic meta tags, title, canonical link, and JSON-LD structured data.
 */
export default function SEO({
  title = "VisionNex - Vision to Your Ears | Assistive Audio Glasses",
  description = "Transform what you see into crystal-clear audio descriptions. VisionNex combines advanced camera technology with intelligent audio processing for visual accessibility.",
  keywords = "VisionNex, assistive technology, audio description, visual impairment, smart glasses, accessibility, AI audio glasses",
  canonical = "https://visionnex.cz/",
  ogType = "website",
  ogImage = "https://visionnex.cz/logo%20rounded.png",
  jsonLd = null,
}) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set meta tags
    const updateMetaTag = (nameAttr, nameValue, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard Meta Tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);

    // Open Graph
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", canonical);
    updateMetaTag("property", "og:type", ogType);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:site_name", "VisionNex");

    // Twitter Card
    updateMetaTag("property", "twitter:card", "summary_large_image");
    updateMetaTag("property", "twitter:title", title);
    updateMetaTag("property", "twitter:description", description);
    updateMetaTag("property", "twitter:url", canonical);
    updateMetaTag("property", "twitter:image", ogImage);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    // 4. JSON-LD Structured Data Injection
    let scriptTag = document.getElementById("dynamic-json-ld");
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "dynamic-json-ld";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, keywords, canonical, ogType, ogImage, jsonLd]);

  return null;
}
