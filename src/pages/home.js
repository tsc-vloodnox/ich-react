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
                        <option value="AF">Afghanistan</option>
                        <option value="AX">&Aring;land Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia, Plurinational State of</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">British Indian Ocean Territory</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo, the Democratic Republic of the</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">C&ocirc;te d'Ivoire</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">Heard Island and McDonald Islands</option>
                        <option value="VA">Holy See (Vatican City State)</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran, Islamic Republic of</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP">Korea, Democratic People's Republic of</option>
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Lao People's Democratic Republic</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libyan Arab Jamahiriya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia, Federated States of</option>
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="AN">Netherlands Antilles</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">Palestinian Territory, Occupied</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">R&eacute;union</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barth&eacute;lemy</option>
                        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin (French part)</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">Saint Vincent and the Grenadines</option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UM">United States Minor Outlying Islands</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela, Bolivarian Republic of</option>
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.S.</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
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