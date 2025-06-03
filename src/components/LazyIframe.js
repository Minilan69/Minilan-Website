import React, { useRef, useState, useEffect } from "react";

function LazyIframe({ src, title, ...props }) {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setShow(true);
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (show) {
    return (
      <iframe
        title={title}
        src={src}
        width="100%"
        height="300"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media; clipboard-write"
        style={{ borderRadius: "14px", border: "none" }}
        {...props}
      />
    )
  }

  // élément de remplacement pour observer
  return (
    <span ref={ref} style={{ display: "block", height: 300 }} />
  )
}

export default LazyIframe;
