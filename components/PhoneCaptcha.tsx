"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useCallback, useEffect, useState } from "react";

const PHONE_NUMBER = {
  tel: "+33601868589",
  display: "+33 6 01 86 85 89",
};

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
const PHONE_DISPLAY_DELAY = 250;

export default function PhoneCaptcha() {
  const [isVerified, setIsVerified] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaReady, setCaptchaReady] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  const handleCaptchaChange = useCallback((token: string | null) => {
    setIsVerified(Boolean(token));
  }, []);

  useEffect(() => {
    if (!isVerified) {
      setIsPhoneVisible(false);
      return;
    }

    const timer = window.setTimeout(() => setIsPhoneVisible(true), PHONE_DISPLAY_DELAY);
    return () => window.clearTimeout(timer);
  }, [isVerified]);

  if (!SITE_KEY) {
    return (
      <span>
        Configurez la variable d&apos;environnement NEXT_PUBLIC_RECAPTCHA_SITE_KEY.
      </span>
    );
  }

  if (isPhoneVisible) {
    return (
      <a className="garage-link" href={`tel:${PHONE_NUMBER.tel}`}>
        {PHONE_NUMBER.display}
      </a>
    );
  }

  if (!showCaptcha) {
    return (
      <button
        type="button"
        onClick={() => {
          setShowCaptcha(true);
          setCaptchaReady(false);
          setCaptchaError("");
        }}
      >
        Afficher le numéro de téléphone
      </button>
    );
  }

  return (
    <div>
      {!captchaReady && !captchaError && (
        <span>Chargement du captcha…</span>
      )}
      {captchaError && <span>{captchaError}</span>}
      {!captchaError && !isVerified && (
        <ReCAPTCHA
          sitekey={SITE_KEY}
          onChange={handleCaptchaChange}
          onExpired={() => setIsVerified(false)}
          asyncScriptOnLoad={() => {
            setCaptchaReady(true);
            setCaptchaError("");
          }}
          onErrored={() =>
            setCaptchaError(
              "Impossible de charger reCAPTCHA. Cliquez à nouveau pour réessayer."
            )
          }
        />
      )}
      {isVerified && !isPhoneVisible && (
        <span>Validation réussie, affichage du numéro…</span>
      )}
    </div>
  );
}
