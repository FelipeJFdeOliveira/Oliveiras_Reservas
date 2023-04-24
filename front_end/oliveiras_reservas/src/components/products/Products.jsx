import "./products.css"
import "@fontsource/montez";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Products = ({ produto, text, img }) => {
    return (
        <>
            <div className={(produto === "Hotéis") ? "products" : "products reverse"}>
                <div className={(produto === "Hotéis") ? "productContent" : "productContent reverse"}>
                    <h1>{produto}</h1>
                    <p>{text} <FontAwesomeIcon icon={faCircleArrowRight} className="arrowRight" /></p>
                </div>
                <img src={img} alt="Hotel" className="imageProduct" />
            </div>
        </>
    )
}

export default Products