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

function InsertChoixFonctionnalite() {
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
                                    <h4 className="card-title">Choisissez une fonctionnalite technologique</h4>
                                    <form>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="form-group"  >
                                              <div className="form-check">
                                                <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">fonctionnalite1</label>
                                              </div>
                                              <div className="form-check">
                                                <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">fonctionnalite1</label>
                                              </div>
                                              <div className="form-check">
                                                <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label">fonctionnalite1</label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
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

export default InsertChoixFonctionnalite;
