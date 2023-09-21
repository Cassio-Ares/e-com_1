import Button from "./Button";
import "./CardProdutos.scss";


const CardProdutos = ({data}) => {
  return (
    <div>
      <div className="cardProduct">
        <img src={data.imgPath} alt="modelos" />
        <h4>{data.title}</h4>
        <Button text="Comprar Look" customClass="btn_cardProduct" />
      </div>
    </div>
  );
};

export default CardProdutos;
