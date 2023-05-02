import "./search.css";
import { DateRange } from "react-date-range";
import * as locales from 'react-date-range/dist/locale';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useLocation } from "react-router-dom";

const Search = () => {

    const location = useLocation()    
    const [destination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options] = useState(location.state.options)

    const [locale] = React.useState('pt');

    const [openDate, setOpenDate] = useState(false)

    return (
        <>
            <div className="searchContainer">
                <h1 className="searchTitle">Filtro</h1>
                <div className="searchFields">
                    <h3 className="searchDestino">Destino</h3>
                    <input className="searchInput" type="text" placeholder={destination}/>
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
                            <input min={100} placeholder="100" className="searchInputPrice" type="number" />
                        </div>
                        <div className="serachListOptions">
                            <h4 className="searchPrice">Preço Máximo</h4>
                            <input min={250} placeholder="250" className="searchInputPrice" type="number" />
                        </div>
                        <div className="serachListOptions">
                            <h4 className="searchPrice">Adulto(s)</h4>
                            <input min={1} className="searchInputPrice" type="number" placeholder={options.adulto}/>
                        </div>
                        <div className="serachListOptions">
                            <h4 className="searchPrice">Criança(s)</h4>
                            <input min={0} className="searchInputPrice" type="number" placeholder={options.criança}/>
                        </div>
                        <div className="serachListOptions">
                            <h4 className="searchPrice">Quarto(s)</h4>
                            <input min={1} className="searchInputPrice" type="number" placeholder={options.quarto}/>
                        </div>
                        <button className="serachListOptionsButton">Filtrar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search