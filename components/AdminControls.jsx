"use client";

import { useEffect, useState } from "react";

const defaultSettings = {
  verticalSpacing: 1,
  horizontalSpacing: 1,
  cardSpacing: 1,
  heroImageHeight: 1,
  contentWidth: 1,
  primaryColor: "#1d4ed8",
  darkColor: "#172554",
  accentColor: "#eff6ff",
  pageColor: "#ffffff",
};

const storageKey = "field-office-admin-theme";

function applySettings(settings) {
  const root = document.documentElement;
  root.style.setProperty("--admin-vertical-spacing", settings.verticalSpacing);
  root.style.setProperty("--admin-horizontal-spacing", settings.horizontalSpacing);
  root.style.setProperty("--admin-card-spacing", settings.cardSpacing);
  root.style.setProperty("--admin-hero-image-height", settings.heroImageHeight);
  root.style.setProperty("--admin-content-width", settings.contentWidth);
  root.style.setProperty("--admin-primary", settings.primaryColor);
  root.style.setProperty("--admin-dark", settings.darkColor);
  root.style.setProperty("--admin-accent", settings.accentColor);
  root.style.setProperty("--admin-page", settings.pageColor);
}

export function AdminControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    const savedSettings = window.localStorage.getItem(storageKey);
    if (savedSettings) {
      try {
        const parsedSettings = { ...defaultSettings, ...JSON.parse(savedSettings) };
        setSettings(parsedSettings);
        applySettings(parsedSettings);
        return;
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }

    applySettings(defaultSettings);
  }, []);

  function updateSetting(name, value) {
    const nextSettings = { ...settings, [name]: value };
    setSettings(nextSettings);
    applySettings(nextSettings);
    window.localStorage.setItem(storageKey, JSON.stringify(nextSettings));
  }

  function resetSettings() {
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    window.localStorage.removeItem(storageKey);
  }

  return (
    <div className="admin-controls" aria-live="polite">
      {isOpen ? (
        <aside className="admin-panel" aria-label="Admin design controls">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Admin</p>
              <h2 className="text-lg font-black text-blue-950">Live design controls</h2>
            </div>
            <button type="button" className="admin-close" onClick={() => setIsOpen(false)} aria-label="Close admin controls">
              ×
            </button>
          </div>

          <div className="mt-4 grid gap-4">
            <RangeControl label="Height spacing" name="verticalSpacing" min="0.7" max="1.5" step="0.05" value={settings.verticalSpacing} onChange={updateSetting} />
            <RangeControl label="Width spacing" name="horizontalSpacing" min="0.75" max="1.4" step="0.05" value={settings.horizontalSpacing} onChange={updateSetting} />
            <RangeControl label="Card spacing" name="cardSpacing" min="0.7" max="1.6" step="0.05" value={settings.cardSpacing} onChange={updateSetting} />
            <RangeControl label="Hero image height" name="heroImageHeight" min="0.75" max="1.35" step="0.05" value={settings.heroImageHeight} onChange={updateSetting} />
            <RangeControl label="Content width" name="contentWidth" min="0.85" max="1.1" step="0.01" value={settings.contentWidth} onChange={updateSetting} />

            <div className="grid grid-cols-2 gap-3">
              <ColorControl label="Primary" name="primaryColor" value={settings.primaryColor} onChange={updateSetting} />
              <ColorControl label="Dark text" name="darkColor" value={settings.darkColor} onChange={updateSetting} />
              <ColorControl label="Accent" name="accentColor" value={settings.accentColor} onChange={updateSetting} />
              <ColorControl label="Page" name="pageColor" value={settings.pageColor} onChange={updateSetting} />
            </div>
          </div>

          <button type="button" className="admin-reset" onClick={resetSettings}>Reset design</button>
        </aside>
      ) : null}

      <button type="button" className="admin-toggle" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen}>
        Admin
      </button>
    </div>
  );
}

function RangeControl({ label, name, value, min, max, step, onChange }) {
  return (
    <label className="grid gap-2 text-sm font-black text-blue-950">
      <span className="flex items-center justify-between gap-3">
        {label}
        <span className="font-mono text-xs text-slate-500">{Number(value).toFixed(2)}×</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(name, Number(event.target.value))} className="admin-range" />
    </label>
  );
}

function ColorControl({ label, name, value, onChange }) {
  return (
    <label className="grid gap-2 text-sm font-black text-blue-950">
      {label}
      <input type="color" value={value} onChange={(event) => onChange(name, event.target.value)} className="admin-color" />
    </label>
  );
}
