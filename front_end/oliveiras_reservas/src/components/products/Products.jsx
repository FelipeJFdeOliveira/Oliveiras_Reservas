import "./products.css"
import "@fontsource/montez";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Products = ({ produto, text, img }) => {
    return (
        <>
            {produto === "Hotéis" &&
                <div className="productsContainerHotel">
                    <div className="productsHotel">
                        <div className="productContentHotel">
                            <h1>{produto}</h1>
                            <p>{text} <FontAwesomeIcon icon={faCircleArrowRight} className="arrowRight" /></p>
                        </div>
                        <img src={img} alt="Hotel" className="productHotel" />
                    </div>
                </div>}
            {produto === "Casas" &&
                <div className="productsContainerHouse">
                    <div className="productsHouse">
                        <img src={img} alt="Casa" className="productHouse" />
                        <div className="productContentHouse">
                            <h1>{produto}</h1>
                            <p>{text} <FontAwesomeIcon icon={faCircleArrowRight} className="arrowRight" /></p>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Products