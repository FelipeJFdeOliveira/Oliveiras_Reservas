import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import React, { useContext } from 'react';
import { Card, CardContent, Grid, TextField, Button, Container } from '@mui/material';
import { format } from 'date-fns';
import { SearchContext } from "../../context/SearchContext";
import axios from "axios"
import { useLocation } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import pt from 'date-fns/locale/pt';

const Payment = () => {

    const { dates, options, hotelName, hotelAddress, amount, city, selectedRooms } = useContext(SearchContext)

    const formattedStartDate = format(dates[0].startDate, 'dd/MM/yyyy');
    const formattedEndDate = format(dates[0].endDate, 'dd/MM/yyyy');

    const location = useLocation();

    const user = location.pathname.split('/', 3)[2]     

    const handleClick = async (e) => {

        try {
            await axios.post("/booking", {
                "idUser": user,
                "idHotel": "teste",
                "hotelName": hotelName,
                "city": city,
                "Address": hotelAddress,
                "quantityRoom": options.room,
                "rooms": selectedRooms,
                "amountValue": amount,
                "checkIn": formattedStartDate,
                "checkOut": formattedEndDate,
                "creditCardNumber": 456,
                "creditName": "felipe",
                "creditCardValidate": "2023-05-20T02:44:24.755Z",
                "creditCardCVV": 466
            })

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <div>
                <div className="listNavbar">
                    <Navbar page={"Hotels"} />
                </div>
                <Container className="profileContainer" maxWidth="md">
                    <br />
                    <h1 className="profileName">Informações da reserva</h1>
                    <br />
                    <Card>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField id="outlined-disabled" variant="standard" label="Nome do hotel" value={hotelName} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField variant="standard" label="Cidade" value={city} InputLabelProps={{
                                        shrink: true,
                                    }} fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField variant="standard" label="Endereço" value={hotelAddress} InputLabelProps={{
                                        shrink: true,
                                    }} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField variant="standard" label="Quantidade de quartos reservados" value={options.room} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField variant="standard" label="Valor total a pagar (R$)" value={amount} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField variant="standard" label="Check-in" value={formattedStartDate} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField variant="standard" label="Check-out" value={formattedEndDate} fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField variant="standard" label="Quartos" value={selectedRooms} fullWidth />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <br />
                    <h1 className="profileName">Cartão de crédito</h1>
                    <br />
                    <Card>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField required inputProps={{ maxLen: 5 }}  type="number" label="Número no cartão" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required type="text" label="Nome no cartão" fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={pt}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker label="Data de validade" />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField required type="number" label="CVV" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button onClick={handleClick} variant="contained" color="primary" fullWidth>
                                        Pagar
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
                <br />
                <div className="payerFooter">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Payment