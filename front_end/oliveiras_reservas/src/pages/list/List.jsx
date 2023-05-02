import "./list.css"
import Navbar from "../../components/navbar/Navbar"
import Front from "../../images/front-hotel.jpg"
import FrontImg from "../../components/front_img/Front_Img"
import Footer from "../../components/footer/Footer.jsx"
import Search from "../../components/search/Search.jsx"
import Result from "../../components/result/Result"

const List = () => {

    return (
        <>
            <div className="listContainer">
                <div className="listNavbar">
                    <Navbar page={"Hotels"} />
                </div>
                <FrontImg text={"Faça sua reserva! Não perca tempo!"} img={Front} />
                <div className="list">
                    <div className="listPlaces">
                        <div className="listSearch">
                            <Search />
                        </div>
                        <div className="listSearchPlaces">
                           <Result/>
                           <Result/>
                           <Result/>
                           <Result/>
                           <Result/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default List