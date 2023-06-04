import "./App.css";
import Layout from "./compopnents/Layout/Layout";
import Footer from "./compopnents/Footer/Footer";
import Navbar from "./compopnents/Nav-bar/Navbar";
import Main from "./Pages/Main/Main";
import Catalog from "./Pages/catalog/Catalog";
import OneProduct from "./Pages/One-product/One-product";
import Pannier from "./Pages/Pannier/Pannier";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="all">
        <header>
          <Layout />
        </header>
          <Navbar />
        <div className="App-main" style={{ maxWidth: "100vw" }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:productId" element={<OneProduct />} />
            <Route path="/categories/:title" element={<Catalog />} />
            <Route path="/panier" element={<Pannier />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
