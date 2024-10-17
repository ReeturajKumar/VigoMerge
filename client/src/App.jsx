import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import HomePage from "./components/Pages/HomePAge";
import ContactPage from './components/Pages/ContactPage';
import SolutionPage from './components/Pages/SolutionPage';
import ServicePage from './components/Pages/ServicePage';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Blog from './components/Blog/Blog';
import Data from './components/Service/Option/Data';
import Web from './components/Service/Option/Web';
import Strategetic from './components/Service/Marketing/Strategetic';
import Analysis from './components/Service/Marketing/Analysis';
import Operation from './components/Service/Marketing/Operation';
import Organization from './components/Service/Marketing/Organization';
import Finincial from './components/Service/Marketing/Finincial';
import Management from './components/Service/Marketing/Management.JSX';
import Product from './components/Product/Product';
import Mobile from './components/Service/Option/Mobile';
import Cloud from './components/Service/Option/Cloud';
import DevOps from './components/Service/Option/DevOps';
import Software from './components/Service/Option/Software';
import Quality from './components/Service/Option/Quality';
import System from './components/Service/Option/System';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner'; // Import the LoadingSpinner

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show the loading spinner when the route changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust this timeout duration as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <LoadingSpinner />} {/* Show the loading spinner */}
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/solutions" element={<SolutionPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service/software-development" element={<Data />} />
        <Route path="/service/web-application" element={<Web />} />
        <Route path="/service/mobile-application" element={<Mobile />} />
        <Route path="/service/cloud-consulting" element={<Cloud />} />
        <Route path="/service/devOps-automation" element={<DevOps />} />
        <Route path="/service/software-prototyping" element={<Software />} />
        <Route path="/service/quality-assurance" element={<Quality />} />
        <Route path="/service/systems-integration" element={<System />} />
        <Route path="/service/strategic-planning-services" element={<Strategetic />} />
        <Route path="/service/market-research-analysis" element={<Analysis />} />
        <Route path="/service/operations-improvement" element={<Operation />} />
        <Route path="/service/organizational-development" element={<Organization />} />
        <Route path="/service/financial-consulting" element={<Finincial />} />
        <Route path="/service/change-management" element={<Management />} />
      </Routes>
      <Footer />
    </>
  );
}

// Wrap App with BrowserRouter in main entry file
const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
