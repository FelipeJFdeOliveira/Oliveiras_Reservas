import { Link } from "react-router-dom";
import "./result.css";

const Result = ({ item }) => {

    return (
        <>
            <Link className="resultLink" to={`/hotels/${item._id}`}>
                <div className="resultProducts">
                    <div className="resultText">
                        <h3 className="resultTitleProduct">{item.name}</h3>
                        <p className="resultDescription">{item.description}</p>
                    </div>
                    <div className="resultQualifications">
                        <span className="resultStars"> {item.stars} Estrelas</span>
                        <span className="resultRating">Nota: {item.rating}</span>
                        <span className="resultPrice">Menor Preço: R$ {item.price}</span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Result