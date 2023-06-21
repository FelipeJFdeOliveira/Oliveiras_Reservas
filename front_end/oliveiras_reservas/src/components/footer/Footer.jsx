import "./footer.css"
import Instagram from "../../images/instagram.svg"
import Facebook from "../../images/facebook.svg"

const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                    <div className="footerTexts">
                        <p>Copyright © 2023 Oliveiras Reservas. Todos os direitos reservados.</p>
                        <p>Endereço: Rua ABC, s/n, Babilonia, Rio de Janeiro, Brasil</p>
                        <p>Telefone: +55 24 9000-0000</p>
                        <p>E-mail: OliveirasReservas@gmail.com</p>
                    </div>
                    <div className="footerSocialMedias">
                        <p>Siga-nos nas redes sociais:</p>
                        <img src={Instagram} alt="Instagram" className="footerSM"/>
                        <img src={Facebook} alt="Facebook" className="footerSM"/>
                    </div>
            </div>
        </>
    )
}

export default Footer