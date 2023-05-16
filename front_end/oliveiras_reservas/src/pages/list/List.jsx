import "./list.css"
import Navbar from "../../components/navbar/Navbar"
import Front from "../../images/front-hotel.jpg"
import FrontImg from "../../components/front_img/Front_Img"
import Footer from "../../components/footer/Footer.jsx"
import Result from "../../components/result/Result"
import useFetch from "../../hooks/useFetch"
import { useLocation } from "react-router-dom"
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const List = () => {

    const location = useLocation();
    const [destination] = useState(location.state.destination);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);  
    const [starMin, setStarMin] = useState(undefined);
    const [starMax, setStarMax] = useState(undefined);  

    const { data, loading } = useFetch(
        `/hotels/filterHotels?city=${destination}&min=${min || 0}&max=${max || 9999}&starMin=${starMin || 1}&starMax=${starMax || 5}`
    );

    return (
        <>
            <div className="listContainer">
                <div className="listNavbar">
                    <Navbar page={"Hotels"} />
                </div>
                <FrontImg text={"Faça sua reserva! Não perca tempo!"} img={Front} />
                <div className="list">
                    <div className="listPlaces">
                        <div className="listSearch">
                            <h1 className="searchTitle">Filtro</h1>
                            <div className="searchFields">
                                <div className="searchOptions">
                                    <div className="serachListOptions">
                                        <h4 className="searchPrice">Preço Minímo</h4>
                                        <input onChange={(e) => setMin(e.target.value)} min={1} className="searchInputPrice" type="number" />
                                    </div>
                                    <div className="serachListOptions">
                                        <h4 className="searchPrice">Preço Máximo</h4>
                                        <input onChange={(e) => setMax(e.target.value)} min={1} className="searchInputPrice" type="number" />
                                    </div>
                                    <div className="serachListOptions">
                                        <h4 className="searchPrice">Estrelas (min)</h4>
                                        <input onChange={(e) => setStarMin(e.target.value)} min={1} className="searchInputPrice" type="number" />
                                    </div>
                                    <div className="serachListOptions">
                                        <h4 className="searchPrice">Estrelas (max)</h4>
                                        <input onChange={(e) => setStarMax(e.target.value)} min={5} className="searchInputPrice" type="number" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="listSearchPlaces">
                            {loading ? "Carregando..." : <>
                                {data.map(item => (
                                    <Result item={item} key={item._id} />
                                ))}
                            </>}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default List