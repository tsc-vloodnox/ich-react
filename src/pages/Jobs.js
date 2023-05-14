import React from 'react'

const Jobs = () => {
  return (
    <div className='page-wrapper'>
      <div class="page-title-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-title-text">
                <h2 >Job Categories</h2>
                <ul >
                  <li ><a routerlink="/" ng-reflect-router-link="/" href="/">Home</a></li>
                  <li ><i class="icofont-simple-right"></i>
                  </li>
                  <li >Job Categories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="text-center mb-5">
                <h4>Parcourir les emplois par catégories</h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="card job-Categories-box bg-light border-0">
                <div class="card-body p-4">
                  <ul class="list-unstyled job-Categories-list mb-0">
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Comptabilité et finance <span class="badge bg-soft-info float-end">25</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Emplois dans les banques <span class="badge bg-soft-info float-end">10</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Entrée de données <span class="badge bg-soft-info float-end">71</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Directeur des achats<span class="badge bg-soft-info float-end">40</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Chef de projet <span class="badge bg-soft-info float-end">86</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Éducation et formation <span class="badge bg-soft-info float-end">47</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Marketing et publicité <span class="badge bg-soft-info float-end">47</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Restauration et tourisme <span class="badge bg-soft-info float-end">47</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card job-Categories-box bg-light border-0">
                <div class="card-body p-4">
                  <ul class="list-unstyled job-Categories-list mb-0">
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Emplois gouvernementaux <span class="badge bg-soft-info float-end">120</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Emplois dans la défense <span class="badge bg-soft-info float-end">73</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Emplois dans l'enseignement <span class="badge bg-soft-info float-end">88</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Commerce de détail et services à la clientèle <span class="badge bg-soft-info float-end">10</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Offres d'emploi pour l'obtention d'un diplôme <span class="badge bg-soft-info float-end">55</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Offres d'emploi dans le domaine de la santé <span class="badge bg-soft-info float-end">99</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Fabrication et production <span class="badge bg-soft-info float-end">27</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Arts du spectacle et média <span class="badge bg-soft-info float-end">11</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card job-Categories-box bg-light border-0">
                <div class="card-body p-4">
                  <ul class="list-unstyled job-Categories-list mb-0">
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Emplois dans le domaine des technologies de l'information et des logiciels <span class="badge bg-soft-info float-end">175</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Logistique / Transport <span class="badge bg-soft-info float-end">60</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Emplois dans le domaine du sport <span class="badge bg-soft-info float-end">42</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Travailleur forestier <span class="badge bg-soft-info float-end">30</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Travailleur en soins animaliers <span class="badge bg-soft-info float-end">120</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Marketing numérique  <span class="badge bg-soft-info float-end">88</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Agent administratif <span class="badge bg-soft-info float-end">04</span></a>
                    </li>
                    <li>
                      <a href="/jobs/job-list" class="primary-link">Services de garage <span class="badge bg-soft-info float-end">75</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Jobs;