import "./product.css"
import Navbar from "../../components/navbar/Navbar"
import Place from "../../components/place/Place"
import Footer from "../../components/footer/Footer"

const Product = () => {

    return (
        <>
            <div className="productContainer">
                <div className="productNavbar">
                    <Navbar page={"Hotels"} />
                </div>
                <div className="productOne">
                    <Place />
                </div>
                <div className="productFooter">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Product