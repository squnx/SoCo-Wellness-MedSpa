import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import About2 from './pages/About2';
import Tlsr from './pages/Tlsr';
import Facial from './pages/Facial';
import Wellness from './pages/Wellness';
import Kmedical from './pages/Kmedical';
import Treatments from './pages/Treatments';
import Promos from './pages/Promos';
import PromosGalleryModal from './pages/PromosGalleryModal';
import Contact from './pages/Contact';
// import Gallery from './pages/Gallery';
// import America from './pages/America';
// import California from './pages/California';
// import Korea from './pages/Korea';
// import Mexico from './pages/Mexico';
// import Misc from './pages/Misc';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* To ensure that the page scrolls to the top when navigating between routes */}
      <div id="top" className="App app-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about2" element={<About2 />} />
            <Route path="/tlsr" element={<Tlsr />} />
            <Route path="/facial" element={<Facial />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/k-medical" element={<Kmedical />} />
            <Route path="/other-treatments" element={<Treatments />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/promos-gallery-modal" element={<PromosGalleryModal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
