import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./filter.css";
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import * as locales from 'react-date-range/dist/locale';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Filter = () => {

    const navigate = useNavigate()

    const [destination, setDestination] = useState("")

    const [openDate, setOpenDate] = useState(false)

    const [openOptions, setOpenOptions] = useState(false)

    const [options, setOptions] = useState({
        adulto: 1,
        criança: 0,
        quarto: 1
    })

    const [locale] = React.useState('pt');

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleOption = (name, operation) =>{
        setOptions(prev=>{
            return{
                ...prev, 
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch = () => {
        navigate("/list", { state: {destination, date, options}});
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
                        onChange={e=>setDestination(e.target.value)}
                    />
                </div>
                <div className="filterDays">
                    <FontAwesomeIcon icon={faCalendarDays} className="filterCalendar" />
                    <span className="filterSpan" onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} até ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                    <div className="filterCalendarDays">
                        {openDate && <DateRange
                            minDate={new Date()}
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            locale={locales[locale]}
                            ranges={date}
                        />}
                    </div>
                </div>
                <div className="filterPeople">
                    <FontAwesomeIcon icon={faPerson} className="filterPerson" />
                    <span className="filterSpan" onClick={() => setOpenOptions(!openOptions)}>{`${options.adulto} adulto(s) - ${options.criança} criança(s) - ${options.quarto} quarto(s)`}</span>
                    {openOptions && <div className="filterOptions">
                        <div className="filterOptionsItems">
                            <span className="filterOptionsText">Adulto(s)</span>
                            <div className="filterCounter">
                                <button disabled={options.adulto <= 1} className="filterOptionsCounter" onClick={()=>handleOption("adulto", "d")}>-</button>
                                <span className="filterOptionsNumber">{options.adulto}</span>
                                <button className="filterOptionsCounter" onClick={()=>handleOption("adulto", "i")}>+</button>
                            </div>
                        </div>
                        <div className="filterOptionsItems">
                            <span className="filterOptionsText">Criança(s)</span>
                            <div className="filterCounter">
                                <button disabled={options.criança <= 0} className="filterOptionsCounter" onClick={()=>handleOption("criança", "d")}>-</button>
                                <span className="filterOptionsNumber">{options.criança}</span>
                                <button className="filterOptionsCounter" onClick={()=>handleOption("criança", "i")}>+</button>
                            </div>
                        </div>
                        <div className="filterOptionsItems">
                            <span className="filterOptionsText">Quarto(s)</span>
                            <div className="filterCounter">
                                <button disabled={options.quarto <= 1} className="filterOptionsCounter" onClick={()=>handleOption("quarto", "d")}>-</button>
                                <span className="filterOptionsNumber">{options.quarto}</span>
                                <button className="filterOptionsCounter" onClick={()=>handleOption("quarto", "i")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <button className="filterButtonSearch" onClick={handleSearch}>Procurar</button>
            </div>

        </>
    )
}

export default Filter