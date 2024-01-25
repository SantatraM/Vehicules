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

function InsertModele() {
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
                                    <h4 className="card-title">Insertion Modele</h4>
                                        <form className="forms-sample">
                                            <div className="form-group">
                                                <label for="exampleInputUsername1">Modele</label>
                                                <input type="text" className="form-control" id="exampleInputUsername1" name="modele" placeholder="nomModele"/>
                                            </div>
                                            <div className="form-group ">
                                                <label for="exampleInputUsername1">Marque</label>
                                                
                                                    <select className="form-control">
                                                    <option>marque1</option>
                                                    <option>marque2</option>
                                                    </select>
                                            </div>
                                            <div className="form-group ">
                                                <label for="exampleInputUsername1">Categorie</label>
                                                
                                                    <select className="form-control">
                                                    <option>categorie1</option>
                                                    <option>categorie2</option>
                                                    </select>
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

export default InsertModele;
