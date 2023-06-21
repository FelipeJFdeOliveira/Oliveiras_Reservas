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
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: "20px"
}));


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
                <Box sx={{ flexGrow: 1 }} display="flex" flexDirection="column" justifyContent="center">
                    <Grid container spacing={2}>
                        <Grid xs={12} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                            <Item>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField onChange={(e) => setMin(e.target.value)} min={1} type="number" id="outlined-basic" label="Preço Minímo" variant="outlined" />
                                    <TextField onChange={(e) => setMax(e.target.value)} min={1} type="number" id="outlined-basic" label="Preço Máximo" variant="outlined" />
                                    <TextField onChange={(e) => setStarMin(e.target.value)} min={1} type="number" id="outlined-basic" label="Estrelas (min.)" variant="outlined" />
                                    <TextField onChange={(e) => setStarMax(e.target.value)} min={1} type="number" id="outlined-basic" label="Estrelas (máx.)" variant="outlined" />
                                </Box>
                            </Item>

                        </Grid>
                        <Grid xs={12} display="flex" flexDirection="row" justifyContent="center" marginBottom="30px" padding="20px 40px">
                            <div className="listSearchPlaces">
                                {loading ? "Carregando..." : <>
                                    {data.map(item => (
                                        <Result item={item} key={item._id} />
                                    ))}
                                </>}
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <Footer />
            </div>
        </>
    )
}

export default List