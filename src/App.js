import Cart from "./components/Cart";
import React from "react";
import "./styles/app.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Women
// MEN
import MenTshirts from "./pages/Men/Tshirts";
import MenHoodies from "./pages/Men/Shorts";
import MenShorts from "./pages/Men/Rashguard";
import MenSweatpants from "./pages/Men/Leggings";
import MenTankTops from "./pages/Men/Underwear";


// WOMEN
import WomenLeggings from "./pages/Women/Pants";
import WomenTops from "./pages/Women/Outerwear";
import WomenTankTops from "./pages/Women/tanktops";
import WomenTrainingShorts from "./pages/Women/Shortss";
import WomenUnderwear from "./pages/Women/hudi";


// COMBAT GEAR
import CombatBoxingGloves from "./pages/CombatGear/BoxingGloves";
import CombatMMAGloves from "./pages/CombatGear/MMAGloves";
import CombatHandWraps from "./pages/CombatGear/HandWraps";
import CombatHeadguards from "./pages/CombatGear/Headguards";
import CombatPunchingBags from "./pages/CombatGear/pads";
import CombatJumpRopes from "./pages/CombatGear/shinguards";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* MEN */}
          <Route path="/men/tshirts" element={<MenTshirts />} />
          <Route path="/men/hoodies" element={<MenHoodies />} />
          <Route path="/men/shorts" element={<MenShorts />} />
          <Route path="/men/sweatpants" element={<MenSweatpants />} />
          <Route path="/men/tanktops" element={<MenTankTops />} />

          {/* WOMEN */}
          <Route path="/women/leggings" element={<WomenLeggings />} />
          <Route path="/women/tops" element={<WomenTops />} />
          <Route path="/women/tanktops" element={<WomenTankTops />} />
          <Route path="/women/trainingshorts" element={<WomenTrainingShorts />} />
          <Route path="/women/underwear" element={<WomenUnderwear />} />

          {/* COMBAT GEAR */}
          <Route path="/combat/boxinggloves" element={<CombatBoxingGloves />} />
          <Route path="/combat/mmagloves" element={<CombatMMAGloves />} />
          <Route path="/combat/handwraps" element={<CombatHandWraps />} />
          <Route path="/combat/headguards" element={<CombatHeadguards />} />
          <Route path="/combat/punchingbags" element={<CombatPunchingBags />} />
          <Route path="/combat/jumpropes" element={<CombatJumpRopes />} />

          {/* Корзина */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;