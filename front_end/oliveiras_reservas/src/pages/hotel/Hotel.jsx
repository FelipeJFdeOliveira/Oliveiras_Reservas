import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import FrontImg from "../../components/front_img/Front_Img"
import Front from "../../images/front-hotel.jpg"
import Filter from "../../components/filter/Filter.jsx"
import "@fontsource/montez";
import Window from "../../components/window/Window.jsx"
import RJ from "../../images/Rio_de_janeiro.jpg"
import SP from "../../images/Sao_paulo.jpg"
import MG from "../../images/MG.jpg"
import Porto from "../../images/Porto.jpg"
import Footer from "../../components/footer/Footer.jsx"
import useFetch from "../../hooks/useFetch";
import "@fontsource/montez";

const Hotel = () => {

    const { data, loading } = useFetch("/hotels/countByCity?cities=Rio de Janeiro,São Paulo,Belo Horizonte,Porto Alegre")
    
    return (
        <>
            <div className="componentsHotel">
                {loading ? ("Carregando...") : ( <><div className="hotelNavbar">
                    <Navbar page={"Hotels"} />
                </div>
                <FrontImg text={"Venha conhecer nossos Hotéis!"} img={Front} />
                <div className="hotelFilter">
                    <Filter />
                </div>
                <div className="hotelPlacesTitle">
                    <h1 className="hotelAlgunsLocais">Alguns dos nossos locais</h1>
                    <Window city={"Rio de Janeiro"} qtd={`${data[0]} hotéis`} image={RJ} text={"O Rio de Janeiro é uma das cidades mais bonitas e famosas do mundo. Com praias de tirar o fôlego, paisagens deslumbrantes e uma vida cultural intensa, o Rio de Janeiro é o destino ideal para quem busca sol, mar e diversão. Ao reservar um hotel na cidade maravilhosa, o viajante terá acesso a atrações turísticas famosas, como o Cristo Redentor, o Pão de Açúcar e as praias de Copacabana e Ipanema. Além disso, a cidade oferece uma gastronomia diversificada e uma vida noturna agitada. Com opções de hospedagem para todos os gostos e bolsos, o Rio de Janeiro é uma cidade imperdível para quem quer conhecer o melhor do Brasil."} />
                    <Window city={"São Paulo"} qtd={`${data[1]} hotéis`} image={SP} text={"São Paulo é uma cidade vibrante e cheia de possibilidades. Além de ser o centro financeiro e cultural do Brasil, a cidade oferece diversas opções de lazer, gastronomia e compras. Ao reservar um hotel em São Paulo, o viajante terá acesso a uma grande variedade de atrações, como museus, parques e teatros, além de uma vida noturna agitada. Com opções de hospedagem para todos os gostos e bolsos, São Paulo é uma cidade que vale a pena ser explorada."} />
                    <Window city={"Belo Horizonte"} qtd={`${data[2]} hotéis`} image={MG} text={"Belo Horizonte é uma cidade vibrante e acolhedora, com muitas opções de lazer, cultura e gastronomia. Ao reservar um hotel em Belo Horizonte, o viajante terá a oportunidade de conhecer o patrimônio histórico da cidade, como a Praça da Liberdade, o Conjunto Arquitetônico da Pampulha e o Mercado Central, além de desfrutar da animada vida noturna da capital mineira. A cidade é conhecida também pela deliciosa gastronomia, com pratos típicos como o pão de queijo, o feijão tropeiro e o doce de leite."} />
                    <Window city={"Porto Alegre"} qtd={`${data[3]} hotéis`} image={Porto} text={"Porto Alegre é uma cidade cheia de história e cultura, com muitas opções de lazer e entretenimento. Ao reservar um hotel em Porto Alegre, o viajante poderá conhecer as atrações turísticas da cidade, como o Mercado Público, o Parque da Redenção e o Centro Histórico, além de experimentar a deliciosa gastronomia local, com pratos como o churrasco e o arroz de carreteiro. A cidade também oferece uma vida noturna agitada, com bares e baladas para todos os gostos. Com opções de hospedagem para todos os bolsos, Porto Alegre é uma cidade que une tradição e modernidade, e é ideal tanto para quem viaja a negócios quanto para quem busca lazer e cultura."} />
                    <Footer />
                </div> </>)}
            </div>
        </>
    )
}

export default Hotel