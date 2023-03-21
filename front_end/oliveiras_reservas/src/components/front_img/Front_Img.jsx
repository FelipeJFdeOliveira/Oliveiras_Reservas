import "./front_img.css"
import "@fontsource/montez";


const FrontImg = ({ text, img }) => {
    return (
        <>
            <div className="frontContainer">
                <div className="frontImage">
                    <img src={img} alt="Imagem generica" className="frontImageHome" />
                </div>
                <div className="frontContainerText">
                    <h1 className={(text === "Venha conhecer a Oliveiras Reservas!") ? "frontText green" : "frontText black"}>{text}</h1>
                </div>
            </div>
        </>
    )
}

export default FrontImg