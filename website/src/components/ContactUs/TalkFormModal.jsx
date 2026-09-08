import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "../contactmodal/Modal";
import { FormField, FormTextarea, SubmitButton } from "../contactmodal/FormField";

export default function TalkFormModal({ isOpen, onClose }) {
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify you're not a robot.");
      return;
    }

    const data = Object.fromEntries(new FormData(e.target));
    data.captchaToken = captchaToken;
    // TODO: send `data` (including captchaToken) to your backend,
    // which verifies captchaToken against Google using your SECRET key
    console.log("Contact form submitted:", data);

    recaptchaRef.current?.reset();
    setCaptchaToken(null);
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Let's talk"
      subtitle="Tell us a bit about what you need — we'll get back to you shortly."
    >
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          <FormField label="Full name" name="name" required />
          <FormField label="Email" name="email" type="email" required />
          <FormField label="Phone number" name="phone" type="tel" className="sm:col-span-2" />
        </div>
        <FormTextarea label="Message" name="message" required placeholder="How can we help?" />

        <div className="mb-5">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
            theme="dark"
          />
        </div>

        <SubmitButton>Send message</SubmitButton>
      </form>
    </Modal>
  );
}