import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./filter.css";
import { faBed, faCalendarDays, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import * as locales from 'react-date-range/dist/locale';
import React, { useContext, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";

const Filter = () => {

    const navigate = useNavigate()

    const [destination, setDestination] = useState("Rio de Janeiro")

    const [openDate, setOpenDate] = useState(false)

    const [openOptions, setOpenOptions] = useState(false)

    const [options, setOptions] = useState({
        room: 1
    })

    const { data, loading } = useFetch("/hotels/cityName");

    const [locale] = React.useState('pt');

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [dateSelected, setDateSelected] = useState(false);

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
        if (!dateSelected) {
            return;
        }

        dispatch({ type: "NEW_SEARCH", payload: { city:destination, destination, dates, options } })
        navigate("/list", { state: { destination, dates, options } });
    }

    const handleDateSelect = (item) => {
        setDates([item.selection]);
        setDateSelected(true);
    }

    return (
        <>
            <div className="filterContainer">
                <div className="filterLocal">
                    <FontAwesomeIcon icon={faPlaneDeparture} className="filterBed" />

                    <select
                        id="destination"
                        className="filterWhere"
                        onChange={(e) => setDestination(e.target.value)}
                    >
                        {loading
                            ? "loading"
                            : data &&
                            data.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                    </select>
                </div>
                <div className="filterDays">
                    <FontAwesomeIcon icon={faCalendarDays} className="filterCalendar" />
                    {openDate === false ? (
                        <span className="filterSpan" onClick={() => setOpenDate(!openDate)}>
                            Quando você deseja reservar?
                        </span>
                    ) : (
                        <>
                            {dateSelected && (
                                <span className="filterSpan">
                                    {`${format(dates[0].startDate, "dd/MM/yyyy")} até ${format(dates[0].endDate, "dd/MM/yyyy")}`}
                                </span>
                            )}
                            <div className="filterCalendarDays">
                                {openDate && (
                                    <DateRange
                                        minDate={new Date()}
                                        editableDateInputs={true}
                                        onChange={handleDateSelect}
                                        moveRangeOnFirstSelection={false}
                                        locale={locales[locale]}
                                        ranges={dates}
                                    />
                                )}
                            </div>
                        </>
                    )}
                </div>
                <div className="filterPeople">
                    <FontAwesomeIcon icon={faBed} className="filterPerson" />
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
                <button className={`filterButtonSearch ${!dateSelected && "invisible"}`} onClick={handleSearch}>Procurar</button>
            </div>
        </>
    )
}

export default Filter;
