import "./App.css";
import ProductListContainer from "./components/ProductListContainer/ProductListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductListContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
