import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/vendors/mdi/css/materialdesignicons.min.css';

const Sidebar = () => {
    return (
      
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
              <li className="nav-item">
                <div className="nav-search">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type to search..." aria-label="search" aria-describedby="search"/>
                    <div className="input-group-append">
                      <span className="input-group-text" id="search">
                        <i className="typcn typcn-zoom"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <p className="sidebar-menu-title">Dash menu</p>
              </li>

              <li className="nav-item">
                {/* Utilisez le composant Link pour créer le lien */}
                <Link to="/element" className="nav-link">
                  <i className="typcn typcn-briefcase menu-icon"></i>
                  <span className="menu-title"> Element</span>
                </Link>
              </li>

              <li className="nav-item">
                {/* Utilisez le composant Link pour créer le lien */}
                <Link to="" className="nav-link">
                  <i className="typcn typcn-briefcase menu-icon"></i>
                  <span className="menu-title"> Statistiques</span>
                </Link>
              </li>
              
              <li className="nav-item">
                {/* Utilisez le composant Link pour créer le lien */}
                <Link to="/listeAnnonce" className="nav-link">
                  <i className="typcn typcn-briefcase menu-icon"></i>
                  <span className="menu-title"> Annonces</span>
                </Link>
              </li>

              <li className="nav-item">
                {/* Utilisez le composant Link pour créer le lien */}
                <Link to="/login" className="nav-link">
                  <i className="typcn typcn-briefcase menu-icon"></i>
                  <span className="menu-title">Logout</span>
                </Link>
              </li>


            </ul>
          </nav>
            
    );
}
export default Sidebar;