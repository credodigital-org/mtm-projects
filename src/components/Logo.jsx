export default function Logo({ size = 76 }) {
  return (
    <a href="#home" className="logo" style={{ width: size, height: size }} aria-label="MTM Projects Management">
      <img src="/images/mtm-logo.jpeg" alt="" />
    </a>
  );
}
