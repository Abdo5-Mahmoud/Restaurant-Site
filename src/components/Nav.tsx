import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="row">
          <NavLink to="/" className="logo" title="go to home">
            <img loading="lazy" src="../../icon.png" alt="website logo" />
            <span className="site-name">MySite</span>
          </NavLink>
          <button
            type="button"
            className={`menu-btn ${open ? "open" : ""}`}
            onClick={() => setOpen((s) => !s)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
            <span className="visually-hidden">Toggle navigation</span>
          </button>
        </div>
        <nav id="site-nav" className={`nav ${open ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setOpen(false)}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="menu" onClick={() => setOpen(false)}>
                OUR MENUS
              </NavLink>
            </li>
            <li>
              <NavLink to="blog" onClick={() => setOpen(false)}>
                BLOG ENTRIES
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" onClick={() => setOpen(false)}>
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
