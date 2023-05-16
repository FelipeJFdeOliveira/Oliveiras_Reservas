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
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useFetch from "../../hooks/useFetch";


const Room = () => {

    const [hotelId, setHotelId] = useState("");
    const [hotelIdForRooms, setHotelIdForRooms] = useState("");
    const [roomNumber, setRoomNumber] = useState([])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [maxPeople, setMaxPeople] = useState("");
    const [numbers, setNumbers] = useState("");

    const { data, loading } = useFetch("/hotels")

    const handleClick = async () => {

        const roomNumbers = numbers.split(";").map((room) => ({ number: room }));

        try {
            await axios.post(`/rooms/${hotelId}`, {
                title,
                description,
                maxPeople,
                roomNumbers
            })

        } catch (err) {
            console.log(err)
        }
    }

    const handleRoomByHotel = async () => {

        try {

            const response = await axios.get(`/hotels/room/${hotelIdForRooms}`);
            const arryaRoom = []

            for (let index = 0; index < response.data.length; index++) {
                arryaRoom.unshift(response.data[index])
            }

            setRoomNumber(arryaRoom)


        } catch (err) {
            console.log(err)
        }

    };

    const handleDeleteRoom = (roomId) => async () => {

        try {
            await axios.delete(`/rooms/${roomId}/${hotelIdForRooms}`);

        } catch (err) {
            console.log(err)

        }
    }

    /*const handleUpdateRoom = (roomId) => async () => {

        try {
            await axios.put(`/rooms/${roomId}`)

        } catch (err) {
            console.log(err)
        }
    }*/

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
                                    <InputLabel id="demo-simple-select-label">Hotel</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={hotelId}
                                        label="hotel"
                                        onChange={(e) => setHotelId(e.target.value)}
                                    >
                                        {loading
                                            ? "loading"
                                            : data &&
                                            data.map((hotel) => (
                                                <MenuItem key={hotel._id} value={hotel._id}>{hotel.name}</MenuItem>
                                            ))}
                                    </Select>
                                    <TextField id="standard-basic" onChange={e => setTitle(e.target.value)} type="text" label="título" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setDescription(e.target.value)} type="text" label="descrição" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setMaxPeople(e.target.value)} type="number" label="quantidade máxima de pessoas" variant="standard" />
                                    <TextField id="standard-basic" onChange={e => setNumbers(e.target.value)} label="número dos quartos (separe os números por ponto e vírgula)" variant="standard" />
                                    <Button onClick={handleClick} variant="contained">Cadastrar</Button>
                                </Stack>
                            </Box>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'div'}>Deletar tipos de quarto</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2}>
                                    <InputLabel id="demo-simple-select-label">Hotel</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={hotelIdForRooms}
                                        label="hotel"
                                        onChange={(e) => setHotelIdForRooms(e.target.value)}
                                    >
                                        {loading
                                            ? "loading"
                                            : data &&
                                            data.map((hotelDelete) => (
                                                <MenuItem key={hotelDelete._id} value={hotelDelete._id}>{hotelDelete.name}</MenuItem>
                                            ))}
                                    </Select>
                                    <Button onClick={handleRoomByHotel} variant="contained">Buscar tipos de quarto</Button>
                                    {roomNumber && roomNumber.map((Roomtitle) => (
                                        <div key={Roomtitle._id}>
                                            <p><b>Título:</b> {Roomtitle.title}</p>
                                            <Button onClick={handleDeleteRoom(Roomtitle._id)} variant="contained">Deletar</Button>
                                        </div>
                                    ))}
                                </Stack>
                            </Box>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'div'}>Atualizar</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2}>
                                    
                                </Stack>
                            </Box>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'div'}>Exibir um quarto</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2}>
                                    
                                </Stack>
                            </Box>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'div'}>Exibir todos os quartos</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2}>
                                    
                                </Stack>
                            </Box>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container >            
        </>
    )
}

export default Room