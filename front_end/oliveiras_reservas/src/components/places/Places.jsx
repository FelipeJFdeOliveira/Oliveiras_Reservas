import "./places.css"
import RJ from "../../images/RJ.jpg"
import SP from "../../images/SP.jpg"
import PA from "../../images/PA.jpg"
import SA from "../../images/SA.jpg"

const Places = () => {
    return (
        <>
            <div className="placesContainer">
                <div className="placesFamous">
                    <div className="placeTitle">
                        <h1>Nossos destinos mais populares</h1>
                    </div>
                    <div className="places">
                        <div className="place">
                            <img src={RJ} alt="Rio de Janeiro" className="placesImg"></img>
                            <h2 className="placeH2">Rio de Janeiro</h2>
                        </div>
                        <div className="place">
                            <img src={SP} alt="São Paulo" className="placesImg"></img>
                            <h2 className="placeH2">São Paulo</h2>
                        </div>
                        <div className="place">
                            <img src={PA} alt="Porto Alegre" className="placesImg"></img>
                            <h2 className="placeH3">Porto Alegre</h2>
                        </div>
                        <div className="place">
                            <img src={SA} alt="Salvador" className="placesImg"></img>
                            <h2 className="placeH3">Salvador</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Places



