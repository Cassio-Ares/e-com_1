import "./home.scss";
import Header from "../../assets/Header";
import Nav from "../components_home/Nav";
import Carrinho from "../components_home/Carrinho";
import Search from "../components_home/Search";
import CardProdutos from "../../assets/CardProdutos";

const Home = ({ data }) => {
  return (
    <div className="home">
      <Header custonClass="header_home">
        <Nav />
        <Carrinho />
      </Header>
      <Search />
      <div className="Section_cards">
        {data.map((product) => (
          <CardProdutos key={product.id} data={product} />
        ))}
        {/* <CardProdutos data={data} /> */}
      </div>
    </div>
  );
};

export default Home;
