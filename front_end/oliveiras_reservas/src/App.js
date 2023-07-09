import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Hotel from "./pages/hotel/Hotel.jsx";
import List from "./pages/list/List.jsx";
import Hotels from "./pages/hotels/Hotels.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Login from "./pages/login/Login.jsx";
import CreateUser from "./pages/createUser/CreateUser.jsx"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";
import Payment from "./pages/payment/Payment.jsx";
import ForgetPassword from "./pages/changePassword/ChangePassword.jsx"
import ResetPassword from "./pages/redefinir-senha/ResetPassword.jsx";

function App() {

  const { user } = useContext(AuthContext)

  const ProtectionRoutes = ({ children }) => {

    if (user.isAdmin !== true) {
      return <Navigate to="/login" />
    }

    return children;

  }

  const ProtectionRoutePayer = ({ children }) => {

    if (!user) {
      return <Navigate to="/login" />
    }

    return children;

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/list" element={<List />} />
        <Route path="/hotels/:id" element={<Hotels />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/ChangePassword" element={<ForgetPassword />} />
        <Route path="/redefinir-senha" element={<ResetPassword />} />
        <Route path="/admin" element={<ProtectionRoutes>
          <Admin />
        </ProtectionRoutes>} />
        <Route path="/login" element={<Login />} />
        <Route path={`/payment/${user._id}`} element={<ProtectionRoutePayer>
          <Payment />
        </ProtectionRoutePayer>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;