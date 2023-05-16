import "./navbar.css";
import logo from "../../images/Logo.jpg"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = ({ page }) => {

    const navigate = useNavigate()

    const { user, dispatch } = useContext(AuthContext)

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        try {
            dispatch({ type: "LOGOUT" });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    return (
        <>
            <div className="navItems">
                <div className="navLogo">
                    <img src={logo} alt="Logo Oliveiras Reservas" className="navImg" />
                </div>
                <div className="navMenu">
                    <h1 onClick={() => navigate('/')} className={(page === "Home") ? "navHome black" : "navHome"}>Home</h1>
                    <h1 onClick={() => navigate('/hotels')} className={(page === "Hotels") ? "navHotel black" : "navHotel"}>Hotéis</h1>
                </div>
                {user.isAdmin === true ? (<div className="navAdmin">
                        <h1 className={(page === "Admin") ? "navAdministrator black" : "navAdministrator"} onClick={() => navigate('/admin')}>Administrador</h1>
                    </div>) : ""
                    }
                {user ? (<div className="navLogin1">
                    <h1 className={(page === "Login") ? "navLog black" : "navLog"} onClick={() => navigate('/login')}>{user.username}</h1>
                    <h1 className={(page === "Login") ? "navLog black" : "navLog"} onClick={handleClick}>Sair</h1>
                </div>) : (<div className="navLogin">
                    <h1 className={(page === "Login") ? "navLog black" : "navLog"} onClick={() => navigate('/login')}>Login</h1>
                </div>)}
            </div>
        </>
    )
}

export default Navbar