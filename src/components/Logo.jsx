import { Link } from "../router.jsx";

export default function Logo({ size = 76 }) {
  return (
    <Link to="/" className="logo" style={{ width: size, height: size }} aria-label="MTM Projects Management">
      <img src="/images/mtm-logo.jpeg" alt="" />
    </Link>
  );
}