import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Academic from "./pages/AcademicProfile";
import AboutUs from "./pages/AboutUs";
import RulesAndRegulations from "./pages/RulesAndRegulations";
import Gallery from "./pages/Gallery";
import Achievement from "./pages/Achievement";
import ContactUs from "./pages/ContactUs";
import FeePayment from "./pages/FeePayment";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/rules" element={<RulesAndRegulations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/fee-payment" element={<FeePayment />} />
      </Routes>
    </Router>
  );
}

