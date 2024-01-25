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
import REact, {useEffect , useState} from 'react';
import axios from 'axios';

function InsertMarque() {

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
                                    <h4 className="card-title">Insertion Marque</h4>
                                        <form className="forms-sample">
                                            <div className="form-group">
                                                <label >Marque</label>
                                                <input type="text" className="form-control" id="exampleInputUsername1" placeholder="nomMarque"/>
                                            </div>
                                            <div className="form-group ">
                                                <label >Pays</label>
                                                
                                                    <select className="form-control">
                                                    <option>Madagascar</option>
                                                    <option>France</option>
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

export default InsertMarque;
