import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Hotel from "./pages/hotel/Hotel.jsx";
import House from "./pages/house/House.jsx";
import List from "./pages/list/List.jsx";
import Product from "./pages/product/Product.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Login from "./pages/login/Login.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<Hotel/>}/>
        <Route path="/houses" element={<House/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;