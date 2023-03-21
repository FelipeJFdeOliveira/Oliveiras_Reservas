import "./navbar.css";
import logo from "../../images/Logo.jpg"
import { useNavigate } from "react-router-dom";


const Navbar = ({ page }) => {

    const navigate = useNavigate()

    return (
        <>
            <div className="navContainer">
                <div className="navItem">
                    <div className="navItems">
                        <div className="navLogo">
                            <img src={logo} alt="Logo Oliveiras Reservas" className="navImg" />
                        </div>
                        <div className="navMenu">
                            <h1 onClick={()=>navigate('/')} className={(page === "Home") ? "navHome black" : "navHome"}>Home</h1>
                            <h1 onClick={()=>navigate('/hotels')} className={(page === "Hotels") ? "navHotel black" : "navHotel"}>Hotéis</h1>
                            <h1 onClick={()=>navigate('/houses')} className={(page === "Houses") ? "navHouse black" : "navHouse"}>Casas</h1>
                        </div>
                        <div className="navAdmin">
                            <h1 className={(page === "Admin") ? "navAdministrator black" : "navAdministrator"}>Administrador</h1>
                        </div>
                        <div className="navLogin">
                            <h1 className={(page === "Login") ? "navLog black" : "navLog"}>Login</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar