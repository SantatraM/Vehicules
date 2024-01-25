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
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import './css/pagination.css';

function ListeModele() {
  const [data, setData] = useState([
    { name: 'Jacob', country: 'Photoshop' },
    { name: 'Messy', country: 'Flash' },
    { name: 'John', country: 'Premier' },
    { name: 'Peter', country: 'After effects' },
    { name: 'Dave', country: '53275535' },
    { name: 'Dave', country: '53275535' },
  ]);

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5; // Number of items per page

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
        <div className="col-lg-6 grid-margin stretch-card mx-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Liste des modeles</h4>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Modele</th>
                      <th>Marque</th>
                      <th>Categorie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedItems.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.country}</td>
                        <td>{item.country}</td>
                        <td>
                            <Link to="" >
                            <button type="button" class="btn btn-success btn-rounded btn-icon">
                              <i class="typcn typcn-edit"></i>
                            </button>
                            </Link>
                        </td>
                            <td>
                            <Link to="" >
                            <button type="button" class="btn btn-danger btn-rounded btn-icon">
                              <i class="typcn typcn-trash"></i>
                            </button>
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
              <Link to="/insert-modele" className="btn btn-primary btn-lg btn-block">
                <i className="typcn typcn-user"></i>
                Insertion Modele
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListeModele;
