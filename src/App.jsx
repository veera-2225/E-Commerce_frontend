import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import MobilesPage from "./pages2/MobilesPage";
import AcPage from "./pages2/AcPage";
import ComputerPage from "./pages2/ComputerPage";
import FurniturePage from "./pages2/FurniturePage";
import KitchenPage from "./pages2/KitchenPage";
import MenswearPage from "./pages2/MenswearPage";
import RefrigeratorPage from "./pages2/RefrigeratorPage";
import SpeakerPage from "./pages2/SpeakerPage";
import TvPage from "./pages2/TvPage";
import WatchPage from "./pages2/WatchPage";
import WomanWearPage from "./pages2/WomanWearPage";
import ProductPage from "./singles/ProductPage";

import axios from "axios";
import { api_url } from "./data/api_url";


function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getProducts() {
      axios
        .get(`${api_url}/getProducts`)
        .then((res) => {
          console.log(res.data.response);
          setProducts(res.data.response);
          setLoading(false);
        })
        .catch((error) => {
          alert("Something went wrong");
          setLoading(true);
        });
    }
    getProducts();
  }, []);


  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobile" element={<MobilesPage  products={products} loading={loading} />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/menswear" element={<MenswearPage />} />
        <Route path="/fridge" element={<RefrigeratorPage />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/woman" element={<WomanWearPage />} />

        <Route path="/mobilePage/:id" element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
