import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // New import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import RegulatoryDisclosure from './components/RegulatoryDisclosure';
import ProductPage from './components/ProductPage';
import AccidentHealth from './pages/AccidentHealth';
import AviationPolicies from './pages/AviationPolicies';
import CargoInsurance from './pages/CargoInsurance';
import ConstructionEngineering from './pages/ConstructionEngineering';
import CrewPersonalAccident from './pages/CrewPersonalAccident';
import CyberInsurance from './pages/CyberInsurance';
import EnergyInsurance from './pages/EnergyInsurance';
import FinancialInstitutions from './pages/FinancialInstitutions';
import InternationalProperty from './pages/InternationalProperty';
import MarineKidnapRansom from './pages/MarineKidnapRansom';
import ProfessionalIndemnity from './pages/ProfessionalIndemnity';
import PublicProductsLiability from './pages/PublicProductsLiability';
import { services } from './components/Services';

const App = () => {
  return (
    <Router>
      <Navbar />
              <ScrollToTop /> {/* New: Add this for scroll to top on route changes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <RegulatoryDisclosure />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <About />
            <Footer />
          </>
        } />
        <Route path="/accident-health" element={<AccidentHealth />} />
        <Route path="/aviation-policies" element={<AviationPolicies />} />
        <Route path="/cargo-insurance" element={<CargoInsurance />} />
        <Route path="/ConstructionEngineering" element={<ConstructionEngineering />} />
        <Route path="/crew-personal-accident" element={<CrewPersonalAccident />} />
        <Route path="/cyberinsurance" element={<CyberInsurance />} />
        <Route path="/energy" element={<EnergyInsurance />} />
        <Route path="/financialinstitutions" element={<FinancialInstitutions />} />
        <Route path="/internationalproperty" element={<InternationalProperty />} />
        <Route path="/marinekidnapransom" element={<MarineKidnapRansom />} />
        <Route path="/professionalindemnity" element={<ProfessionalIndemnity />} />
        <Route path="/publicproductsliability" element={<PublicProductsLiability />} />
        {services
          .filter((service) => ![
            '/accident-health', 
            '/aviation-policies', 
            '/cargo-insurance', 
            '/construction-engineering', 
            '/crew-personal-accident',
            '/cyberinsurance',
            '/energy',
            '/financialinstitutions',
            '/internationalproperty',
            '/marinekidnapransom',
            '/professionalindemnity',
            '/publicproductsliability'
          ].includes(service.link))
          .map((service, index) => (
            <Route
              key={index}
              path={service.link}
              element={
                <>
                  <ProductPage
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    color={service.color}
                  />
                  <Footer />
                </>
              }
            />
          ))}
      </Routes>
    </Router>
  );
};

export default App;