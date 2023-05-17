import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Masonry from "react-masonry-css";
import {
  slideStetting1,
  slideStetting2,
  breakpoints,
} from "../components/constant/allTools";
import JobCard from "../components/Jobs/JobCard";
import { useAuth } from "../contexts/AuthContext"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

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
    <div className="home">
      <section id="hero">
        <div class="container mb-auto">
          <div class="hero-content">
            <h2 class="title">Trouve ton Job</h2>
            <p class="desc">
              L’ICH est spécialisée dans le placement de travail à l'international.
            </p>
            <form>
              <div class="banner-form">
                <div class="row g-0">
                  <div class="col-md-4">
                    <div class="filter-search-form filter-border mt-3 mt-md-0">
                      <input type="text" placeholder="Job, Company name..." class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div className='filter-search-form mt-3 mt-md-0'>
                      <select class="form-select form-control">
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
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div className='mt-3 mt-md-0 h-100'>
                      <button type="submit" class="btn submit-btn w-100 h-100">Rechercher</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div class="banner-btn">
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
              <div class="row account-wrap">
                <div class="col-sm-6 col-lg-4">
                  <div class="account-item">
                    <i class="flaticon-approved"></i>
                    <span>Inscrivez vous</span>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                  <div class="account-item">
                    <i class="flaticon-cv"></i>
                    <span >Envoyez voter CV</span>
                  </div>
                </div>
                <div class="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                  <div class="account-item account-last">
                    <i class="flaticon-customer-service"></i>
                    <span >Obtenez un Job</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="category">
        <div class="container">
          <div class="section-title">
            <h2 >Choisissez votre catégorie</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 mt-4 pt-2 category-border">
              <div class="category-item"><i
                class="flaticon-settings"></i><a href="/">Support technique
                </a></div>
            </div>
            <div class="col-lg-3 col-md-6 mt-4 pt-2 category-border">
              <div class="category-item category-two"><i
                class="flaticon-layers"></i><a href="/">Développement de l'entreprise
                </a></div>
            </div>
            <div class="col-lg-3 col-md-6 mt-4 pt-2 category-border">
              <div class="category-item category-three"><i
                class="flaticon-house"></i><a href="/">Affaires immobilières
                </a></div>
            </div>
            <div class="col-lg-3 col-md-6 mt-4 pt-2 category-border">
              <div class="category-item category-four"><i
                class="flaticon-analysis"></i><a href="/">Analyse du marché des actions
                </a></div>
            </div>
            <div class="col-lg-3 col-md-6 mt-4 pt-2 category-border-three">
              <div class="category-item category-five"><i
                class="flaticon-sun"></i><a href="/">Météo et environnement
                </a></div>
            </div>
            <div class="col-lg-3 col-md-6 mt-4 pt-2 category-border-two">
              <div class="category-item category-six"><i
                class="flaticon-hand"></i><a href="/">Finance et services bancaires
                </a></div>
            </div>
            <div class="col-lg-3 col-md-6 mt-4 pt-2 category-border-two">
              <div class="category-item category-seven"><i
                class="flaticon-neural"></i><a href="/">Services informatiques et de réseau
                </a></div>
            </div>
            <div class="col-lg-3 col-md-6 mt-4 pt-2 category-border-two">
              <div class="category-item category-eight"><i
                class="flaticon-dish"></i><a href="/">Services de restauration</a></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="mt-5 text-center">
                <a href="/jobs" class="btn btn-primary btn-hover">Voir toutes les categories <i class="uil uil-arrow-right ms-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='fav-jobs' class="bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center mb-4 pb-2">
                <h4 class="title">Nouveaux emplois et emplois aléatoires</h4>
                <p class="text-muted mb-1">Publiez une offre d'emploi pour nous parler de votre projet. Nous vous mettrons rapidement en contact avec les bons freelances.</p>
              </div>
            </div>
          </div>

          <div class="row">
            {jobs.length > 0 &&
              jobs
                .sort((a, b) => b.date - a.date)
                .slice(0, 4)
                .map((job) => (
                  <JobCard job={job} key={job.id} user={currentUser} />
                ))}
            <div class="text-center mt-4 pt-2">
              <a href="/jobs/job-list" class="btn btn-primary">Voir tous les emplois<i class="uil uil-arrow-right"></i></a>
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
                  <a href="/jobs/new-job" className='btn border mx-2'>Poster un Job<i class="icofont-swoosh-right"></i></a>
                  <a href="/signup" className='btn border'>Postuler<i class="icofont-swoosh-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div class="counter-area pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-6 col-sm-3 col-lg-3">
              <div class="counter-item"><i
                class="flaticon-employee"></i>
                <h3 ><span class="counter">14</span>k+</h3>
                <p >Job Available</p>
              </div>
            </div>
            <div class="col-6 col-sm-3 col-lg-3">
              <div class="counter-item"><i
                class="flaticon-curriculum"></i>
                <h3 ><span class="counter">18</span>k+</h3>
                <p >CV Submitted</p>
              </div>
            </div>
            <div class="col-6 col-sm-3 col-lg-3">
              <div class="counter-item"><i
                class="flaticon-enterprise"></i>
                <h3 ><span class="counter">9</span>k+</h3>
                <p >Companies</p>
              </div>
            </div>
            <div class="col-6 col-sm-3 col-lg-3">
              <div class="counter-item"><i
                class="flaticon-businessman-paper-of-the-application-for-a-job"></i>
                <h3 ><span class="counter">35</span>+</h3>
                <p >Appointed to Job</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="testimonial">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center mb-4 pb-2">
                <h3 class="title mb-3">Happy Candidates</h3>
                <p class="text-muted">Post a job to tell us about your project. We'll quickly match you with the
                  right freelancers.</p>
              </div>
            </div>

          </div>

          <div class="row justify-content-center">
            <div class="col-lg-8">
              <Slider
                className="slick-arrow-style slick-arrow-style_hero slick-dot-style row"
                prevArrow={
                  <button type="button" class="slick-prev slick-arrow">
                    {"<"}
                  </button>
                }
                nextArrow={
                  <button type="button" class="slick-next slick-arrow">
                    {">"}
                  </button>
                }
                {...slideStetting2}

              >
                <div class="card testi-box">
                  <div class="card-body">
                    <div class="mb-4">
                      <img src="assets/images/logo/mailchimp.svg" height="50" alt="" />
                    </div>
                    <p class="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
                      Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                      shortcuts. Even if the client is being careless. "</p>
                    <h5 class="mb-0">Jeffrey Montgomery</h5>
                    <p class="text-muted mb-0">Product Manager</p>
                  </div>
                </div>
                <div class="card testi-box">
                  <div class="card-body">
                    <div class="mb-4">
                      <img src="assets/images/logo/wordpress.svg" height="50" alt="" />
                    </div>
                    <p class="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
                      Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                      shortcuts. Even if the client is being careless. "</p>
                    <h5 class="mb-0">Rebecca Swartz</h5>
                    <p class="text-muted mb-0">Creative Designer</p>
                  </div>
                </div>
                <div class="card testi-box">
                  <div class="card-body">
                    <div class="mb-4">
                      <img src="assets/images/logo/instagram.svg" height="50" alt="" />
                    </div>
                    <p class="testi-content lead text-muted mb-4">" Very well thought out and articulate communication.
                      Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                      shortcuts. Even if the client is being careless. "</p>
                    <h5 class="mb-0">Charles Dickens</h5>
                    <p class="text-muted mb-0">Store Assistant</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section class="blog p-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <a href="/blog">
                  <span>Blog</span>
                </a>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div className="col-12">
              <Slider
                className="slick-arrow-style slick-arrow-style_hero slick-dot-style row"
                prevArrow={
                  <button type="button" class="slick-prev slick-arrow">
                    {"<"}
                  </button>
                }
                nextArrow={
                  <button type="button" class="slick-next slick-arrow">
                    {">"}
                  </button>
                }
                {...slideStetting1}
              >
                <div class="blog-box card p-2 mt-3">
                  <div class="blog-img position-relative overflow-hidden">
                    <img src="./img/blog/img-01.jpg" alt="" class="img-fluid" />
                    <div class="bg-overlay"></div>
                    <div class="author">
                      <p class=" mb-0"><i class="mdi mdi-account text-light"></i> <a href="javascript:void(0)"
                        class="text-light user">Dirio Walls</a></p>
                      <p class="text-light mb-0 date"><i class="mdi mdi-calendar-check"></i> 01 July, 2021</p>
                    </div>
                    <div class="likes">
                      <ul class="list-unstyled mb-0">
                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-white"><i
                          class="mdi mdi-heart-outline me-1"></i> 33</a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-white"><i
                          class="mdi mdi-comment-outline me-1"></i> 08</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body">
                    <a href="blog-details.html" class="primary-link">
                      <h5 class="fs-17">How apps is the IT world ?</h5>
                    </a>
                    <p class="text-muted">The final text is not yet avaibookmark-label. Dummy texts have Internet tend
                      been in use by typesetters.</p>
                    <a href="blog-details.html" class="form-text text-primary">Read more <i class="mdi mdi-chevron-right align-middle"></i></a>
                  </div>
                </div>
                <div class="blog-box card p-2 mt-3">
                  <div class="blog-img position-relative overflow-hidden">
                    <img src="./img/blog/img-02.jpg" alt="" class="img-fluid" />
                    <div class="bg-overlay"></div>
                    <div class="author">
                      <p class=" mb-0"><i class="mdi mdi-account text-light"></i> <a href="javascript:void(0)"
                        class="text-light user">Brandon Carney</a></p>
                      <p class="text-light mb-0 date"><i class="mdi mdi-calendar-check"></i> 25 June, 2021</p>
                    </div>
                    <div class="likes">
                      <ul class="list-unstyled mb-0">
                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-white"><i
                          class="mdi mdi-heart-outline me-1"></i> 44</a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-white"><i
                          class="mdi mdi-comment-outline me-1"></i> 25</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body">
                    <a href="blog-details.html" class="primary-link">
                      <h5 class="fs-17">Smartest Applications for Business ?</h5>
                    </a>
                    <p class="text-muted">Due to its widespread use as filler text for layouts, non-readability
                      is of great importance: human perception.</p>
                    <a href="blog-details.html" class="form-text text-primary">Read more <i class="mdi mdi-chevron-right align-middle"></i></a>
                  </div>
                </div>
                <div class="blog-box card p-2 mt-3">
                  <div class="blog-img position-relative overflow-hidden">
                    <img src="./img/blog/img-03.jpg" alt="" class="img-fluid" />
                    <div class="bg-overlay"></div>
                    <div class="author">
                      <p class=" mb-0"><i class="mdi mdi-account text-light"></i> <a href="javascript:void(0)"
                        class="text-light user">William Mooneyhan</a></p>
                      <p class="text-light mb-0 date"><i class="mdi mdi-calendar-check"></i> 16 March, 2021
                      </p>
                    </div>
                    <div class="likes">
                      <ul class="list-unstyled mb-0">
                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-white"><i class="mdi mdi-heart-outline me-1"></i> 68</a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-white"><i class="mdi mdi-comment-outline me-1"></i> 20</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body">
                    <a href="blog-details.html" class="primary-link">
                      <h5 class="fs-17">Design your apps in your own way ?</h5>
                    </a>
                    <p class="text-muted">One disadvantage of Lorum Ipsum is that in Latin certain letters
                      appear more frequently than others.</p>
                    <a href="blog-details.html" class="form-text text-primary">Read more <i class="mdi mdi-chevron-right align-middle"></i></a>
                  </div>
                </div>
                <div class="blog-box card p-2 mt-3">
                  <div class="blog-img position-relative overflow-hidden">
                    <img src="./img/blog/img-04.jpg" alt="" class="img-fluid" />
                    <div class="bg-overlay"></div>
                    <div class="author">
                      <p class=" mb-0"><i class="mdi mdi-account text-light"></i> <a href="javascript:void(0)"
                        class="text-light user">William Mooneyhan</a></p>
                      <p class="text-light mb-0 date"><i class="mdi mdi-calendar-check"></i> 16 March, 2021
                      </p>
                    </div>
                    <div class="likes">
                      <ul class="list-unstyled mb-0">
                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-white"><i class="mdi mdi-heart-outline me-1"></i> 68</a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-white"><i class="mdi mdi-comment-outline me-1"></i> 20</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body">
                    <a href="blog-details.html" class="primary-link">
                      <h5 class="fs-17">Design your apps in your own way ?</h5>
                    </a>
                    <p class="text-muted">One disadvantage of Lorum Ipsum is that in Latin certain letters
                      appear more frequently than others.</p>
                    <a href="blog-details.html" class="form-text text-primary">Read more <i class="mdi mdi-chevron-right align-middle"></i></a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section class="our_sponsors_section pb-5">
        <div class="container shadow ws">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <span>Nos Partenaires</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                type="ul"
              >
                <div class="our_sponsors_img p-1">
                  <div>
                    <a href="ifmsa.html">
                      <img src="/img/ifmsa.png" />
                    </a>
                  </div>
                </div>
                <div class="our_sponsors_img p-1">
                  <div>
                    <a href="amsa-international.html">
                      <img src="/img/famsa.png" />
                    </a>
                  </div>
                </div>
                <div class="our_sponsors_img p-1">
                  <div>
                    <a href="www.esu-online.html">
                      <img src="/img/amsa.png" />
                    </a>
                  </div>
                </div>
                <div class="our_sponsors_img p-1">
                  <div>
                    <a href="#">
                      <img src="/img/aepharm.png" />
                    </a>
                  </div>
                </div>
                <div class="our_sponsors_img p-1">
                  <div>
                    <a href="#">
                      <img src="/img/fespao2.png" />
                    </a>
                  </div>
                </div>
                <div class="our_sponsors_img p-1">
                  <div>
                    <a href="/">
                      <img src="/img/emsa.png" />
                    </a>
                  </div>
                </div>
                <div class="our_sponsors_img p-1">
                  <div>
                    <a href="#">
                      <img src="/img/ipsf.png" />
                    </a>
                  </div>
                </div>
              </Masonry>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home