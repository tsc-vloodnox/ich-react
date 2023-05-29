import React from "react";

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="row pt-100 pb-75">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="footer-widget">
              <a href="index.html" className="footer-logo">
                <img src="/img/ich1.svg" alt="Image" width={200} />
              </a>
              <p className="comp-desc">
                Si vous cherchez à vivre une expérience de travail unique et enrichissante à l'étranger, nous sommes là pour vous aider à trouver le poste parfait. Contactez-nous dès maintenant pour en savoir plus sur nos services de placement de travail à l'international.              </p>
              <div className="social-link">
                <ul>
                  <li>
                    <a href="www.fb.com" target="_blank">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="www.fb.com" target="_blank">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href="www.fb.com" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" target="_blank">
                      <img src="/img/afrique.png" width={14} height={12.8}/>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="footer-widget">
              <h3 className="footer-widget-title">A propos</h3>
              <ul className="footer-menu">
                <li>
                  <a href="/about">Qui sommes-nous</a>
                </li>
                <li>
                  <a href="/jobs">Emplois</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Nous contacter</a>
                </li>
                {/* <li>
                  <a href="/privacy-policy">Police de Confidencialité</a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-widget nl">
              <div>
                <h3 className="footer-widget-title">Newsletter</h3>
                <p className="newsletter-text">
                  Vous recevez des mails sur nos différentes activités et nos
                  offres.
                </p>
              </div>
              <form action="#" className="newsletter-form">
                <input type="email" placeholder="Votre Email…" />
                <button type="button">Inscription</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-text">
        <p>
          <strong>Structure </strong>© 2022 - Designed by{" "}
          <a href="/" target="_blank">
            TSC
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
