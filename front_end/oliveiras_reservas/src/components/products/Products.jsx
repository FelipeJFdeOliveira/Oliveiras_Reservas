import "./products.css"
import "@fontsource/montez";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


const Products = ({ produto, text, img }) => {

    const navigate = useNavigate()

    return (
        <>
            <div className={(produto === "Hotéis") ? "products" : "products reverse"}>
                <div className={(produto === "Hotéis") ? "productContent" : "productContent reverse"}>
                    <h1>{produto}</h1>
                    <p>{text} <FontAwesomeIcon onClick={() => navigate("/hotels")} icon={faCircleArrowRight} className="arrowRight" /></p>
                </div>
                <img src={img} alt="Hotel/House" className="imageProduct" />
            </div>
        </>
    )
}

export default Products