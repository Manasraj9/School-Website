
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import OurMoto from "./pages/OurMoto";
import SchoolPrayer from "./pages/SchoolPrayer";
import OurFaculties from "./pages/OurFaculties";
import Management from "./pages/Management";
// import DirectorMessage from "./pages/DirectorMessage";
import PrincipalMessage from "./pages/PrincipalMessage";
import Academics from "./pages/Academics";
import AdmissionGuidelines from "./pages/AdmissionGuidelines";
import SchoolTimings from "./pages/SchoolTimings";
import SchoolUniform from "./pages/SchoolUniform";
import PaymentOfFees from "./pages/PaymentOfFees";
import Gallery from "./pages/Gallery";
import Achievement from "./pages/Achievement";
import Contact from "./pages/Contact";
import Fees from "./pages/Fees";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* About Us Dropdown */}
        <Route path="/our-moto" element={<OurMoto />} />
        <Route path="/school-prayer" element={<SchoolPrayer />} />
        <Route path="/our-faculties" element={<OurFaculties />} />
        <Route path="/management" element={<Management />} />
        {/* Message Dropdown */}
        {/* <Route path="/director-message" element={<DirectorMessage />} /> */}
        <Route path="/principal-message" element={<PrincipalMessage />} />
        {/* Academic Profile */}
        <Route path="/academics" element={<Academics />} />
        {/* Rules & Regulations Dropdown */}
        <Route path="/admission-guidelines" element={<AdmissionGuidelines />} />
        <Route path="/school-timings" element={<SchoolTimings />} />
        <Route path="/school-uniform" element={<SchoolUniform />} />
        <Route path="/payment-of-fees" element={<PaymentOfFees />} />
        {/* Gallery, Achievement, Contact, Fees */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fees" element={<Fees />} />
      </Routes>
    </Router>
  );
}

