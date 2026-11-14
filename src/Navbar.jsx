import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./css/Navbar.css";
const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar({ isLoggedIn, onLogout }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    onLogout();
    closeMenu();
    navigate("/");
  };

  
  const authButton = (extraClass = "") =>
    isLoggedIn ? (
      <button className={`btn btn--blue ${extraClass}`} onClick={handleLogout}>
        Logout
      </button>
    ) : (
      <Link to="/login" className={`btn btn--blue ${extraClass}`} onClick={closeMenu}>
        Login / Sign Up
      </Link>
    );

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
       
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          Port<span>folio</span>
        </Link>

       
        <ul className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className="navbar__link"
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          <li className="navbar__mobile-cta">{authButton()}</li>
        </ul>

        <div className="navbar__right">
          <button
            className="navbar__theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark and light theme"
          >
            <i className={`fas ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
          </button>

          {authButton("navbar__auth-desktop")}

          <a href="/cv.pdf" download className="btn btn--pink navbar__cv">
            Download CV <i className="fas fa-download"></i>
          </a>

          <button
            className={`navbar__toggle ${open ? "navbar__toggle--open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}