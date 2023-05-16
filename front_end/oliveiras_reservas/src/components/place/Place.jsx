import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./place.css"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import hotel from "../../images/cama.jpg";
import "@fontsource/montez";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../reserveModal/Reserve.jsx";

const Place = () => {

    const navigate = useNavigate()

    const [ openModal, setOpenModal ] = useState(false)

    const location = useLocation()

    const id = location.pathname.split("/")[2]

    const { data, loading } = useFetch(`/hotels/find/${id}`)

    const { dates, options } = useContext(SearchContext)

    const { user } = useContext(AuthContext)

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate)

    const handleClick = () =>{
        if(user){
            setOpenModal(true)
        }else{
            navigate("/login")
        }
    }

    return (
        <>
            {loading ? ("Carregando...") : (<div className="place_Container">
                <h1 className="place_Name">{data.name}</h1>
                <div className="place_address">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span> {data.address}</span>
                </div>
                <span className="place_Nota">Nota: {data.rating}</span>
                <span className="place_Stars">{data.stars} Estrelas</span>
                <span className="place_Price">Diária: R$ {data.price}</span>
                <div className="place_Images">
                    <img src={hotel} alt="produto" className="place_product" />
                    <img src={hotel} alt="produto" className="place_product" />
                    <img src={hotel} alt="produto" className="place_product" />
                    <img src={hotel} alt="produto" className="place_product" />
                </div>
                <div className="place_Description">
                    <div className="place_box">
                        <h1 className="place_Title">{data.title}</h1><br></br>
                        <p className="place_desc">{data.description}</p><br></br>
                        <p className="place_Days">Dias Reservados: {days+1}</p>
                        <p className="place_Value">Valor da reserva: R$ {(days+1) * data.price * options.room}</p>
                    </div>
                    <button onClick={handleClick} className="place_booking">Reserve!</button>
                </div>
                <h1 className="place_FraseEfeito">Aproveite nossas ofertas!!!!!!!!</h1>
            </div>)}
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}            
        </>
    )
}

export default Place