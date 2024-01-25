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

function InsertSousModele() {
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
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card mx-auto">
                <div className="card ">
                  <div className="card-body">
                    <h4 className="card-title">Insertion Sous Modele</h4>
                    <form className="forms-sample">
                    {step === 1 && (
                      <>
                        <div className="form-group">
                          <input type="text" className="form-control" id="exampleInputUsername1" name="idmodele" hidden />
                        </div>
                        <div className="form-group ">
                            <label>Modele</label>
                            
                                <select className="form-control">
                                    <option>modele1</option>
                                    <option>modele2</option>
                                </select>
                        </div>
                        <div className="form-group">
                            <label >sous modele</label>
                            <input type="text" className="form-control" id="exampleInputUsername1" name="sousModele" />
                        </div>
                        <div className="form-group">
                            <label>Vitesse Max</label>
                            <input type="number" className="form-control" id="exampleInputUsername1" name="vitesseMAx"/>
                        </div>
                        <div className="form-group">
                            <label>Consommation</label>
                            <input type="number" className="form-control" id="exampleInputUsername1" name="consommation"/>
                        </div>
                        
                        <button type="button" className="btn btn-primary mr-2" onClick={handleNext}>
                          Next
                        </button>
                        </>
                    )}
                    {step === 2 && (
                        <>
                        <div className="form-group ">
                            <label>Type Carburant</label>
                            
                                <select className="form-control">
                                <option>carburant1</option>
                                <option>carburant2</option>
                                </select>
                        </div>
                        <div className="form-group ">
                            <label>Manuelle/Auto</label>
                            <select className="form-control">
                                <option>Manuelle</option>
                                <option>Automatique</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Puissance</label>
                            <input type="number" className="form-control" id="exampleInputUsername1" name="puissance"/>
                        </div>
                        <div className="form-group">
                            <label>Batterie</label>
                            <input type="number" className="form-control" id="exampleInputUsername1" name="batterie"/>
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="file" name="img" className="" multiple/>
                        </div>
                        <button type="button" className="btn btn-secondary mr-2" onClick={handlePrev}>
                          Previous
                        </button>
                        <button type="submit" className="btn btn-primary mr-2">
                          Submit
                        </button>
                        </>
                    )}
                    </form>
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

export default InsertSousModele;
