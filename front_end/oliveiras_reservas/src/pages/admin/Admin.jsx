import "./admin.css"
import Navbar from "../../components/navbar/Navbar"
import Hotel from "../../components/Hotel/Hotel"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from "../../components/footer/Footer";
import Room from "../../components/room/Room";
import User from "../../components/user/User";

function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 15 }}>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Admin = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="adminContainer">
                <div className="adminNavbar">
                    <Navbar page={"Admin"} />
                </div>
                <div className="adminNewHotel">
                    <Box sx={{ width: '100%' }}>
                        <Box className="adminTabPanelHotel" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs variant="scrollable" scrollButtons allowScrollButtonsMobile value={value} onChange={handleChange} aria-label="scrollable force tabs example">
                                <Tab label="Hotel" {...a11yProps(0)} />
                                <Tab label="Quarto" {...a11yProps(1)} />
                                <Tab label="Usuário" {...a11yProps(2)} />
                                <Tab label="Estatísticas" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Hotel />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Room />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <User />
                        </TabPanel>
                        <TabPanel value={value} index={3}>

                        </TabPanel>
                    </Box>

                </div>
                <div className="adminFooter">
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default Admin