import { Link } from "react-router-dom";
import Button from "./Button";
import "./CardProdutos.scss";

const CardProdutos = ({ data }) => {
  return (
    <div>
      <div className="cardProduct">
        <img src={data.imgPath} alt="modelos" />
        <h4>{data.title}</h4>
        <Link to={`/details/${data.id}`}>
          <Button text="Comprar Look" customClass="btn_cardProduct" />
        </Link>
      </div>
    </div>
  );
};

export default CardProdutos;
