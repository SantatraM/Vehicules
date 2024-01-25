import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './css/pagination.css';

function ListeMarque() {
  const [marques, setMarques] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5; // Nombre d'éléments par page

  useEffect(() => {
    axios.get('http://localhost:8081/marques')
      .then(response => {
        setMarques(response.data); // Assurez-vous d'accéder aux données correctes dans votre réponse
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  const pageCount = Math.ceil(marques.length / itemsPerPage);
  const offset = pageNumber * itemsPerPage;

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayedItems = marques.slice(offset, offset + itemsPerPage);

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper">
        <Header />
        <Sidebar />
        <div className="col-lg-6 grid-margin stretch-card mx-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Liste des marques</h4>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Marque</th>
                      <th>Pays</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedItems.map(marque => (
                      <tr key={marque.id_marque}>
                        <td>{marque.id_marque}</td>
                        <td>{marque.nom_marque}</td>
                        <td>
                          <Link to={`/edit-marque/${marque.id_marque}`}>
                            <button type="button" className="btn btn-success btn-rounded btn-icon">
                              <i className="typcn typcn-edit"></i>
                            </button>
                          </Link>
                          <Link to={`/delete-marque/${marque.id_marque}`}>
                            <button type="button" className="btn btn-danger btn-rounded btn-icon">
                              <i className="typcn typcn-trash"></i>
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
              <Link to="/insert-marque" className="btn btn-primary btn-lg btn-block">
                <i className="typcn typcn-user"></i>
                Insertion marque
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListeMarque;
