import "./Header.scss";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Overview" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Experience" },
  { id: "creations", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <header className="st-site-header st-sticky-header st-style2">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <div className="st-header-author">
                <img
                  src="/images/section/hero_portrait.webp"
                  alt="Alefay Kombil"
                  width="800"
                  height="800"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul
                  className="st-nav-list st-onepage-nav"
                  id="primary-navigation"
                  style={{ display: mobileToggle ? "block" : "none" }}
                >
                  {navItems.map(({ id, label }) => (
                    <li key={id}>
                      <a href={`#${id}`} onClick={() => setMobileToggle(false)}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`st-munu-toggle ${
                    mobileToggle ? "st-toggle-active" : ""
                  }`}
                  onClick={() => setMobileToggle((isOpen) => !isOpen)}
                  aria-expanded={mobileToggle}
                  aria-controls="primary-navigation"
                  aria-label="Toggle menu"
                >
                  <span></span>
                </button>
                <div className="st-height-b20 st-height-lg-b20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
