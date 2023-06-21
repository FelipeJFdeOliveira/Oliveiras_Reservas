import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./reserve.css"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../hooks/useFetch"
import { useContext, useState } from "react"
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


const Reserve = ({ setOpen, hotelId }) => {

  const { user } = useContext(AuthContext)

  const [selectedRooms, setSelectedRooms] = useState([])

  const { data } = useFetch(`/hotels/room/${hotelId}`)

  const { dates, options, hotelName, amount, city, dispatch } = useContext(SearchContext)

  const [count, setCount] = useState(options.room);

  const getDatesInRange = (startDate, endDate) => {

    const start = new Date(startDate);

    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const isQuantity = () => {

    if (count === 0) {
      return "disabled"
    }
  }

  const handleCounter = () => {
    setSelectedRooms([]);
    setCount(options.room);
  }


  const handleSelect = (e) => {
    const checked = e.target.checked
    const value = e.target.value
    setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item => item !== value))
    setCount((prevCount) => (checked ? prevCount - 1 : prevCount + 1));
  }

  const navigate = useNavigate();

  const handleClick = () => {
    try {
      setOpen(false);
      dispatch({ type: "NEW_SEARCH", payload: { amount, dates, options, hotelName, city, selectedRooms: selectedRooms, alldates: alldates } })
      navigate(`/profile/${user._id}`, { state: { amount, dates, options, hotelName, city, selectedRooms, alldates } });
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <>
      <div className="reserve">
        <div className="rContainer">
          <div className="rtitles">
            <FontAwesomeIcon icon={faCircleXmark} className="rclose" onClick={() => setOpen(false)} />
            <span className="rQuantityRooms"> Quantidade de quartos escolhidos: <b>{count}</b></span><br />
            <span>Selecione os quartos:</span>
          </div>
          {data.map((item) => (
            <div className="rItem" key={item._id}>
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.description}</div>
                <div className="rMax">
                  Pessoas (Máx.): <b>{item.maxPeople}</b>
                </div>
              </div>
              <div className="rSelectRooms">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room">
                    <label>{roomNumber.number}</label>
                    <input className="rInputCheckBox" checked={selectedRooms.includes(roomNumber._id)} onClick={() => setCount((prevCount) => prevCount)} disabled={!isAvailable(roomNumber) || isQuantity()} type="checkbox" value={roomNumber._id} onChange={handleSelect} />
                  </div>
                ))}
              </div>
            </div>))}
          <div className="rbuttons">
            <button onClick={handleClick} className="rButton">Reservar</button>
            <button className="rDeleteCheckBox" onClick={handleCounter}>Limpar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reserve