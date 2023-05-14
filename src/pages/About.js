import React from "react";

const About = () => {
  return (
    <div className="page-wrapper about">
      <div className="preview">
        <div className="preview-content">
          <div className="box-1">
            <div className="hov-img0">
              <img src="./img/hero-bg.jpg" alt="img" />
            </div>
          </div>
          <div className="box-2">
            <h2>L’ICH est spécialisée dans le placement de travail à l'international.</h2>
            <p>
              Nous aidons les demandeurs d'emplois de toutes ordres à trouver des offres d'emploi correspondant à leur profil professionnel.
              Nous recueillons les CV de nos clients et les envoyons à des employeurs qui cherchent des candidats pour pourvoir des postes vacants. Les CV sont adaptés, et soutenu de lettre de motivation de qualité de sorte à vous fournir un solide dossier pour augmenter vos chances d’être retenu pour l’offre.
            </p>
          </div>
        </div>

      </div>
      <div id="genese" className=" preview claire">
        <div className="preview-content">
          <div className="box-1">
            <div className="hov-img0">
              <img src="/img/ich-favicon.svg" alt="IMG" />
            </div>
          </div>
          <div className="box-2">
            <h3>Genèse</h3>
            <p>
              Nous offrons également une assistance pour l'obtention du visa de travail nécessaire pour l'intégration une fois que l'offre d'emploi est validée. Nous nous engageons à offrir à nos clients un service professionnel, rapide et fiable pour les aider à réaliser leur rêve de travailler à l'international. Si vous cherchez à vivre une expérience de travail unique et enrichissante à l'étranger, nous sommes là pour vous aider à trouver le poste parfait. Contactez-nous dès maintenant pour en savoir plus sur nos services de placement de travail à l'international.
            </p>
          </div>
        </div>
      </div>
      <div id="objectifs" className=" preview claire">
        <div className="preview-content">
          <div className="box-1">
            <div className="hov-img0">
              <img src="/img/careers-toile.jpg" alt="IMG" />
            </div>
          </div>
          <div className="box-2">
            <h3>Objectifs</h3>
            <div className="more">
              <h4>*Réunir</h4>
              <p>
                Que vous ayez un doctorat, un master, une licence ou autre; Que vous soyez en médicine, en entreprise de commerce ou autres; Vous êtes les bienvenues a l'ICH.
              </p>
            </div>
            <div className="more">
              <h4>*Informer</h4>
              <p>
                Par notre voix, vous serez informée aussi bien sur la demande d'emplois de vos diffèrent établissement et entreprise de votre désire que sur l’actualité général de l’univers du travail.                </p>
            </div>
            <div className="more">
              <h4>*Instruire</h4>
              <p>
                Pour favoriser l’apprentissage et facilité la recherche de travail, nous mettons à la disposition de tout demandeur d'emplois une bibliothèque de cours, d’exercice et de devoir ainsi que des formations varier pour vous aider à préparer et étoffer vos CV de candidature. Mais encore, des séminaire et concours pour affuter les connaissant de chacun seront aussi organisé.</p>
            </div>
            <div className="more">
              <h4>*Guider</h4>
              <p>
                Par le biais de professionnels, de devanciers et de
                leur expériences, nous souhaitons enrichir et nourrir les
                ambitions de tous mais surtout de montrer le chemin a suivre.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="accessibilite" className=" preview claire">
        <div className="preview-content">
          <div className="box-1">
            <div className="hov-img0">
              <img src="/img/qq.jpg" alt="IMG" />
            </div>
          </div>
          <div className="box-2">
            <h3>Accessibilité</h3>
            <p>
              Penser pour plaire a tous, Structure n'est pas seulement qu'une
              appication web mais une appication multiplateforme. Aussi bien
              disponible sur navigateur que sur mobile, Androide et Ios
            </p>
            <div className="more">
              <div>
                <h4 className="m-2">Telecharger maintenant</h4>
                <a href="https://play.google.com/store/apps">
                  <img
                    src="/img/play-store.png"
                    alt="logo play-store"
                    className="ppo"
                  />
                </a>
                <a href="https://www.apple.com/app-store/" className="mx-2">
                  <img
                    src="/img/apple-store.png"
                    alt="logo apple-store"
                    className="ppo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="toile" className="preview">
        <img src="/img/rrr.png" alt="toile" className="w-100" />
      </div>
    </div>
  );
};
export default About;
