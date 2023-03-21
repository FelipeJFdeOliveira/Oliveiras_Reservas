import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Hotel from "./pages/hotel/Hotel.jsx";
import House from "./pages/house/House";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<Hotel/>}/>
        <Route path="/houses" element={<House/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;