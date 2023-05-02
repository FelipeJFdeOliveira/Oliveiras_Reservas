import "./house.css"
import Navbar from "../../components/navbar/Navbar"
import Front from "../../images/front-hotel.jpg"
import FrontImg from "../../components/front_img/Front_Img"
import Filter from "../../components/filter/Filter"
import Footer from "../../components/footer/Footer.jsx"

const House = () => {
    return (
        <>
            <div className="houseContainer">
                <div className="houseNavbar">
                    <Navbar page={"Houses"} />
                </div>
                <FrontImg text={"Venha conhecer nossas Casas!"} img={Front} />
                <div className="houseFilter">
                    <Filter />
                </div>
                <div className="hotelPlacesTitle">
                    <h1>Alguns dos nossos locais</h1>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default House