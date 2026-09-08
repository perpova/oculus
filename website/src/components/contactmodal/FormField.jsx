export function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  className = "",
  ...rest
}) {
  return (
    <label className={`block mb-5 ${className}`}>
      <span
        className="block text-sm font-medium mb-1.5"
        style={{ color: "var(--color-white)" }}
      >
        {label}
        {required && <span style={{ color: "var(--color-gold)" }}> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder || " "}
        className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-colors duration-200 border
          bg-black/15 text-white border-white/30
          focus:bg-white focus:text-black focus:border-white
          not-placeholder-shown:bg-white not-placeholder-shown:text-black not-placeholder-shown:border-white
          placeholder:text-white/60 focus:placeholder:text-black/40"
        {...rest}
      />
    </label>
  );
}

export function FormTextarea({
  label,
  name,
  required = false,
  rows = 3,
  placeholder,
  className = "",
  ...rest
}) {
  return (
    <label className={`block mb-5 ${className}`}>
      <span
        className="block text-sm font-medium mb-1.5"
        style={{ color: "var(--color-white)" }}
      >
        {label}
        {required && <span style={{ color: "var(--color-gold)" }}> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder || " "}
        className="w-full rounded-xl px-4 py-2.5 text-sm outline-none resize-none transition-colors duration-200 border
          bg-black/15 text-white border-white/20
          focus:bg-white focus:text-black focus:border-white
          not-placeholder-shown:bg-white not-placeholder-shown:text-black not-placeholder-shown:border-white
          placeholder:text-white/50 focus:placeholder:text-black/40"
        {...rest}
      />
    </label>
  );
}

export function SubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="w-full mt-2 rounded-xl py-3 text-sm font-semibold transition-colors"
      style={{
        backgroundColor: "var(--color-gold)",
        color: "var(--color-bg)",
      }}
    >
      {children}
    </button>
  );
}