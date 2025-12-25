"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useCallback, useState } from "react";

const PHONE_NUMBER = {
  tel: "+33601868589",
  display: "+33 6 01 86 85 89",
};

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export default function PhoneCaptcha() {
  const [isVerified, setIsVerified] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const handleCaptchaChange = useCallback((token: string | null) => {
    setIsVerified(Boolean(token));
  }, []);

  if (!SITE_KEY) {
    return (
      <span>
        Configurez la variable d&apos;environnement NEXT_PUBLIC_RECAPTCHA_SITE_KEY.
      </span>
    );
  }

  if (isVerified) {
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
          setCaptchaError("");
          setIsVerified(false);
        }}
      >
        Afficher le numéro de téléphone
      </button>
    );
  }

  return (
    <div>
      {captchaError && <span>{captchaError}</span>}
      {!captchaError && !isVerified && (
        <ReCAPTCHA
          sitekey={SITE_KEY}
          onChange={handleCaptchaChange}
          onExpired={() => setIsVerified(false)}
          onErrored={() =>
            setCaptchaError(
              "Impossible de charger reCAPTCHA. Cliquez à nouveau pour réessayer."
            )
          }
        />
      )}
    </div>
  );
}
