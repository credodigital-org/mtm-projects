import { useState } from "react";

/* Shows the image; falls back to a styled placeholder if the file is missing. */
export default function Photo({ src, alt, className = "", label, eager = false }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`photo-fallback ${className}`} role="img" aria-label={alt}>
        <span>{label || alt}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}
