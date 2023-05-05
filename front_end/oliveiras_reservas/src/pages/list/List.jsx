import "./list.css"
import Navbar from "../../components/navbar/Navbar"
import Front from "../../images/front-hotel.jpg"
import FrontImg from "../../components/front_img/Front_Img"
import Footer from "../../components/footer/Footer.jsx"
import Result from "../../components/result/Result"
import useFetch from "../../hooks/useFetch"
import { useLocation } from "react-router-dom"
import { DateRange } from "react-date-range";
import * as locales from 'react-date-range/dist/locale';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [openDate, setOpenDate] = useState(false);
    const [options] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);  
    const [starMin, setStarMin] = useState(undefined);
    const [starMax, setStarMax] = useState(undefined);  
    const [date, setDate] = useState(location.state.date)
    const [locale] = React.useState('pt');

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
                                <h3 className="searchDestino">Destino</h3>
                                <input onChange={(e) => setDestination(e.target.value)} className="searchInput" type="text" placeholder={destination} />
                                <h3 className="searchDestino">Período</h3>
                                <span className="searchInput" onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} até ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                <div className="filterCalendarDays">
                                    <DateRange
                                        minDate={new Date()}
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        locale={locales[locale]}
                                        ranges={date}
                                    />
                                </div>
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
                                    <div className="serachListOptions">
                                        <h4 className="searchPrice">Adulto(s)</h4>
                                        <input min={1} className="searchInputPrice" type="number" placeholder={options.adulto} />
                                    </div>
                                    <div className="serachListOptions">
                                        <h4 className="searchPrice">Criança(s)</h4>
                                        <input min={0} className="searchInputPrice" type="number" placeholder={options.criança} />
                                    </div>
                                    <div className="serachListOptions">
                                        <h4 className="searchPrice">Quarto(s)</h4>
                                        <input min={1} className="searchInputPrice" type="number" placeholder={options.quarto} />
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