import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./place.css"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import hotel from "../../images/cama.jpg";
import "@fontsource/montez";
import { useState } from "react";

const Place = () => {

    const [slideNumber, setSlideNumber] = useState(0)

    return (
        <>
            <div className="place_Container">
                <h1 className="place_Name">Plaza Hotel</h1>
                <div className="place_address">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span> Av. Rio Branco, 197 - São Paulo - SP</span>
                </div>
                <span className="place_Nota">Nota: 8,9</span>
                <span className="place_Stars">5 Estrela(s)</span>
                <span className="place_Price">Diária: R$ 250</span>
                <div className="place_Images">
                    <img src={hotel} alt="produto" className="place_product" />
                    <img src={hotel} alt="produto" className="place_product" />
                    <img src={hotel} alt="produto" className="place_product" />
                    <img src={hotel} alt="produto" className="place_product" />
                </div>
                <div className="place_Description">
                    <p className="place_desc">
                        O quarto de hotel possui uma cama king size com travesseiros macios e roupa de cama de alta qualidade.
                        Além disso, dispõe de uma TV de tela plana, ar-condicionado, frigobar,
                        mesa de trabalho e um banheiro privativo com chuveiro de água quente.
                    </p>
                    <button className="place_booking">Reserve!</button>
                </div>
                <h1 className="place_FraseEfeito">Aproveite nossas ofertas!!!!!!!!</h1>
            </div>
        </>
    )
}

export default Place