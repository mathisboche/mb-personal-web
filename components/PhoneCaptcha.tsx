"use client";

import { FormEvent, useState } from "react";

const CAPTCHA_PROMPT =
  'Tapez "échecs" (sans les guillemets) pour afficher mon numéro.';
const CAPTCHA_ANSWERS = ["échecs", "echecs"];
const PHONE_NUMBER = {
  tel: "+33601868589",
  display: "+33 6 01 86 85 89",
};

export default function PhoneCaptcha() {
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedValue = captchaValue.trim().toLowerCase();

    if (CAPTCHA_ANSWERS.includes(normalizedValue)) {
      setIsVerified(true);
      setCaptchaError("");
      return;
    }

    setCaptchaError("La réponse est incorrecte. Merci de réessayer.");
  };

  if (isVerified) {
    return (
      <a className="garage-link" href={`tel:${PHONE_NUMBER.tel}`}>
        {PHONE_NUMBER.display}
      </a>
    );
  }

  return (
    <div className="captcha-area">
      <p className="captcha-question">{CAPTCHA_PROMPT}</p>
      <form className="captcha-form" onSubmit={handleSubmit}>
        <label className="captcha-label" htmlFor="captcha-input">
          Votre réponse
        </label>
        <div className="captcha-controls">
          <input
            autoComplete="off"
            className="captcha-input"
            id="captcha-input"
            name="captcha"
            onChange={(event) => {
              setCaptchaValue(event.target.value);
              if (captchaError) {
                setCaptchaError("");
              }
            }}
            required
            type="text"
            value={captchaValue}
          />
          <button className="captcha-button" type="submit">
            Afficher
          </button>
        </div>
        {captchaError && (
          <p className="captcha-error" role="alert">
            {captchaError}
          </p>
        )}
      </form>
    </div>
  );
}
