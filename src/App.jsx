import { Routes, Route } from "react-router-dom";
import Navbar from "./parts/Navbar";
import Home from "./pages/Home";
import Product from "./pages/product";
import References from "./pages/References";
import Team from "./pages/Team";
import Footer from "./parts/Footer";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1" className="outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/references" element={<References />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
