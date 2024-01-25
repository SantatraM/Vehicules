import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Ensemble() {
  return (
    <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
            <Header />
            <Sidebar />
        </div>
    </div>
    
  );
}

export default Ensemble;
