import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


const User = () => {

    return (
        <>
            <Container style={{height: "auto"}} maxWidth="lg">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'div'}>Deletar usuário</Typography>
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
                        <Typography component={'div'}>Atualizar usuário</Typography>
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
                        <Typography component={'div'}>Exibir um usuário</Typography>
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
                        <Typography component={'div'}>Exibir todos os usuários</Typography>
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

export default User