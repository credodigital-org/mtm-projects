// import { useState } from "react";

// /* Shows the image; falls back to a styled placeholder if the file is missing. */
// export default function Photo({ src, alt, className = "", label, eager = false }) {
//   const [failed, setFailed] = useState(false);

//   if (!src || failed) {
//     return (
//       <div className={`photo-fallback ${className}`} role="img" aria-label={alt}>
//         <span>{label || alt}</span>
//       </div>
//     );
//   }

//   return (
//     <img
//       className={className}
//       src={src}
//       alt={alt}
//       loading={eager ? "eager" : "lazy"}
//       onError={() => setFailed(true)}
//     />
//   );
// }


import { useEffect, useState } from "react";

/* Screens at or below this width use the phone image (`mobileSrc`) */
const MOBILE_QUERY = "(max-width: 768px)";

function useIsMobile() {
  const [mobile, setMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

/* Shows the image; on phones shows `mobileSrc` if you give one.
   If the phone image is missing it falls back to `src`; if that is missing too,
   it shows a styled placeholder. */
export default function Photo({ src, mobileSrc, alt, className = "", label, eager = false }) {
  const isMobile = useIsMobile();
  const [mobileFailed, setMobileFailed] = useState(false);
  const [failed, setFailed] = useState(false);

  const useMobileImage = Boolean(mobileSrc) && isMobile && !mobileFailed;
  const current = useMobileImage ? mobileSrc : src;

  if (!current || failed) {
    return (
      <div className={`photo-fallback ${className}`} role="img" aria-label={alt}>
        <span>{label || alt}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={current}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => (useMobileImage ? setMobileFailed(true) : setFailed(true))}
    />
  );
}