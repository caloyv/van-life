import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
// Vans
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";

// Host
import Host from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanDetailNav from "./pages/Host/HostVanDetailNav";
import HostVanPricingNav from "./pages/Host/HostVanPricingNav";
import HostVanPhotosNav from "./pages/Host/HostVanPhotosNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Review />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} >
              <Route index element={<HostVanDetailNav />} />
              <Route path="pricing" element={<HostVanPricingNav />} />
              <Route path="photos" element={<HostVanPhotosNav />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
