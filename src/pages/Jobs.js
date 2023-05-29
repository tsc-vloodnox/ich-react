import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Masonry from "react-masonry-css";
import { breakpoints } from "../components/constant/allTools";

const Jobs = () => {

  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const categoryRef = collection(db, "Category");
    const q = query(categoryRef);
    onSnapshot(q, (snapshot) => {
      const categorys = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategorys(categorys);
    });
  }, []);

  return (
    <div className='page-wrapper'>
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2 >Job Categories</h2>
                <ul >
                  <li ><a routerlink="/" ng-reflect-router-link="/" href="/">Home</a></li>
                  <li ><i className="icofont-simple-right"></i>
                  </li>
                  <li >Job Categories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <h4>Parcourir les emplois par catégories</h4>
              </div>
            </div>
          </div>
          <div className="card job-Categories-box bg-light border-0">
            <div className="card-body p-4">
              <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid list-unstyled job-Categories-list mb-0"
                columnClassName="my-masonry-grid_column"
                type="ul"
              >
                {categorys.length > 0 &&
                  categorys.map((category) => (
                    <li key={category.id}>
                      <a href="/jobs/job-list" className="primary-link">
                        {category.description}
                      </a>
                      <span className="badge bg-soft-info float-end">{category.jobCount}</span>
                    </li>
                  ))}
              </Masonry>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Jobs;