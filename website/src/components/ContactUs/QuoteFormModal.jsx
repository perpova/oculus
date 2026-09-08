import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "../contactmodal/Modal";
import { FormField, FormTextarea, SubmitButton } from "../contactmodal/FormField";

export default function QuoteFormModal({ isOpen, onClose }) {
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
    console.log("Quote request submitted:", data);

    recaptchaRef.current?.reset();
    setCaptchaToken(null);
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Request a free quote"
      subtitle="Share your project details and we'll send a tailored quote."
    >
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          <FormField label="Full name" name="name" required />
          <FormField label="Email" name="email" type="email" required />
          <FormField label="Phone number" name="phone" type="tel" required />
          <FormField label="Company / Property name" name="company" />
          <FormField
            label="Service needed"
            name="service"
            placeholder="e.g. CCTV, Fire Safety, Access Control"
            required
          />
          <FormField label="Estimated budget (optional)" name="budget" />
        </div>
        <FormTextarea label="Project details" name="details" required rows={3} placeholder="Location, scope, timeline..." />

        <div className="mb-5">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
            theme="dark"
          />
        </div>

        <SubmitButton>Request quote</SubmitButton>
      </form>
    </Modal>
  );
}