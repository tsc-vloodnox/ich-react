import { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Masonry from "react-masonry-css";
import { breakpoints } from '../constant/allTools';

const PrevCompany = () => {
  const [companys, setCompanys] = useState([]);

  useEffect(() => {
    const companysRef = collection(db, 'Companys');
    const q = query(companysRef);
    onSnapshot(q, (snapshot) => {
      const companys = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCompanys(companys)
    });
  }, []);
  return (
    <section className="our_sponsors_section pb-5">
      <div className="container shadow ws">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <a href='/companys'>Nos Partenaires</a>
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
              {companys.length > 0 &&
                companys.map((company) => ((
                  <div className="our_sponsors_img p-1">
                    <div>
                      <a href="#">
                        <img src={company.logo} alt='company-pic' />
                      </a>
                    </div>
                  </div>
                )))}

            </Masonry>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrevCompany