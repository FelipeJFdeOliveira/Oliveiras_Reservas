import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TextField from '@mui/material/TextField';
import { Box, Button, Container, Stack } from "@mui/material";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const [user, setUser] = useState(null);

  const { loading, error, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);

      if (res.data.isAdmin === true) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/admin")
      }

      if (res.data.isAdmin === false) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/login")
      }

    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const google = async () => {
      
    try {
      window.open("http://localhost:8800/api/auth/google", "_self");
      const res = await axios.get("/auth/login/success", {
        withCredentials: true,
      });

      if (res.status === 200) {       
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user.displayName })
        setUser(res.data.user.displayName);
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user)

  return (
    <>
      <div className="adminNavbar">
        <Navbar page={"Login"} />
      </div>
      <Container style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "160px", height: "auto" }} maxWidth="lg">
        <Box sx={{ width: '40%' }}>
          <Stack spacing={4}>
            <TextField onChange={handleChange} type="email" id="email" label="email" variant="standard" />
            <TextField onChange={handleChange} type="password" id="password" label="senha" variant="standard" />
            <Button onClick={handleClick} variant="contained">Login</Button>
            <Link to={"/createUser"} className="lRegister">Criar conta</Link>
            <Link to={"/changePassword"} className="lRegister">Esqueceu a senha?</Link>
            <Button onClick={google} disabled={loading} variant="contained">acessar com o Google</Button>
            {error && <span>{error.message}</span>}
          </Stack>
        </Box>
      </Container>
      <div className="adminFooter">
        <Footer />
      </div>
    </>
  );
};

export default Login;