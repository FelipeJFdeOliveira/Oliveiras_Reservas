import axios from "axios"
import { useState } from "react"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch from "../../hooks/useFetch";

const Hotel = () => {

    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [stars, setStars] = useState("")
    const [rating, setRating] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [hotel, setHotel] = useState([]);
    const [hotelId, setHotelId] = useState("");
    const [hotelIdUpdate, setHotelIdUpdate] = useState("")

    const { data, loading } = useFetch("/hotels")


    const handleClick = async (e) => {

        try {
            await axios.post("/hotels", {
                name,
                city,
                address,
                stars,
                rating,
                title,
                description,
                price,
            })

        } catch (err) {
            console.log(err)
        }

    }

    const hotelsID = async (e) => {

        e.preventDefault();

        try {

            await axios.delete(`/hotels/${hotelId}`)

        } catch (err) {
            console.log(err)
        }

    }

    function updateData(name, city, address, stars, rating, title, description, price) {

        const dataHotelUpdate = {
            "name": name,
            "city": city,
            "address": address,
            "stars": stars,
            "rating": rating,
            "title": title,
            "description": description,
            "price": price
        };


        for (const key in dataHotelUpdate) {
            if (dataHotelUpdate[key] === "") {
                delete dataHotelUpdate[key];
            }
        }

        return dataHotelUpdate;
    }

    const hotelsIDPut = async (e) => {

        e.preventDefault();

        try {

            await axios.put(`/hotels/${hotelIdUpdate}`, updateData(name, city, address, stars, rating, title, description, price))

        } catch (err) {
            console.log(err)
        }
    }

    const handleGetHotel = async () => {

        try {

            const response = await axios.get(`/hotels/find/${hotelId}`);
            setHotel(response.data);
            

        } catch (err) {
            console.log(err);
        }
    }
     

    return (
        <>
            <Container style={{height: "auto"}} maxWidth="lg">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'div'}>Adicionar</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2}>
                                    <TextField id="standard-basic" onChange={e => setName(e.target.value)} label="nome do hotel" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setCity(e.target.value)} type="text" label="cidade" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setAddress(e.target.value)} type="text" label="endereço" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setStars(e.target.value)} type="number" label="estrelas" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setRating(e.target.value)} type="number" label="nota" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setTitle(e.target.value)} type="text" label="título" variant="standard" />
                                    <TextField multiline id="standard-basic" onChange={e => setDescription(e.target.value)} type="text" label="descrição" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setPrice(e.target.value)} type="number" label="diária (R$)" variant="standard" />
                                    <Button className="adminButtonHotel" onClick={handleClick} variant="contained">Cadastrar</Button>
                                </Stack>
                            </Box>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="adminHotel">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'div'}>Deletar</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <FormControl fullWidth>
                                <Box sx={{ width: '100%' }}>
                                    <Stack spacing={2}>
                                        <InputLabel id="demo-simple-select-label">Hotel</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={hotelId}
                                            label="hotel"
                                            onChange={(e) => setHotelId(e.target.value)}
                                        >
                                            {loading ? "Carregando..." : data &&
                                                data.map((hotelDelete) => (
                                                    <MenuItem key={hotelDelete._id} value={hotelDelete._id}>{hotelDelete.name}</MenuItem>
                                                ))}
                                        </Select>
                                        <Button onClick={hotelsID} variant="contained">Deletar</Button>
                                    </Stack>
                                </Box>
                            </FormControl>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="adminHotel">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'div'}>Atualizar</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Hotel</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={hotelIdUpdate}
                                    label="hotel"
                                    onChange={(e) => setHotelIdUpdate(e.target.value)}
                                >
                                    {loading ? "Carregando..." : data &&
                                        data.map((hotelUpdate) => (
                                            <MenuItem key={hotelUpdate._id} value={hotelUpdate._id}>{hotelUpdate.name}</MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2}>
                                    <TextField id="standard-basic" onChange={e => setName(e.target.value)} label="nome do hotel" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setCity(e.target.value)} type="text" label="cidade" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setAddress(e.target.value)} type="text" label="endereço" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setStars(e.target.value)} type="number" label="estrelas" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setRating(e.target.value)} type="number" label="nota" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setTitle(e.target.value)} type="text" label="título" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setDescription(e.target.value)} type="text" label="descrição" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setPrice(e.target.value)} type="number" label="diária (R$)" variant="standard" />
                                    <Button className="adminButtonHotel" onClick={hotelsIDPut} variant="contained">Atualizar</Button>
                                </Stack>
                            </Box>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="adminHotel">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'div'}>Exibir um hotel</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Hotel</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={hotelId}
                                    label="hotel"
                                    onChange={(e) => setHotelId(e.target.value)}
                                >
                                    {loading ? "Carregando..." : data &&
                                        data.map((hotelShow) => (
                                            <MenuItem key={hotelShow._id} value={hotelShow._id}>{hotelShow.name}</MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2}>
                                    <br></br>
                                    <p><b>Nome:</b> {hotel.name}</p>
                                    <p><b>Cidade:</b> {hotel.city}</p>
                                    <p><b>Endereço:</b> {hotel.address}</p>
                                    <p><b>Estrelas:</b> {hotel.stars}</p>
                                    <p><b>Nota:</b> {hotel.rating}</p>
                                    <p><b>Título:</b> {hotel.title}</p>
                                    <p><b>Descrição:</b> {hotel.description}</p>
                                    <p><b>Diária (R$):</b>  {hotel.price}</p>
                                    <p><b>Criado em:</b>  {hotel.createdAt}</p>
                                    <p><b>Atualizado em:</b>  {hotel.updatedAt}</p>
                                    <Button onClick={handleGetHotel} variant="contained">Exibir</Button>
                                </Stack>
                            </Box>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="adminHotel">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'div'}>Exibir todos os hotéis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center"><b>Nome</b></TableCell>
                                            <TableCell align="center"><b>Cidade</b></TableCell>
                                            <TableCell align="center"><b>Endereço</b></TableCell>
                                            <TableCell align="center"><b>Estrelas</b></TableCell>
                                            <TableCell align="center"><b>Nota</b></TableCell>
                                            <TableCell align="center"><b>Título</b></TableCell>
                                            <TableCell align="center"><b>Descrição</b></TableCell>
                                            <TableCell align="center"><b>Quartos</b></TableCell>
                                            <TableCell align="center"><b>Diária (R$)</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map((row) => (
                                            <TableRow
                                                key={row._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="center">{row.city}</TableCell>
                                                <TableCell align="center">{row.address}</TableCell>
                                                <TableCell align="center">{row.stars}</TableCell>
                                                <TableCell align="center">{row.rating}</TableCell>
                                                <TableCell align="center">{row.title}</TableCell>
                                                <TableCell align="center">{row.description}</TableCell>
                                                <TableCell align="center">{row.price}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container >
        </>
    )
}

export default Hotel