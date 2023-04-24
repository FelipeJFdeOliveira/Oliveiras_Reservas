import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./filter.css";
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import * as locales from 'react-date-range/dist/locale';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Filter = () => {

    const [locale] = React.useState('pt');

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);


    return (
        <>
            <div className="filterContainer">
                <div className="filterLocal">
                    <FontAwesomeIcon icon={faBed} className="filterBed" />
                    <input type="text" placeholder="Para onde você quer ir?" className="filterWhere" />
                </div>
                <div className="filterDays">
                    <FontAwesomeIcon icon={faCalendarDays} className="filterCalendar" />
                    <span>check-in e check-out</span>
                </div>
                <div className="filterPeople">
                    <FontAwesomeIcon icon={faPerson} className="filterPerson" />
                    <span>1 adulto(s), 0 criança(s) e 1 quarto(s)</span>
                </div>
                <button>Procurar</button>
            </div>
            <div className="filterCalendar">
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    locale={locales[locale]}
                    ranges={date}
                />
            </div>
        </>
    )
}

export default Filter