import "./footer.css"
import Instagram from "../../images/instagram.svg"
import Facebook from "../../images/facebook.svg"

const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className="footerContent">
                    <div className="footerTexts">
                        <p>Fale Conosco | Política de Privacidade | Termos de Serviço</p>
                        <p>Copyright © 2023 Oliveiras Reservas. Todos os direitos reservados.</p>
                        <p>Endereço: Rua ABC, s/n, Babilonia, Rio de Janeiro, Brasil</p>
                        <p>Telefone: 00 9 0000-0000</p>
                        <p>E-mail: oliveirasreservas@oliveirasreservas.com</p>
                    </div>
                    <div className="footerSocialMedias">
                        <p>Siga-nos nas redes sociais:</p>
                        <img src={Instagram} alt="Instagram" className="footerSM"/>
                        <img src={Facebook} alt="Facebook" className="footerSM"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer