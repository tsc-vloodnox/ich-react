import React from "react";

const NoFound = () => {

  return (
    <div className="page-wrapper">
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2 >Page introuvable</h2>
                <ul >
                  <li ><a routerlink="/" ng-reflect-router-link="/" href="/">Home</a></li>
                  <li ><i className="icofont-simple-right"></i>
                  </li>
                  <li >NoFound</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="text-center">Erreur 404</h1>
      </div>
    </div>
  );
};

export default NoFound;
