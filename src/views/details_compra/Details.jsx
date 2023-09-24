import "./Details.scss";
import Header from "../../assets/Header.jsx";
import Nav from "../components_home/Nav.jsx";
import Carrinho from "../components_home/Carrinho.jsx";
import Search from "../components_home/Search.jsx";
import DescriptionDetails from '../components_details_compra/DescriptionDetails';
import Button from "../../assets/Button.jsx";
import { useParams } from "react-router-dom";

const Details = ({ data }) => {


 const {ItemId} = useParams()
      
 const showItem = data.find((product)=> product.id == ItemId)

 //console.log(showItem)

  return (
    <>
    <div className="home">
      <Header custonClass="header_home">
        <Nav />
        <Carrinho />
      </Header>
      <Search />
    </div>
    <main>
      <DescriptionDetails data = {showItem}/> 
    </main>
    </>
  );
};

export default Details;
