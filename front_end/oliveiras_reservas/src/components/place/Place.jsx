import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./place.css"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import "@fontsource/montez";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../reserveModal/Reserve.jsx";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Place = () => {

    const navigate = useNavigate()

    const [openModal, setOpenModal] = useState(false)

    const location = useLocation()

    const id = location.pathname.split("/")[2]

    const { data, loading } = useFetch(`/hotels/find/${id}`)

    const { dates, options, city, dispatch } = useContext(SearchContext)

    const { user } = useContext(AuthContext)

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate)

    const handleClick = () => {
        if (user) {
            dispatch({
                type: 'NEW_SEARCH',
                payload: {
                    city,
                    dates,
                    options,
                    hotelName: data.name,
                    amount: (days + 1) * data.price * options.room
                },
            });
            setOpenModal(true)

        } else {
            navigate("/login")
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} display="flex" flexDirection="column" alignItems="center" margin="30px 0px">
                    {loading ? ("Carregando...") : (<>
                        <Grid xs={12}>
                            <Item><h1 className="placeItems">{data.name}</h1></Item>
                            <Item>
                                <div className="placeItems">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <span> {data.address}</span>
                                </div>
                            </Item>
                            <Item>
                                <div className="placeItemsDescription">
                                    <span>Nota: {data.rating}</span>
                                    <span>{data.stars} Estrelas</span>
                                    <span>Diária: R$ {data.price}</span>
                                </div>
                            </Item>
                            <Item>
                                <div className="placeImages">
                                    {data.photos && (
                                        <>
                                            <img src={data.photos[1]} alt="foto quarto" />
                                            <img src={data.photos[2]} alt="foto quarto" />
                                            <img src={data.photos[3]} alt="foto quarto" />
                                            <img src={data.photos[4]} alt="foto quarto" />
                                        </>
                                    )}
                                </div>
                            </Item>
                            <Item><h1>{data.title}</h1></Item>
                            <Item><p>{data.description}</p></Item>
                            <Item><p>Dias Reservados: {days + 1}</p></Item>
                            <Item><p>Valor da reserva: R$ {(days + 1) * data.price * options.room}</p></Item>
                            <Item><button onClick={handleClick}>Reserve!</button></Item>
                            <Item><h1>Aproveite nossas ofertas!!!!!!!!</h1></Item>
                        </Grid>
                    </>)}
                    {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
                </Grid>
            </Box >
        </>
    )
}

export default Place