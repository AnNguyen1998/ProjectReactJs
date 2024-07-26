import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";
import Productdetail from "./pages/productDetail/Productdetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/detail/:id" element={<Productdetail/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/404" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
