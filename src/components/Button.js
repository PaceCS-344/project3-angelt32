export default function Button({ href, children, variant = "primary", ...props }) {
  const isExternalLink = href && !href.startsWith("#") && !href.startsWith("mailto:");

  return (
    <a
      className={`button ${variant}`}
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer noopener" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}
