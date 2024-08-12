import {BrowserRouter,HashRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import NotFound from "./pages/notFound/NotFound";
import Productdetail from "./pages/productDetail/Productdetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import SearchPage from "./pages/searchPage/SearchPage";
import CartPage from "./pages/cartPage/CartPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ProductByCategory from "./pages/productByCategory/ProductByCategory";
import Contact from "./pages/contact/Contact";
import FilterByPrice from './pages/filterByPrice/FilterByPrice'

function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/ProjectReactJs" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/detail/:id" element={<Productdetail/>}/>
          <Route path="/404" element={<NotFound/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/category/:id" element={<ProductByCategory/>}/>
          <Route path="/contactus" element={<Contact/>}/>
          <Route path="/filterbyprice" element={<FilterByPrice/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
