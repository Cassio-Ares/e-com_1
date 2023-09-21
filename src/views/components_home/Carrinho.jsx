import "./Carrinho.scss";
import carrinho from "../../img/carrinho.svg";

const Carrinho = () => {
  return (
    <div className='carrinho'>
      <p>
        Meu Carrinho
      </p>
      <img src={carrinho} alt="Carrinho de Compras" />
    </div>
  );
};

export default Carrinho;
