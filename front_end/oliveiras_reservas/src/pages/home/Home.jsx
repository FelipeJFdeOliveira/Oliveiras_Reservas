import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import FrontImg from "../../components/front_img/Front_Img"
import Front from "../../images/front-img-home.jpg"
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
                <div className="homeContainer">
                        <QuemSomos />
                        <Products img={productHotel} produto={'Hotéis'} text={'Um charmoso hotel boutique localizado na costa de Porto Alegre. O hotel oferece uma experiência de hospedagem única, combinando a beleza natural da região com instalações modernas e confortáveis. As acomodações são espaçosas e equipadas com ar-condicionado, TV de tela plana e banheiro privativo. A propriedade dispõe ainda de uma bela piscina ao ar livre, um spa e um restaurante, que serve pratos locais e internacionais preparados com ingredientes frescos e de alta qualidade. A localização privilegiada permite fácil acesso às praias e atrações turísticas da região, como igrejas e mercados locais. Reserve agora sua estadia neste paraíso e desfrute de momentos únicos em um ambiente excepcional.'} />
                        <Products img={productHouse} produto={'Pensou em férias?'} text={'Você está planejando as suas férias e quer encontrar o lugar perfeito para se hospedar? Imagine ficar em um quarto de hotel aconchegante e confortável, com uma vista incrível para o mar ou para a cidade. Você pode relaxar e curtir cada momento da sua viagem sem se preocupar com nada. Pesquise agora as opções disponíveis em nosso site, escolha o quarto ideal para você e faça a sua reserva hoje mesmo. Não perca a oportunidade de tornar suas férias inesquecíveis! "Não perca tempo procurando o lugar perfeito para ficar nas suas férias. Com nosso site, você pode encontrar o quarto de hotel ideal em apenas alguns cliques! Suas férias estão esperando por você, não espere mais! '} />
                        <Places />
                        <Footer />
                </div>
            </div>
        </>
    )
}

export default Home