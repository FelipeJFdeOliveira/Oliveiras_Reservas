import { Box, Button, Container, Stack, TextField } from "@mui/material"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import axios from "axios"
import { useState } from "react"


const CreateUser = () =>{

    const[username, setUsername] = useState("")
    const[email, setEmail] = useState("")
    const[country, setCountry] = useState("")
    const[city, setCity] = useState("")
    const[phone, setPhone] = useState("")
    const[password, setPassword] = useState("")
    const[error, setError] = useState(undefined)

    const handleClick = async (e) =>{
        
        try {
            await axios.post("/auth/register",{
                username,
                email,
                country,
                city,
                phone,
                password
            })
            
        } catch (err) {
            console.log(err)
            const errors = err
            setError(errors)
        }
    }

    return (
        <>
      <div className="adminNavbar">
        <Navbar page={"Login"} />
      </div>
        <Container style={{ display: "flex", alignItems:"center", flexDirection:"column", marginTop:"100px", height: "auto" }} maxWidth="lg">
          <Box sx={{ width: '60%' }}>
            <Stack spacing={4}>
              <TextField onChange={e => setUsername(e.target.value)} type="text" label="nome de usuário" variant="standard" />
              <TextField onChange={e => setEmail(e.target.value)} type="text" label="email" variant="standard" />
              <TextField onChange={e => setCountry(e.target.value)} type="text" label="país" variant="standard" />
              <TextField onChange={e => setCity(e.target.value)} type="text" label="cidade" variant="standard" />
              <TextField onChange={e => setPhone(e.target.value)} type="text" label="telefone" variant="standard" />
              <TextField onChange={e => setPassword(e.target.value)} type="password" label="senha" variant="standard" />
              <Button onClick={handleClick} variant="contained">Criar</Button>
              <br />
              {error && <span>{error.response.status === 500 ? "Todos os campos são obrigátorios, verifique se algum está em branco." : error.message}</span>}
            </Stack>
          </Box>
        </Container>
      <div className="adminFooter">
        <Footer />
      </div>
    </>
    )
}

export default CreateUser