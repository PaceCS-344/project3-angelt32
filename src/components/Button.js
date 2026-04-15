export default function Button({ href, children, variant = "primary", ...props }) {
  return (
    <a
      className={`button ${variant}`}
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
      {...props}
    >
      {children}
    </a>
  );
}
