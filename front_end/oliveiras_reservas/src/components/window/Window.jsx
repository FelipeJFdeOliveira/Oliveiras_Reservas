import "./window.css"


const Window = ({ image, text, city, qtd }) => {
    return (
        <>
            <div className="windowContainer">
                <div className="windowImages">
                    <img alt="Lugares" src={image} className="windowImage" />
                    <div className="windowTexts">
                        <p>{text}</p>
                    </div>
                    <div className="windowPlace">
                        <p>{city}</p>
                        <p>{qtd}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Window