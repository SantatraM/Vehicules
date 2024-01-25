import React, { useState } from 'react';
import '../assets/vendors/typicons.font/font/typicons.css';
import '../assets/vendors/css/vendor.bundle.base.css';
import '../assets/css/vertical-layout-light/style.css';
import '../assets/vendors/progressbar.js/progressbar.min';
import '../assets/js/hoverable-collapse.js';
import '../assets/js/off-canvas.js';
import '../assets/js/settings.js';
import '../assets/js/todolist.js';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

function Element() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };
  return (
    <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
            <Header />
            <Sidebar />
            <div className="main-panel">
        <div className="content-wrapper" >
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card  mx-auto">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Listes Elements necessaires</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Elements</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {step === 1 && (
                          <>
                             <tr>
                          <td>Categorie</td>
                          <td>
                          <Link to="/listeCategorie" className="badge badge-danger">
                            <i className="typcn typcn-briefcase menu-icon"></i>
                            <span className="menu-title"> Voir listes</span>
                          </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Marque</td>
                          <td>
                            <Link to="/listeMarque" className="badge badge-danger">
                              <i className="typcn typcn-briefcase menu-icon"></i>
                              <span className="menu-title"> Voir listes</span>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Type carburant</td>
                          <td>
                          <Link to="/listeType" className="badge badge-danger">
                            <i className="typcn typcn-briefcase menu-icon"></i>
                            <span className="menu-title"> Voir listes</span>
                          </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Fonctionnalite Technologique</td>
                          <td>
                          <Link to="/listeFonctionnalite" className="badge badge-danger">
                            <i className="typcn typcn-briefcase menu-icon"></i>
                            <span className="menu-title"> Voir listes</span>
                          </Link></td>
                        </tr>
                        <tr>
                          <td>Choix Fonctionnalite Technologique</td>
                          <td>
                          <Link to="/insert-ChoixFonctionnalite" className="badge badge-danger">
                            <i className="typcn typcn-briefcase menu-icon"></i>
                            <span className="menu-title"> Voir listes</span>
                          </Link></td>
                        </tr>
                        <button type="button" className="btn btn-primary mr-2" onClick={handleNext}>
                          Next
                        </button>
                          </>
                          
                        )}
                       {step === 2 &&(
                        <>
                          <tr>
                          <td>Modele</td>
                          <td>
                          <Link to="/listeModele" className="badge badge-danger">
                            <i className="typcn typcn-briefcase menu-icon"></i>
                            <span className="menu-title"> Voir listes</span>
                          </Link></td>
                        </tr>
                        <tr>
                          <td>Sous modele</td>
                          <td>
                          <Link to="/listeSousModele" className="badge badge-danger">
                            <i className="typcn typcn-briefcase menu-icon"></i>
                            <span className="menu-title"> Voir listes</span>
                          </Link></td>
                        </tr>
                        <tr>
                          <td>Interet</td>
                          <td>
                          <Link to="/insert-Interet" className="badge badge-danger">
                            <i className="typcn typcn-briefcase menu-icon"></i>
                            <span className="menu-title"> Voir listes</span>
                          </Link></td>
                        </tr>
                        <button type="button" className="btn btn-secondary mr-2" onClick={handlePrev}>
                          Previous
                        </button>
                        </>
                       )}
                        
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
    </div>
  );
}

export default Element;
