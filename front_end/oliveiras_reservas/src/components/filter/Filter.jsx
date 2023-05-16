import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./filter.css";
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import * as locales from 'react-date-range/dist/locale';
import React, { useContext, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Filter = () => {

    const navigate = useNavigate()

    const [destination, setDestination] = useState("")

    const [openDate, setOpenDate] = useState(false)

    const [openOptions, setOpenOptions] = useState(false)

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const [locale] = React.useState('pt');

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const { dispatch } = useContext(SearchContext)

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
        navigate("/list", { state: { destination, dates, options } });
    }

    const today = format(new Date().getTime(), "dd/MM/yyyy")

    const alerta = () => {
        alert("Você precisa preencher quando e para onde deseja ir.");
    }

    return (
        <>
            <div className="filterContainer">
                <div className="filterLocal">
                    <FontAwesomeIcon icon={faBed} className="filterBed" />
                    <input
                        type="text"
                        placeholder="Para onde você quer ir?"
                        className="filterWhere"
                        onChange={e => setDestination(e.target.value)}
                    />
                </div>
                <div className="filterDays">
                    <FontAwesomeIcon icon={faCalendarDays} className="filterCalendar" />
                    <span className="filterSpan" onClick={() => setOpenDate(!openDate)}>{today === format(dates[0].endDate - 1, "dd/MM/yyyy") ? "Quando você deseja reservar?" : `${format(dates[0].startDate, "dd/MM/yyyy")} até ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                    <div className="filterCalendarDays">
                        {openDate && <DateRange
                            minDate={new Date()}
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            locale={locales[locale]}
                            ranges={dates}
                        />}
                    </div>
                </div>
                <div className="filterPeople">
                    <FontAwesomeIcon icon={faPerson} className="filterPerson" />
                    <span className="filterSpan" onClick={() => setOpenOptions(!openOptions)}>Quantos quartos? <b>{options.room}</b> Quarto(s)</span>
                    {openOptions &&
                        <div className="filterOptions">
                            <div className="filterOptionsItems">
                                <span className="filterOptionsText">Quartos</span>
                                <div className="filterCounter">
                                    <button disabled={options.room <= 1} className="filterOptionsCounter" onClick={() => handleOption("room", "d")}>-</button>
                                    <span className="filterOptionsNumber">{options.room}</span>
                                    <button className="filterOptionsCounter" onClick={() => handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                </div>
                {(today === format(dates[0].endDate - 1, "dd/MM/yyyy") || destination === "") ? <button className="filterButtonSearch" onClick={alerta}>Procurar</button>
                    : <button className="filterButtonSearch" onClick={handleSearch}>Procurar</button>}
            </div>

        </>
    )
}

export default Filter