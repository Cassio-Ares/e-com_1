import "./DescriptionDetails.scss";
import Button from "../../assets/Button";
import { Link } from "react-router-dom";

const DescriptionDetails = ({ data }) => {
  console.log(data);

  return (
    <div className="descriptionDetails">
      <div className="details_left">
        <div className="details_img">
          <img src={data.imgPathDetail} alt="modelos" />
          <h3>{data.title}</h3>
        </div>

        <div className="details_title">
          <h2>Descrição</h2>
          <p>{data.title}</p>

          <Link to={"/home"}>
            <Button text="Voltar para Home" />
          </Link>
        </div>
      </div>

      <div className="details_right">
        <h3>Informações Sobre o Produto</h3>

        <p>
          <strong>{data.price}</strong>
        </p>

        <p>
          Cor:{"  "}
          {data.colors.length === 1
            ? data.colors.map((color, index) => (
                <span key={index}>{color}</span>
              ))
            : data.colors.map((color, index) =>
                index + 1 === data.colors.length ? (
                  <span key={index}>{color}</span>
                ) : (
                  <span key={index}>{color}, </span>
                )
              )}
        </p>
          
        <div style={{display: 'flex'}}>
          {data.colors.map((color, index) => (
            <div key={index}
              style={{
                width: '2rem',
                height: '2rem',
                marginLeft: '.5rem',
                borderRadius: '10px',
                backgroundColor: color,
                border: '1px solid #7a7a7a',
              }}
            ></div>
          ))}
        </div>

        <p>Tamanho</p>
        <div>
        {data.sizes.map((size, index)=>(
           <span key={index}
           style={{
             borderRadius: '10px',
             border: '1px solid #7a7a7a',
             padding:'.5rem',
             textTransform: 'uppercase',
             textAlign: "center",
             marginLeft: '.5rem',
           }}
         >
           {size}
         </span>
        ))}
      </div>
        <Button text="Finalizar Compra" />
      </div>
    </div>
  );
};

export default DescriptionDetails;
