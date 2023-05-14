import React from "react";

const Footer = () => {
  return (
    <footer class="footer-wrap">
      <div class="container">
        <div class="row pt-100 pb-75">
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div class="footer-widget">
              <a href="index.html" class="footer-logo">
                <img src="/img/ich1.svg" alt="Image" width={200} />
              </a>
              <p class="comp-desc">
                Si vous cherchez à vivre une expérience de travail unique et enrichissante à l'étranger, nous sommes là pour vous aider à trouver le poste parfait. Contactez-nous dès maintenant pour en savoir plus sur nos services de placement de travail à l'international.              </p>
              <div class="social-link">
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
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div class="footer-widget">
              <h3 class="footer-widget-title">A propos</h3>
              <ul class="footer-menu">
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
          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div class="footer-widget nl">
              <div>
                <h3 class="footer-widget-title">Newsletter</h3>
                <p class="newsletter-text">
                  Vous recevez des mails sur nos différentes activités et nos
                  offres.
                </p>
              </div>
              <form action="#" class="newsletter-form">
                <input type="email" placeholder="Votre Email…" />
                <button type="button">Inscription</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-text">
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
