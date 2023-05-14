
import React from 'react'

const Candidates = () => {
  return (
    <div className='page-wrapper'>
      <div class="page-title-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-title-text">
                <h2 >Candidate List</h2>
                <ul >
                  <li ><a routerlink="/" ng-reflect-router-link="/" href="/">Home</a></li>
                  <li ><i class="icofont-simple-right"></i>
                  </li>
                  <li >Candidate List</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="candidate-list-widgets mb-4">
                <form action="#">
                  <div class="row g-2">
                    <div class="col-lg-3">
                      <div class="filler-job-form">
                        <i class="uil uil-briefcase-alt"></i>
                        <input type="search" class="form-control filter-job-input-box" id="exampleFormControlInput1" placeholder="Job, Company name... " />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="filler-job-form">
                        <i class="uil uil-location-point"></i>
                        <select class="form-select" data-trigger name="choices-single-location" id="choices-single-location" aria-label="Default select example">
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
                    <div class="col-lg-3">
                      <div class="filler-job-form">
                        <i class="uil uil-clipboard-notes"></i>
                        <select class="form-select " data-trigger name="choices-single-categories" id="choices-single-categories" aria-label="Default select example">
                          <option value="4">Accounting</option>
                          <option value="1">IT & Software</option>
                          <option value="3">Marketing</option>
                          <option value="5">Banking</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div>
                        <a href="javascript:void(0)" class="btn btn-primary"><i class="uil uil-filter"></i> Filter</a>
                        <a href="javascript:void(0)" class="btn btn-success ms-2"><i class="uil uil-cog"></i> Advance</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-lg-8 col-md-7">
              <div>
                <h6 class="fs-16 mb-0"> Showing 1 – 8 of 11 results </h6>
              </div>
            </div>

            <div class="col-lg-4 col-md-5">
              <div class="candidate-list-widgets">
                <div class="row">
                  <div class="col-md-6">
                    <div class="selection-widget mt-3 mt-md-0">
                      <select class="form-select" data-trigger name="choices-single-filter-orderby" id="choices-single-filter-orderby" aria-label="Default select example">
                        <option value="df">Default</option>
                        <option value="ne">Newest</option>
                        <option value="od">Oldest</option>
                        <option value="rd">Random</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="selection-widget mt-3 mt-md-0">
                      <select class="form-select" data-trigger name="choices-candidate-page" id="choices-candidate-page" aria-label="Default select example">
                        <option value="all">All</option>
                        <option value="4">4 per Page</option>
                        <option value="8">8 per Page</option>
                        <option value="12">12 per Page</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="candidate-list">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="candidate-grid-box bookmark-post card mt-4">
                  <div class="card-body p-4">
                    <div class="featured-label">
                      <span class="featured">featured</span>
                    </div>
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0 position-relative">
                        <img src="assets/images/user/img-01.jpg" alt="" class="avatar-md rounded" />
                        <span class="profile-active position-absolute badge rounded-circle bg-success"><span class="visually-hidden">active</span></span>
                      </div>
                      <div class="ms-3">
                        <a href="/candidates/candidate-details" class="primary-link"><h5 class="fs-17">Charles Dickens</h5></a>
                        <span class="badge bg-soft-info fs-13">$800/month</span>
                      </div>
                    </div>
                    <ul class="list-inline d-flex justify-content-between align-items-center">
                      <li class="list-inline-item text-warning fs-17">
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star-half-full"></i>
                      </li>
                      <li class="list-inline-item">
                        <div class="favorite-icon">
                          <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                        </div>
                      </li>
                    </ul>
                    <div class="border rounded mb-4">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="border-end px-3 py-2">
                            <p class="text-muted mb-0">Exp. : 0-3 Years</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="px-3 py-2">
                            <p class="text-muted mb-0">Freelancers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                    <div class="mt-3">
                      <a href="#hireNow" data-bs-toggle="modal" class="btn btn-primary btn-hover w-100 mt-2"><i class="mdi mdi-account-check"></i> Hire Now</a>
                      <a href="/candidates/candidate-details" class="btn btn-soft-primary btn-hover w-100 mt-2"><i class="mdi mdi-eye"></i> View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="candidate-grid-box bookmark-post card mt-4">
                  <div class="card-body p-4">
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0 position-relative">
                        <img src="assets/images/user/img-02.jpg" alt="" class="avatar-md rounded" />
                        <span class="profile-active position-absolute badge rounded-circle bg-success"><span class="visually-hidden">active</span></span>
                      </div>
                      <div class="ms-3">
                        <a href="/candidates/candidate-details" class="primary-link"><h5 class="fs-17">Gabriel Palmer</h5></a>
                        <span class="badge bg-soft-info fs-13">$350/hrs</span>
                      </div>
                    </div>
                    <ul class="list-inline d-flex justify-content-between align-items-center">
                      <li class="list-inline-item text-warning fs-17">
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star-half-full"></i>
                      </li>
                      <li class="list-inline-item">
                        <div class="favorite-icon">
                          <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                        </div>
                      </li>
                    </ul>
                    <div class="border rounded mb-4">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="border-end px-3 py-2">
                            <p class="text-muted mb-0">Exp. : 3.5  Years</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="px-3 py-2">
                            <p class="text-muted mb-0">Freelancers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                    <div class="mt-3">
                      <a href="#hireNow" data-bs-toggle="modal" class="btn btn-primary btn-hover w-100 mt-2"><i class="mdi mdi-account-check"></i> Hire Now</a>
                      <a href="/candidates/candidate-details" class="btn btn-soft-primary btn-hover w-100 mt-2"><i class="mdi mdi-eye"></i> View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="candidate-grid-box card mt-4">
                  <div class="card-body p-4">
                    <div class="featured-label">
                      <span class="featured">Urgent</span>
                    </div>
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0 position-relative">
                        <img src="assets/images/user/img-03.jpg" alt="" class="avatar-md rounded" />
                        <span class="profile-active position-absolute badge rounded-circle bg-danger"><span class="visually-hidden">active</span></span>
                      </div>
                      <div class="ms-3">
                        <a href="/candidates/candidate-details" class="primary-link"><h5 class="fs-17">James Lemire</h5></a>
                        <span class="badge bg-soft-info fs-13">$280/hrs</span>
                      </div>
                    </div>
                    <ul class="list-inline d-flex justify-content-between align-items-center">
                      <li class="list-inline-item text-warning fs-17">
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star-half-full"></i>
                      </li>
                      <li class="list-inline-item">
                        <div class="favorite-icon">
                          <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                        </div>
                      </li>
                    </ul>
                    <div class="border rounded mb-4">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="border-end px-3 py-2">
                            <p class="text-muted mb-0">Exp. : 4 Years</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="px-3 py-2">
                            <p class="text-muted mb-0">Freelancers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                    <div class="mt-3">
                      <a href="#hireNow" data-bs-toggle="modal" class="btn btn-primary btn-hover w-100 mt-2"><i class="mdi mdi-account-check"></i> Hire Now</a>
                      <a href="/candidates/candidate-details" class="btn btn-soft-primary btn-hover w-100 mt-2"><i class="mdi mdi-eye"></i> View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="candidate-grid-box card mt-4">
                  <div class="card-body p-4">
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0 position-relative">
                        <img src="assets/images/user/img-04.jpg" alt="" class="avatar-md rounded" />
                        <span class="profile-active position-absolute badge rounded-circle bg-success"><span class="visually-hidden">active</span></span>
                      </div>
                      <div class="ms-3">
                        <a href="/candidates/candidate-details" class="primary-link"><h5 class="fs-17">Rebecca Swartz</h5></a>
                        <span class="badge bg-soft-info fs-13">$240/hrs</span>
                      </div>
                    </div>
                    <ul class="list-inline d-flex justify-content-between align-items-center">
                      <li class="list-inline-item text-warning fs-17">
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star-half-full"></i>
                      </li>
                      <li class="list-inline-item">
                        <div class="favorite-icon">
                          <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                        </div>
                      </li>
                    </ul>
                    <div class="border rounded mb-4">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="border-end px-3 py-2">
                            <p class="text-muted mb-0">Exp. : 2 Years</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="px-3 py-2">
                            <p class="text-muted mb-0">Freelancers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                    <div class="mt-3">
                      <a href="#hireNow" data-bs-toggle="modal" class="btn btn-primary btn-hover w-100 mt-2"><i class="mdi mdi-account-check"></i> Hire Now</a>
                      <a href="/candidates/candidate-details" class="btn btn-soft-primary btn-hover w-100 mt-2"><i class="mdi mdi-eye"></i> View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="candidate-grid-box card mt-4">
                  <div class="card-body p-4">
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0 position-relative">
                        <img src="assets/images/user/img-05.jpg" alt="" class="avatar-md rounded" />
                        <span class="profile-active position-absolute badge rounded-circle bg-success"><span class="visually-hidden">active</span></span>
                      </div>
                      <div class="ms-3">
                        <a href="/candidates/candidate-details" class="primary-link"><h5 class="fs-17">Betty Richards</h5></a>
                        <span class="badge bg-soft-info fs-13">$198/hrs</span>
                      </div>
                    </div>
                    <ul class="list-inline d-flex justify-content-between align-items-center">
                      <li class="list-inline-item text-warning fs-17">
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star-half-full"></i>
                      </li>
                      <li class="list-inline-item">
                        <div class="favorite-icon">
                          <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                        </div>
                      </li>
                    </ul>
                    <div class="border rounded mb-4">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="border-end px-3 py-2">
                            <p class="text-muted mb-0">Exp. : 2 Years</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="px-3 py-2">
                            <p class="text-muted mb-0">Freelancers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                    <div class="mt-3">
                      <a href="#hireNow" data-bs-toggle="modal" class="btn btn-primary btn-hover w-100 mt-2"><i class="mdi mdi-account-check"></i> Hire Now</a>
                      <a href="/candidates/candidate-details" class="btn btn-soft-primary btn-hover w-100 mt-2"><i class="mdi mdi-eye"></i> View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="candidate-grid-box bookmark-post card mt-4">
                  <div class="card-body p-4">
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0 position-relative">
                        <img src="assets/images/user/img-06.jpg" alt="" class="avatar-md rounded" />
                        <span class="profile-active position-absolute badge rounded-circle bg-success"><span class="visually-hidden">active</span></span>
                      </div>
                      <div class="ms-3">
                        <a href="/candidates/candidate-details" class="primary-link"><h5 class="fs-17">Jeffrey Montgomery</h5></a>
                        <span class="badge bg-soft-info fs-13">$299/hrs</span>
                      </div>
                    </div>
                    <ul class="list-inline d-flex justify-content-between align-items-center">
                      <li class="list-inline-item text-warning fs-17">
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star-half-full"></i>
                      </li>
                      <li class="list-inline-item">
                        <div class="favorite-icon">
                          <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                        </div>
                      </li>
                    </ul>
                    <div class="border rounded mb-4">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="border-end px-3 py-2">
                            <p class="text-muted mb-0">Exp. : 7 Years</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="px-3 py-2">
                            <p class="text-muted mb-0">Freelancers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                    <div class="mt-3">
                      <a href="#hireNow" data-bs-toggle="modal" class="btn btn-primary btn-hover w-100 mt-2"><i class="mdi mdi-account-check"></i> Hire Now</a>
                      <a href="/candidates/candidate-details" class="btn btn-soft-primary btn-hover w-100 mt-2"><i class="mdi mdi-eye"></i> View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="candidate-grid-box bookmark-post card mt-4">
                  <div class="card-body p-4">
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0 position-relative">
                        <img src="assets/images/user/img-07.jpg" alt="" class="avatar-md rounded" />
                        <span class="profile-active position-absolute badge rounded-circle bg-success"><span class="visually-hidden">active</span></span>
                      </div>
                      <div class="ms-3">
                        <a href="/candidates/candidate-details" class="primary-link"><h5 class="fs-17">Brooke Hayes</h5></a>
                        <span class="badge bg-soft-info fs-13">$310/hrs</span>
                      </div>
                    </div>
                    <ul class="list-inline d-flex justify-content-between align-items-center">
                      <li class="list-inline-item text-warning fs-17">
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star-half-full"></i>
                      </li>
                      <li class="list-inline-item">
                        <div class="favorite-icon">
                          <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                        </div>
                      </li>
                    </ul>
                    <div class="border rounded mb-4">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="border-end px-3 py-2">
                            <p class="text-muted mb-0">Exp. : 4 Years</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="px-3 py-2">
                            <p class="text-muted mb-0">Freelancers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                    <div class="mt-3">
                      <a href="#hireNow" data-bs-toggle="modal" class="btn btn-primary btn-hover w-100 mt-2"><i class="mdi mdi-account-check"></i> Hire Now</a>
                      <a href="/candidates/candidate-details" class="btn btn-soft-primary btn-hover w-100 mt-2"><i class="mdi mdi-eye"></i> View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="candidate-grid-box card mt-4">
                  <div class="card-body p-4">
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0 position-relative">
                        <img src="assets/images/user/img-08.jpg" alt="" class="avatar-md rounded" />
                        <span class="profile-active position-absolute badge rounded-circle bg-danger"><span class="visually-hidden">active</span></span>
                      </div>
                      <div class="ms-3">
                        <a href="/candidates/candidate-details" class="primary-link"><h5 class="fs-17">Cerys Woods</h5></a>
                        <span class="badge bg-soft-info fs-13">$450/hrs</span>
                      </div>
                    </div>
                    <ul class="list-inline d-flex justify-content-between align-items-center">
                      <li class="list-inline-item text-warning fs-17">
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star-half-full"></i>
                      </li>
                      <li class="list-inline-item">
                        <div class="favorite-icon">
                          <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                        </div>
                      </li>
                    </ul>
                    <div class="border rounded mb-4">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="border-end px-3 py-2">
                            <p class="text-muted mb-0">Exp. : 4.5 Years</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="px-3 py-2">
                            <p class="text-muted mb-0">Freelancers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                    <div class="mt-3">
                      <a href="#hireNow" data-bs-toggle="modal" class="btn btn-primary btn-hover w-100 mt-2"><i class="mdi mdi-account-check"></i> Hire Now</a>
                      <a href="/candidates/candidate-details" class="btn btn-soft-primary btn-hover w-100 mt-2"><i class="mdi mdi-eye"></i> View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="candidate-grid-box card mt-4">
                  <div class="card-body p-4">
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0 position-relative">
                        <img src="assets/images/user/img-09.jpg" alt="" class="avatar-md rounded" />
                        <span class="profile-active position-absolute badge rounded-circle bg-success"><span class="visually-hidden">active</span></span>
                      </div>
                      <div class="ms-3">
                        <a href="/candidates/candidate-details" class="primary-link"><h5 class="fs-17">Olivia Murphy</h5></a>
                        <span class="badge bg-soft-info fs-13">$300/hrs</span>
                      </div>
                    </div>
                    <ul class="list-inline d-flex justify-content-between align-items-center">
                      <li class="list-inline-item text-warning fs-17">
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star"></i>
                        <i class="mdi mdi-star-half-full"></i>
                      </li>
                      <li class="list-inline-item">
                        <div class="favorite-icon">
                          <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                        </div>
                      </li>
                    </ul>
                    <div class="border rounded mb-4">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="border-end px-3 py-2">
                            <p class="text-muted mb-0">Exp. : 7 Years</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="px-3 py-2">
                            <p class="text-muted mb-0">Freelancers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-muted">Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                    <div class="mt-3">
                      <a href="#hireNow" data-bs-toggle="modal" class="btn btn-primary btn-hover w-100 mt-2"><i class="mdi mdi-account-check"></i> Hire Now</a>
                      <a href="/candidates/candidate-details" class="btn btn-soft-primary btn-hover w-100 mt-2"><i class="mdi mdi-eye"></i> View Profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5 pt-2">
            <div class="col-lg-12">
              <nav aria-label="Page navigation example">
                <ul class="pagination job-pagination mb-0 justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0)" tabindex="-1">
                      <i class="mdi mdi-chevron-double-left fs-15"></i>
                    </a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0)">
                      <i class="mdi mdi-chevron-double-right fs-15"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>
      </section>

      <div class="modal fade" id="hireNow" tabindex="-1" aria-labelledby="hireNow" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-5">
              <div class="text-center mb-4">
                <h5 class="modal-title" id="staticBackdropLabel">Hire Now</h5>
              </div>
              <div class="position-absolute end-0 top-0 p-3">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="mb-3">
                <label for="namrFormControlInput" class="form-label">Company Name</label>
                <input type="text" class="form-control" id="namrFormControlInput" placeholder="Enter your company name" />
              </div>
              <div class="mb-3">
                <label for="emailFormControlInput" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="emailFormControlInput" placeholder="Enter your email" />
              </div>
              <div class="mb-4">
                <label for="messageFormControlTextarea" class="form-label">Message</label>
                <textarea class="form-control" id="messageFormControlTextarea" rows="4" placeholder="Enter your message" />
              </div>
              <button type="submit" class="btn btn-primary w-100">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Candidates;