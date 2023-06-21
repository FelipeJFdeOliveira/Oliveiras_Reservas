import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const ForgetPassword = () => {

    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');

    const handleClick = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(`/users/forgetPassword?email=${email}`, { email: email })

            setMessage(response.data.mensagem);

        } catch (err) {

            if (err.response.status === 404) {
                setMessage("Usuário não encontrado na nossa base de dados, certifique-se de ter criado uma conta em nosso site com esse e-mail"); 
            }
            
            console.log(err)
        }
    }

    console.log(message)

    return (
        <>
            <div className="adminNavbar">
                <Navbar page={"Login"} />
            </div>
            <Container style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "160px", height: "50vh" }} maxWidth="lg">
                <Box sx={{ width: '40%' }}>
                    <Stack spacing={4}>
                        <p>Digite o email que você utiliza para acessar nosso site. Vamos enviar um link de redefinição de senha para esse email. </p>
                        <TextField onChange={(e) => setEmail(e.target.value)} type="email" id="email" label="email" variant="standard" />
                        <Button onClick={handleClick} variant="contained">Solicitar</Button>
                        {message && <span>{message}</span>}
                    </Stack>
                </Box>
            </Container>
            <div className="adminFooter">
                <Footer />
            </div>
        </>
    );
};

export default ForgetPassword;