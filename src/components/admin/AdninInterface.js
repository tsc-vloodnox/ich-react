import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function AdminInterface() {
  const [pendingCompanys, setPendingCompanys] = useState([]);

  useEffect(() => {
    const fetchPendingCompanys = async () => {
      const companysRef = collection(db, 'Companys');
      const querySnapshot = await getDocs(query(companysRef, where('status', '==', 'pending')));
      const companys = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPendingCompanys(companys);
    };

    fetchPendingCompanys();
  }, []);

  // Valider un profil d'entreprise et attribuer les autorisations
  const approveCompany = async (companyId) => {
    // Effectuer les opérations nécessaires pour attribuer les autorisations, par exemple :
    // - Récupérer les utilisateurs associés à l'entreprise
    // - Mettre à jour les autorisations des utilisateurs

    // Supprimer le profil d'entreprise après la validation
    await deleteDoc(doc(db, 'Companys', companyId));

    // Mettre à jour l'état local en supprimant le profil d'entreprise approuvé
    setPendingCompanys((prevCompanys) => prevCompanys.filter((company) => company.id !== companyId));
  };

  // Refuser un profil d'entreprise
  const rejectCompany = async (companyId, rejectionReason) => {
    // Envoyer un message de refus à l'utilisateur concerné, expliquant le motif du rejet

    // Supprimer le profil d'entreprise après le refus
    await deleteDoc(doc(db, 'Companys', companyId));

    // Mettre à jour l'état local en supprimant le profil d'entreprise rejeté
    setPendingCompanys((prevCompanys) => prevCompanys.filter((company) => company.id !== companyId));
  };

  return (
    <div className='page-wrapper'>
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2 >Interface Administrateur</h2>
                <ul >
                  <li ><a routerlink="/" ng-reflect-router-link="/" href="/">Home</a></li>
                  <li ><i className="icofont-simple-right"></i>
                  </li>
                  <li >Admin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <div className='d-flex justify-content-between'>
              <h6 className="m-0 font-weight-bold text-primary">Pofils d'entreprise en attente</h6>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length">
                      <label>
                        Show
                        <select name="dataTable_length" className="mx-1 custom-select custom-select-sm form-control form-control-sm">
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        entries
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="dataTable_filter" className="dataTables_filter">
                      <label>
                        Search:
                        <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTable" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-bordered dataTable w-100" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" >
                      <thead>
                        <tr role="row">
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact</th>
                          <th>Location</th>
                          <th>WebSite</th>
                          <th>Docs</th>
                          <th>Statut</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingCompanys.map((company) => (
                          <tr key={company.id}>
                            <td>{company.name}</td>
                            <td>{company.email}</td>
                            <td>{company.contact}</td>
                            <td>{company.location}</td>
                            <td>{company.webSite}</td>
                            <td>
                              <div className='d-flex'>
                                {company.docs} - ({company.docs.size})
                                <button className='btn'>
                                  <svg
                                    width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    data-testid="DownloadOutlinedIcon"
                                  >
                                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z"></path>
                                  </svg>
                                </button>
                              </div>

                            </td>
                            <td>
                              <span className={`btn border ${company.statut}`}>{company.statut}</span>
                            </td>
                            <td>
                              <div className='d-flex'>
                                <button
                                  className='btn border mx-1 valider'
                                  onClick={() => approveCompany(company.id)}
                                >
                                  Valider
                                </button>
                                <button
                                  className='btn border mx-1 refuser'
                                  onClick={() => rejectCompany(company.id, 'Motif du rejet')}
                                >
                                  Refuser
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminInterface;