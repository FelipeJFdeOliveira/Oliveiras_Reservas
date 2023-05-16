import { Box, Button, Container, Stack, TextField } from "@mui/material"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"


const CreateUser = () =>{
    return (
        <>
      <div className="adminNavbar">
        <Navbar page={"Login"} />
      </div>
        <Container style={{ display: "flex", alignItems:"center", flexDirection:"column", marginTop:"100px", height: "auto" }} maxWidth="lg">
          <Box sx={{ width: '60%' }}>
            <Stack spacing={4}>
              <TextField type="text" label="nome de usuário" variant="standard" />
              <TextField type="text" label="email" variant="standard" />
              <TextField type="text" label="país" variant="standard" />
              <TextField type="text" label="cidade" variant="standard" />
              <TextField type="text" label="telefone" variant="standard" />
              <TextField type="password" label="senha" variant="standard" />
              <Button variant="contained">Criar</Button>
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