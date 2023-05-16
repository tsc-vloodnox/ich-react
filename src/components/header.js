import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [navbar, setNavbar] = useState(false);
  const [openAside, setOpenAside] = useState(false);
  const fixHeader = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", fixHeader);

  return (
    <header id="header">
      <div className="main-header d-none d-lg-block">
        <div
          class={
            navbar
              ? "container-menu-desktop sticky is-sticky"
              : "container-menu-desktop sticky"
          }
        >
          <div class="container wrap-menu-desktop">
            <nav class="row align-items-center position-relative">
              <div class="col-lg-3">
                <div class="logo">
                  <a href="/">
                    <img src="./img/ich1.svg" alt="Logo" />
                  </a>
                </div>
              </div>

              <div class="col-lg-6 position-static">
                <div class="main-menu">
                  <nav class="desktop-menu">
                    <ul className="liste">
                      <li className="item">
                        <NavLink exact to="/" className={"px-2"}>
                          Accueil
                        </NavLink>
                      </li>
                      <li className="item">
                        <NavLink exact to="/jobs" className={"px-2"}>
                          Emplois
                        </NavLink>
                      </li>
                      <li className="item">
                        <NavLink exact to="/candidates" className={"px-2"}>
                          Candidatures
                        </NavLink>
                      </li>
                      <li className="item">
                        <NavLink exact to="/about" className={"px-2"}>
                          A propos
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-lg-3">
                <div class="sec-liste">
                  <div className="item">
                    {user ? (
                      <NavLink exact to="/profile" className="px-2">
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="PersonOutlineIcon"
                        >
                          <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                      </NavLink>
                    ) : null
                    }
                  </div>
                  <div className="item">
                    <div class="log">
                      <img src="./img/icons/login.svg" alt="" />
                      Login
                      <i class="fa fa-angle-down mx-1"></i>
                      <ul class="dropdown-list">
                        <li>
                          <a href="/login">
                            <img src="./img/icons/login.svg" alt="" />
                            Login
                          </a>
                        </li>
                        <li>
                          <a href="/signup">
                            <img src="./img/icons/groupes.svg" alt="" />
                            Signup
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div
        class={
          navbar
            ? "mobile-header d-lg-none d-md-block sticky is-sticky"
            : "mobile-header d-lg-none d-md-block sticky"
        }
      >
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12">
              <div class="mobile-main-header">
                <div class="mobile-logo">
                  <a href="/">
                    <img src="./img/ich1.svg" alt="Logo" />
                  </a>
                </div>
                <div class="mobile-menu-toggler">
                  <button
                    className="mobile-menu-btn btn"
                    onClick={() => {
                      setOpenAside(!openAside);
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside
        className={openAside ? "off-canvas-wrapper open" : "off-canvas-wrapper"}
      >
        <div
          class="off-canvas-overlay"
          onClick={() => {
            setOpenAside(!openAside);
          }}
        ></div>
        <div class="off-canvas-inner-content">
          <div
            class="btn-close-off-canvas"
            onClick={() => {
              setOpenAside(!openAside);
            }}
          >
            x
          </div>

          <div class="off-canvas-inner">
            <div class="logo">
              <a href="/">
                <img src="./img/ich1.svg" alt="Logo" />
              </a>
            </div>
            <div class="mobile-navigation">
              <nav>
                <ul className="mobile-menu">
                  <li>
                    <NavLink exact to="/">
                      Accueil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/jobs">
                      Emplois
                    </NavLink>
                  </li>
                  <li >
                    <NavLink exact to="/candidates">
                      Candidatures
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/about">
                      A propos
                    </NavLink>
                  </li>
                </ul>
              </nav>
              {/* mobile menu navigation end */}
            </div>
            {/* mobile menu end */}

            {/* offcanvas widget area start */}
            <div class="offcanvas-widget">
              <div class="off-canvas-contact-widget">
                <ul>
                  <li>
                    <i class="fa fa-mobile"></i>
                    <a href="/">0123456789</a>
                  </li>
                  <li>
                    <i class="far fa-envelope"></i>
                    <a href="/">contact@structure.gn</a>
                  </li>
                </ul>
              </div>
              <div class="off-canvas-social-widget">
                <a href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i class="fab fa-whatsapp"></i>
                </a>
                <a href="/">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            {/* offcanvas widget area end */}
          </div>
        </div>
      </aside>
    </header >
  );
}

export default Header