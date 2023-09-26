import "./Main_pay.scss";

const Main_pay = ({data}) => {
  
  return (
    <div className="pay">
      <div className="payDado">
        <form>
          <div className="payDado_form">
            <h2>Nome</h2>
            <input type="text" placeholder="Nome completo" />

            <h2>Endereço de entrega</h2>
            <input type="text" placeholder="Endereço de entrega" />
          </div>

           <div className="payDados_checkbox">
          <h2>Forma de Pagamento:</h2>
         
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Pix</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Boleto</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Cartão de Crédito</label>
            </div>
          </div>
        </form>
      </div>

      <div className="pedido">
        <div className="pedido_details">
          <h2>Resumo do Pedido:</h2>
          <p>
            <span className="span">Produtos ({data.id}):</span> R${data.price}
          </p>
          <p>
            <span className="span2">Total:</span> R${data.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main_pay;
