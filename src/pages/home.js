import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { slideStetting2 } from "../components/constant/allTools";
import JobCard from "../components/Jobs/JobCard";
import { useAuth } from "../contexts/AuthContext"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import PrevCompany from "../components/Companys/PrevCompany";
import BlogSlider from "../components/Blog/BlogSlider";

const Home = () => {
  const { currentUser } = useAuth();

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const jobRef = collection(db, "Jobs");
    const q = query(jobRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const jobs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobs);
    });
  }, []);


  return (
    <div className=" page-wrapper home">
      <section id="hero">
        <div className="container mb-auto">
          <div className="hero-content">
            <h2 className="title">Trouve ton Job</h2>
            <p className="desc">
              L’ICH est spécialisée dans le placement de travail à l'international.
            </p>
            <form>
              <div className="banner-form">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="filter-search-form filter-border mt-3 mt-md-0">
                      <input type="text" placeholder="Job, Company name..." className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className='filter-search-form mt-3 mt-md-0'>
                      <select className="form-select form-control">
                        <option value="USA">États-Unis</option>
                        <option value="CAN">Canada</option>
                        <option value="UK">Royaume-Uni</option>
                        <option value="GER">Allemagne</option>
                        <option value="FRA">France</option>
                        <option value="AUS">Australie</option>
                        <option value="RUS">Russie</option>
                        <option value="MAR">Maroc</option>
                        <option value="SUI">Suisse</option>
                        <option value="NED">Pays-Bas</option>
                        <option value="CIV">Cote D'Ivoire</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className='mt-3 mt-md-0 h-100'>
                      <button type="submit" className="btn submit-btn w-100 h-100">Rechercher</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="banner-btn">
              <a href="/signup">Créez votre profil</a>
              {/* <a href="/submit-resume">Envoyez votre CV</a> */}
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" className="d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="content">
                <p>
                  Nous aidons les demandeurs d'emplois de toutes ordres à trouver des offres d'emploi correspondant à leur profil professionnel.
                  Nous recueillons les CV de nos clients et les envoyons à des employeurs qui cherchent des candidats pour pourvoir des postes vacants. Les CV sont adaptés, et soutenu de lettre de motivation de qualité de sorte à vous fournir un solide dossier pour augmenter vos chances d’être retenu pour l’offre.
                </p>
                <div className="text-center">
                  <a href="/about" className="more-btn btn border">
                    Voir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row account-wrap">
                <div className="col-sm-6 col-lg-4">
                  <div className="account-item">
                    <i className="flaticon-approved"></i>
                    <span>Inscrivez vous</span>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="account-item">
                    <i className="flaticon-cv"></i>
                    <span >Envoyez voter CV</span>
                  </div>
                </div>
                <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                  <div className="account-item account-last">
                    <i className="flaticon-customer-service"></i>
                    <span >Obtenez un Job</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="category">
        <div className="container">
          <div className="section-title">
            <h2 >Choisissez votre catégorie</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2 category-border">
              <div className="category-item"><i
                className="flaticon-settings"></i><a href="/">Support technique
                </a></div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2 category-border">
              <div className="category-item category-two"><i
                className="flaticon-layers"></i><a href="/">Développement de l'entreprise
                </a></div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2 category-border">
              <div className="category-item category-three"><i
                className="flaticon-house"></i><a href="/">Affaires immobilières
                </a></div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2 category-border">
              <div className="category-item category-four"><i
                className="flaticon-analysis"></i><a href="/">Analyse du marché des actions
                </a></div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2 category-border-three">
              <div className="category-item category-five"><i
                className="flaticon-sun"></i><a href="/">Météo et environnement
                </a></div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2 category-border-two">
              <div className="category-item category-six"><i
                className="flaticon-hand"></i><a href="/">Finance et services bancaires
                </a></div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2 category-border-two">
              <div className="category-item category-seven"><i
                className="flaticon-neural"></i><a href="/">Services informatiques et de réseau
                </a></div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2 category-border-two">
              <div className="category-item category-eight"><i
                className="flaticon-dish"></i><a href="/">Services de restauration</a></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-5 text-center">
                <a href="/jobs" className="btn btn-primary btn-hover">Voir toutes les categories <i className="uil uil-arrow-right ms-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='fav-jobs' className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title">Nouveaux emplois et emplois aléatoires</h4>
                <p className="text-muted mb-1">Publiez une offre d'emploi pour nous parler de votre projet. Nous vous mettrons rapidement en contact avec les bons freelances.</p>
              </div>
            </div>
          </div>

          <div className="row">
            {jobs.length > 0 &&
              jobs
                .sort((a, b) => b.date - a.date)
                .slice(0, 4)
                .map((job) => (
                  <JobCard job={job} key={job.id} user={currentUser} />
                ))}
            <div className="text-center mt-4 pt-2">
              <a href="/jobs/job-list" className="btn btn-primary">Voir tous les emplois<i className="uil uil-arrow-right"></i></a>
            </div>

          </div>

        </div>

      </section>

      <section id="portal">
        <div className='container'>
          <div className=" preview claire">
            <div className="preview-content">
              <div className="box-1">
                <div className="hov-img0">
                  <img src="/img/portal.jpg" alt="IMG" />
                </div>
              </div>
              <div className="box-2">
                <h3>Portail d'emploi fiable et populaire</h3>
                <p>Vous êtes une entreprise à la recherche de talents internationaux ? Publiez vos offres d'emploi sur notre plateforme et atteignez un vaste réseau de professionnels qualifiés du monde entier. Trouvez les candidats idéaux pour pourvoir vos postes vacants et bénéficiez de notre expertise en placement de travail à l'international. Rejoignez notre communauté d'employeurs dès maintenant !</p>
                <div className="more">
                  <a href="/jobs/new-job" className='btn border mx-2'>Poster un Job<i className="icofont-swoosh-right"></i></a>
                  <a href="/company-signup" className='btn border'>Joindre<i className="icofont-swoosh-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className="counter-ctn pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-3 col-lg-3">
              <div className="counter-item"><i
                className="flaticon-employee"></i>
                <h3 ><span className="counter">14</span>k+</h3>
                <p >Job Available</p>
              </div>
            </div>
            <div className="col-6 col-sm-3 col-lg-3">
              <div className="counter-item"><i
                className="flaticon-curriculum"></i>
                <h3 ><span className="counter">18</span>k+</h3>
                <p >CV Submitted</p>
              </div>
            </div>
            <div className="col-6 col-sm-3 col-lg-3">
              <div className="counter-item"><i
                className="flaticon-enterprise"></i>
                <h3 ><span className="counter">9</span>k+</h3>
                <p >Companies</p>
              </div>
            </div>
            <div className="col-6 col-sm-3 col-lg-3">
              <div className="counter-item"><i
                className="flaticon-businessman-paper-of-the-application-for-a-job"></i>
                <h3 ><span className="counter">35</span>+</h3>
                <p >Appointed to Job</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="testimonial">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-4 pb-2">
                <h3 className="title mb-3">Happy Candidates</h3>
                <p className="text-muted">Post a job to tell us about your project. We'll quickly match you with the
                  right freelancers.</p>
              </div>
            </div>

          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Slider
                className="slick-arrow-style slick-arrow-style_hero slick-dot-style row"
                prevArrow={
                  <button type="button" className="slick-prev slick-arrow">
                    {"<"}
                  </button>
                }
                nextArrow={
                  <button type="button" className="slick-next slick-arrow">
                    {">"}
                  </button>
                }
                {...slideStetting2}

              >
                <div className="card testi-box">
                  <div className="card-body">
                    <div className="mb-4">
                      <img src="assets/images/logo/mailchimp.svg" height="50" alt="" />
                    </div>
                    <p className="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
                      Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                      shortcuts. Even if the client is being careless. "</p>
                    <h5 className="mb-0">Jeffrey Montgomery</h5>
                    <p className="text-muted mb-0">Product Manager</p>
                  </div>
                </div>
                <div className="card testi-box">
                  <div className="card-body">
                    <div className="mb-4">
                      <img src="assets/images/logo/wordpress.svg" height="50" alt="" />
                    </div>
                    <p className="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
                      Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                      shortcuts. Even if the client is being careless. "</p>
                    <h5 className="mb-0">Rebecca Swartz</h5>
                    <p className="text-muted mb-0">Creative Designer</p>
                  </div>
                </div>
                <div className="card testi-box">
                  <div className="card-body">
                    <div className="mb-4">
                      <img src="assets/images/logo/instagram.svg" height="50" alt="" />
                    </div>
                    <p className="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
                      Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                      shortcuts. Even if the client is being careless. "</p>
                    <h5 className="mb-0">Charles Dickens</h5>
                    <p className="text-muted mb-0">Store Assistant</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <BlogSlider />

      <PrevCompany />
    </div>
  )
}

export default Home