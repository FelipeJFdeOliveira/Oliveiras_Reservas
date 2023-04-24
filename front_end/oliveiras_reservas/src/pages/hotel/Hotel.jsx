import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import FrontImg from "../../components/front_img/Front_Img"
import Front from "../../images/front-hotel.jpg"
import Filter from "../../components/filter/Filter.jsx"
import "@fontsource/montez";
import Window from "../../components/window/Window.jsx"
import RJ from "../../images/Rio_de_janeiro.jpg"
import SP from "../../images/Sao_paulo.jpg"
import Footer from "../../components/footer/Footer.jsx"

const Hotel = () => {
    return (
        <>
            <div className="componentsHotel">
                <div className="hotelNavbar">
                    <Navbar page={"Hotels"} />
                </div>
                <FrontImg text={"Venha conhecer nossos Hotéis!"} img={Front} />
                <div className="hotelFilter">
                    <Filter />
                </div>
                <div className="hotelPlacesTitle">
                    <h1>Alguns dos nossos locais</h1>
                    <Window city={"Rio de Janeiro"} qtd={"4 hotéis"} image={RJ} text={"O Rio de Janeiro é uma das cidades mais bonitas e famosas do mundo. Com praias de tirar o fôlego, paisagens deslumbrantes e uma vida cultural intensa, o Rio de Janeiro é o destino ideal para quem busca sol, mar e diversão. Ao reservar um hotel na cidade maravilhosa, o viajante terá acesso a atrações turísticas famosas, como o Cristo Redentor, o Pão de Açúcar e as praias de Copacabana e Ipanema. Além disso, a cidade oferece uma gastronomia diversificada e uma vida noturna agitada. Com opções de hospedagem para todos os gostos e bolsos, o Rio de Janeiro é uma cidade imperdível para quem quer conhecer o melhor do Brasil."} />
                    <Window city={"São Paulo"} qtd={"5 hotéis"} image={SP} text={"São Paulo é uma cidade vibrante e cheia de possibilidades. Além de ser o centro financeiro e cultural do Brasil, a cidade oferece diversas opções de lazer, gastronomia e compras. Ao reservar um hotel em São Paulo, o viajante terá acesso a uma grande variedade de atrações, como museus, parques e teatros, além de uma vida noturna agitada. Com opções de hospedagem para todos os gostos e bolsos, São Paulo é uma cidade que vale a pena ser explorada."} />
                    <Window city={"São Paulo"} qtd={"5 hotéis"} image={SP} text={"São Paulo é uma cidade vibrante e cheia de possibilidades. Além de ser o centro financeiro e cultural do Brasil, a cidade oferece diversas opções de lazer, gastronomia e compras. Ao reservar um hotel em São Paulo, o viajante terá acesso a uma grande variedade de atrações, como museus, parques e teatros, além de uma vida noturna agitada. Com opções de hospedagem para todos os gostos e bolsos, São Paulo é uma cidade que vale a pena ser explorada."} />
                    <Window city={"São Paulo"} qtd={"5 hotéis"} image={SP} text={"São Paulo é uma cidade vibrante e cheia de possibilidades. Além de ser o centro financeiro e cultural do Brasil, a cidade oferece diversas opções de lazer, gastronomia e compras. Ao reservar um hotel em São Paulo, o viajante terá acesso a uma grande variedade de atrações, como museus, parques e teatros, além de uma vida noturna agitada. Com opções de hospedagem para todos os gostos e bolsos, São Paulo é uma cidade que vale a pena ser explorada."} />
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default Hotel