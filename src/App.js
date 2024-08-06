import {BrowserRouter,HashRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";
import Productdetail from "./pages/productDetail/Productdetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import SearchPage from "./pages/searchPage/SearchPage";
import CartPage from "./pages/cartPage/CartPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/ProjectReactJs" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/detail/:id" element={<Productdetail/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/404" element={<NotFound/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
