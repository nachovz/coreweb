import { Link } from "@remix-run/react";

import logo from "~/public/images/coreweb_logo_dark_no_background.png";

export default function Logo() {
  return (
    <Link to="/" className="block" aria-label="Cruip">
      <img src={logo} alt="Coreweb Logo" style={{ height: "80px"}}/>
    </Link>
  );
}
