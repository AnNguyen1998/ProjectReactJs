import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/404" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
