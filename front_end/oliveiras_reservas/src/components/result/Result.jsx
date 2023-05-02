import { useNavigate } from "react-router-dom";
import "./result.css";

const Result = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="resultProducts">
                <div className="resultText">
                    <h3 className="resultTitleProduct">Plaza Hotel</h3>
                    <p className="resultDescription">
                        O quarto de hotel possui uma cama king size com travesseiros macios e roupa de cama de alta qualidade.
                        Além disso, dispõe de uma TV de tela plana, ar-condicionado, frigobar,
                        mesa de trabalho e um banheiro privativo com chuveiro de água quente.
                    </p>
                </div>
                <div className="resultQualifications">
                    <span className="resultStars"> 5 Estrela(s)</span>
                    <span className="resultRating">Nota: 8,9</span>
                    <span className="resultPrice">Diária: R$ 250</span>
                </div>
                <div className="resultBuitton">
                    <button className="resultDisp" onClick={() => navigate('/product')}>Disponibilidade</button>
                </div>
            </div>
        </>
    )
}

export default Result