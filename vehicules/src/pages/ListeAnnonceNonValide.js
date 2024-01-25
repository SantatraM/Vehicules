
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../assets/vendors/typicons.font/font/typicons.css';
import '../assets/vendors/css/vendor.bundle.base.css';
import '../assets/css/vertical-layout-light/style.css';
import '../assets/vendors/progressbar.js/progressbar.min';
import '../assets/js/hoverable-collapse.js';
import '../assets/js/off-canvas.js';
import '../assets/js/settings.js';
import '../assets/js/todolist.js';
import '../assets/vendors/mdi/css/materialdesignicons.min.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import './css/pagination.css';

function ListeAnnonceNonValide() {
  const [data, setData] = useState([
    { name: 'Jacob', country: 'Photoshop' },
    { name: 'Messy', country: 'Flash' },
    { name: 'John', country: 'Premier' },
    { name: 'Peter', country: 'After effects' },
    { name: 'Dave', country: '53275535' },
    { name: 'Dave', country: '53275535' },
  ]);

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4; // Number of items per page

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const offset = pageNumber * itemsPerPage;

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayedItems = data.slice(offset, offset + itemsPerPage);

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper">
        <Header />
        <Sidebar />
        <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Listes des annonces non valide</h4>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Utilisateur</th>
                        <th>prix</th>
                        <th>date annonce</th>
                        <th>Marque</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        {displayedItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.country}</td>
                            <td>{item.country}</td>
                            <td>{item.country}</td>
                            <td>
                            <Link to="" >
                              <button className="btn btn-success btn-rounded btn-icon">
                                <i className="mdi mdi-check"></i>
                              </button>
                            </Link>
                            </td>
                            <td>
                            <Link to="" >
                              <button className="btn btn-danger btn-rounded btn-icon">
                                <i className="typcn typcn-times"></i>
                              </button>
                            </Link>
                            </td>
                            <td>
                            <Link to="" className="btn btn-info">
                                Details
                            </Link>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
  );
}

export default ListeAnnonceNonValide;


