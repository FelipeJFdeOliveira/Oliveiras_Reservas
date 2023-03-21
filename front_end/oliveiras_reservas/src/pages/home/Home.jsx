import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import FrontImg from "../../components/front_img/Front_Img"
import Front from "../../images/front-img-home.jpg"
import Back from "../../images/backImage.jpg"
import QuemSomos from "../../components/quemSomos/QuemSomos"
import Products from "../../components/products/Products"
import productHotel from "../../images/home-hotel.jpg"
import productHouse from "../../images/home-house.jpg"
import Places from "../../components/places/Places"
import Footer from "../../components/footer/Footer"


const Home = () => {

    return (
        <>
            <div className="componentsHome">
                <div className="homeNavbar">
                    <Navbar page={"Home"} />
                </div>
                <FrontImg text={'Venha conhecer a Oliveiras Reservas!'} img={Front} />
                <div className="homeQuemSomos">
                    <QuemSomos />
                </div>
                <div className="homeProductHotel">
                    <Products img={productHotel} produto={'Hotéis'} text={'Um charmoso hotel boutique localizado na costa de Porto Alegre. O hotel oferece uma experiência de hospedagem única, combinando a beleza natural da região com instalações modernas e confortáveis. As acomodações são espaçosas e equipadas com ar-condicionado, TV de tela plana e banheiro privativo. A propriedade dispõe ainda de uma bela piscina ao ar livre, um spa e um restaurante, que serve pratos locais e internacionais preparados com ingredientes frescos e de alta qualidade. A localização privilegiada permite fácil acesso às praias e atrações turísticas da região, como igrejas e mercados locais. Reserve agora sua estadia neste paraíso e desfrute de momentos únicos em um ambiente excepcional.'} />
                </div>
                <div className="homeProductHouse">
                    <Products img={productHouse} produto={'Casas'} text={'A reserva de casas pode ser feita facilmente em nossa plataforma de reserva de casas, seja pelo computador ou dispositivo móvel. Para começar, o cliente deve acessar o site, selecionar o destino, as datas de chegada e partida e o número de hóspedes. Em seguida, a plataforma exibirá uma lista de casas disponíveis para as datas selecionadas, incluindo casas em destinos populares em todo o Brasil. Ao selecionar a casa desejada, é possível verificar a disponibilidade, preços e condições de reserva. O cliente pode selecionar as comodidades desejadas, incluindo cozinha, estacionamento, piscina, entre outras. O pagamento pode ser realizado de forma segura e confiável em nossa plataforma. '} />
                </div>
                <div className="homePlaces">
                    <Places />
                </div>
                <div className="footerHomePage">
                    <Footer />
                </div>
                <div className="homeBackGround">
                    <img src={Back} alt="Arquitetura" className="homeBackImage" />
                </div>
            </div>
        </>
    )
}

export default Home