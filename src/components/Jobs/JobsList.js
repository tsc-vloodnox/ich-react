import React from "react";

const JobsList = () => {

    return (
        <div className="page-wrapper">
            <div class="page-title-area">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-title-text">
                                <h2 >Job List</h2>
                                <ul >
                                    <li ><a href="/">Home</a></li>
                                    <li ><i class="icofont-simple-right"></i></li>
                                    <li ><a href="/jobs">Job Categories</a></li>
                                    <li ><i class="icofont-simple-right"></i></li>
                                    <li >Job List</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="section">
                <div class="container">
                    <form action="#">
                        <div class="row g-2">
                            <div class="col-lg-3 col-md-6">
                                <div class="filler-job-form">
                                    <i class="uil uil-briefcase-alt"></i>
                                    <input type="search" class="form-control filter-job-input-box" id="exampleFormControlInput1" placeholder="Job, Company name... " />
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
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
                            <div class="col-lg-3 col-md-6">
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
                            <div class="col-lg-3 col-md-6">
                                <a href="javascript:void(0)" class="btn btn-primary w-100"><i class="uil uil-filter"></i> Fliter</a>
                            </div>
                        </div>
                    </form>
                    <div class="row mt-4">
                        <div class="col-lg-12">
                            <h6 class="fs-16 mb-3">Your Selected</h6>
                            <div class="selecte-tag position-relative">
                                <input type="text" id="choices-text-remove-button" value="design, marketing" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mt-4">
                                <h6 class="fs-16">Showing all results</h6>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="job-box bookmark-post card mt-4">
                                <div class="p-4">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <a href="company-details.html"><img src="assets/images/featured-job/img-01.png" alt="" class="img-fluid rounded-3" /></a>
                                        </div>
                                        <div class="col-lg-10">
                                            <div class="mt-3 mt-lg-0">
                                                <h5 class="fs-17 mb-1"><a href="job-details.html" class="text-dark">Magento Developer</a> <small class="text-muted fw-normal">(0-2 Yrs Exp.)</small></h5>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> California</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div class="mt-2">
                                                    <span class="badge bg-soft-success mt-1">Full Time</span>
                                                    <span class="badge bg-soft-warning mt-1">Urgent</span>
                                                    <span class="badge bg-soft-info mt-1">Private</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="favorite-icon">
                                        <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                                    </div>
                                </div>
                                <div class="p-3 bg-light">
                                    <div class="row justify-content-between">
                                        <div class="col-md-8">
                                            <div>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item"><i class="uil uil-tag"></i> Keywords :</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Ui designer</a>,</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">developer</a></li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div class="col-md-4">
                                            <div class="text-md-end">
                                                <a href="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="job-box card mt-4">
                                <div class="p-4">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <a href="company-details.html"><img src="assets/images/featured-job/img-02.png" alt="" class="img-fluid rounded-3" /></a>
                                        </div>
                                        <div class="col-lg-10">
                                            <div class="mt-3 mt-lg-0">
                                                <h5 class="fs-17 mb-1"><a href="job-details.html" class="text-dark">Marketing Director</a> <small class="text-muted fw-normal">(2-4 Yrs Exp.)</small></h5>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> New York</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div class="mt-2">
                                                    <span class="badge bg-soft-danger mt-1">Part Time</span>
                                                    <span class="badge bg-soft-info mt-1">Private</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="favorite-icon">
                                        <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                                    </div>
                                </div>
                                <div class="p-3 bg-light">
                                    <div class="row justify-content-between">
                                        <div class="col-md-8">
                                            <div>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item"><i class="uil uil-tag"></i> Keywords :</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Marketing</a>,</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">business</a></li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div class="col-md-4">
                                            <div class="text-md-end">
                                                <a href="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="job-box bookmark-post bookmark-post card mt-4">
                                <div class="p-4">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <a href="company-details.html"><img src="assets/images/featured-job/img-03.png" alt="" class="img-fluid rounded-3" /></a>
                                        </div>
                                        <div class="col-lg-10">
                                            <div class="mt-3 mt-lg-0">
                                                <h5 class="fs-17 mb-1"><a href="job-details.html" class="text-dark">HTML Developer</a> <small class="text-muted fw-normal">(2-4 Yrs Exp.)</small></h5>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> California</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div class="mt-2">
                                                    <span class="badge bg-soft-purple mt-1">Freelance</span>
                                                    <span class="badge bg-soft-blue mt-1">Internship</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="favorite-icon">
                                        <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                                    </div>
                                </div>
                                <div class="p-3 bg-light">
                                    <div class="row justify-content-between">
                                        <div class="col-md-8">
                                            <div>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item"><i class="uil uil-tag"></i> Keywords :</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Ui designer</a>,</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">developer</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="text-md-end">
                                                <a href="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="job-box card mt-4">
                                <div class="p-4">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <a href="company-details.html"><img src="assets/images/featured-job/img-04.png" alt="" class="img-fluid rounded-3" /></a>
                                        </div>
                                        <div class="col-lg-10">
                                            <div class="mt-3 mt-lg-0">
                                                <h5 class="fs-17 mb-1"><a href="job-details.html" class="text-dark">Product Sales Specialist</a> <small class="text-muted fw-normal">(5+ Yrs Exp.)</small></h5>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> California</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div class="mt-2">
                                                    <span class="badge bg-soft-success mt-1">Full Time</span>
                                                    <span class="badge bg-soft-info mt-1">Private</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="favorite-icon">
                                        <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                                    </div>
                                </div>
                                <div class="p-3 bg-light">
                                    <div class="row justify-content-between">
                                        <div class="col-md-8">
                                            <div>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item"><i class="uil uil-tag"></i> Keywords :</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Ui designer</a>,</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">developer</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="text-md-end">
                                                <a href="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6">
                            <div class="job-box card mt-4">
                                <div class="p-4">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <a href="company-details.html"><img src="assets/images/featured-job/img-05.png" alt="" class="img-fluid rounded-3" /></a>
                                        </div>
                                        <div class="col-lg-10">
                                            <div class="mt-3 mt-lg-0">
                                                <h5 class="fs-17 mb-1"><a href="job-details.html" class="text-dark">Product Designer</a> <small class="text-muted fw-normal">(0-5 Yrs Exp.)</small></h5>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> California</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div class="mt-2">
                                                    <span class="badge bg-soft-blue mt-1">Internship</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="favorite-icon">
                                        <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                                    </div>
                                </div>
                                <div class="p-3 bg-light">
                                    <div class="row justify-content-between">
                                        <div class="col-md-8">
                                            <div>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item"><i class="uil uil-tag"></i> Keywords :</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Ui designer</a>,</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">developer</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="text-md-end">
                                                <a href="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="job-box bookmark-post card mt-4">
                                <div class="p-4">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <a href="company-details.html"><img src="assets/images/featured-job/img-06.png" alt="" class="img-fluid rounded-3" /></a>
                                        </div>
                                        <div class="col-lg-10">
                                            <div class="mt-3 mt-lg-0">
                                                <h5 class="fs-17 mb-1"><a href="job-details.html" class="text-dark">Project Manager</a> <small class="text-muted fw-normal">(0-2 Yrs Exp.)</small></h5>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> California</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div class="mt-2">
                                                    <span class="badge bg-soft-success mt-1">Full Time</span>
                                                    <span class="badge bg-soft-warning mt-1">Urgent</span>
                                                    <span class="badge bg-soft-info mt-1">Private</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="favorite-icon">
                                        <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                                    </div>
                                </div>
                                <div class="p-3 bg-light">
                                    <div class="row justify-content-between">
                                        <div class="col-md-8">
                                            <div>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item"><i class="uil uil-tag"></i> Keywords :</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Ui designer</a>,</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Manager</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="text-md-end">
                                                <a href="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="job-box card mt-4">
                                <div class="p-4">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <a href="company-details.html"><img src="assets/images/featured-job/img-07.png" alt="" class="img-fluid rounded-3" /></a>
                                        </div>
                                        <div class="col-lg-10">
                                            <div class="mt-3 mt-lg-0">
                                                <h5 class="fs-17 mb-1"><a href="job-details.html" class="text-dark">HTML Developer</a></h5>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> California</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div class="mt-2">
                                                    <span class="badge bg-soft-purple mt-1">Freelance</span>
                                                    <span class="badge bg-soft-warning mt-1">Urgent</span>
                                                    <span class="badge bg-soft-info mt-1">Private</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="favorite-icon">
                                        <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                                    </div>
                                </div>
                                <div class="p-3 bg-light">
                                    <div class="row justify-content-between">
                                        <div class="col-md-8">
                                            <div>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item"><i class="uil uil-tag"></i> Keywords :</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Ui designer</a>,</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Manager</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="text-md-end">
                                                <a href="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="job-box card mt-4">
                                <div class="p-4">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <a href="company-details.html"><img src="assets/images/featured-job/img-08.png" alt="" class="img-fluid rounded-3" /></a>
                                        </div>
                                        <div class="col-lg-10">
                                            <div class="mt-3 mt-lg-0">
                                                <h5 class="fs-17 mb-1"><a href="job-details.html" class="text-dark">Business Associate</a></h5>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> California</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> $250 - $800 / month</p>
                                                    </li>
                                                </ul>
                                                <div class="mt-2">
                                                    <span class="badge bg-soft-danger mt-1">Part Time</span>
                                                    <span class="badge bg-soft-warning mt-1">Urgent</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="favorite-icon">
                                        <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                                    </div>
                                </div>
                                <div class="p-3 bg-light">
                                    <div class="row justify-content-between">
                                        <div class="col-md-8">
                                            <div>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item"><i class="uil uil-tag"></i> Keywords :</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Ui designer</a>,</li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)" class="primary-link text-muted">Manager</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="text-md-end">
                                                <a href="#applyNow" data-bs-toggle="modal" class="primary-link">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="row">
                        <div class="col-lg-12 mt-5">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination job-pagination mb-0 justify-content-center">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="javascript:void(0)" tabindex="-1">
                                            <i class="mdi mdi-chevron-double-left fs-15"></i>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0)">2</a></li>
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

            <div class="modal fade" id="applyNow" tabindex="-1" aria-labelledby="applyNow" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body p-5">
                            <div class="text-center mb-4">
                                <h5 class="modal-title" id="staticBackdropLabel">Apply For This Job</h5>
                            </div>
                            <div class="position-absolute end-0 top-0 p-3">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="mb-3">
                                <label for="nameControlInput" class="form-label">Name</label>
                                <input type="text" class="form-control" id="nameControlInput" placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="emailControlInput2" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="emailControlInput2" placeholder="Enter your email" />
                            </div>
                            <div class="mb-3">
                                <label for="messageControlTextarea" class="form-label">Message</label>
                                <textarea class="form-control" id="messageControlTextarea" rows="4" placeholder="Enter your message"></textarea>
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="inputGroupFile01">Resume Upload</label>
                                <input type="file" class="form-control" id="inputGroupFile01" />
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Send Application</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JobsList