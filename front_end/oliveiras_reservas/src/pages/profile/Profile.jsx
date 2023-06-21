import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import React, { useContext } from 'react';
import { Card, CardContent, Grid, TextField, Button, Container } from '@mui/material';
import { format } from 'date-fns';
import { SearchContext } from "../../context/SearchContext";
import axios from "axios"

const Profile = () => {

    const { dates, options, hotelName, amount, city, selectedRooms, alldates } = useContext(SearchContext)

    const formattedStartDate = format(dates[0].startDate, 'dd/MM/yyyy');
    const formattedEndDate = format(dates[0].endDate, 'dd/MM/yyyy');

    const handleClick = async() => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                  const res = axios.put(`/rooms/availability/${roomId}`, {
                    dates: alldates,
                  });
                  return res.data;
                })
              );
            
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
                    <h1 className="profileName">Reserva</h1>
                    <br />
                    <Card>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField disabled id="outlined-disabled" variant="standard" label="Nome do hotel" value={hotelName} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField disabled variant="standard" label="Cidade" value={city} InputLabelProps={{
                                        shrink: true,
                                    }} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField disabled variant="standard" label="Quantidade de quartos reservados" value={options.room} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField disabled variant="standard" label="Valor total a pagar (R$)" value={amount} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField disabled variant="standard" label="Check-in" value={formattedStartDate} fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField disabled variant="standard" label="Check-out" value={formattedEndDate} fullWidth />
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
                                    <TextField required type="number" label="Número do cartão" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required type="text" label="Nome no cartão" fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField required type="date" InputLabelProps={{
                                        shrink: true,
                                    }} label="Data de validade" fullWidth />
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

export default Profile