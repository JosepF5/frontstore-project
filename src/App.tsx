import "./App.css";
import ProductListContainer from "./components/ProductListContainer/ProductListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyListContainer from './components/BuyListContainer/BuyListContainer';
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/product" element={<ProductListContainer />} />
        </Routes>
        <Routes>
          <Route path="/buy" element={<BuyListContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
