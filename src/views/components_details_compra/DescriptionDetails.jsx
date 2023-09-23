import './DescriptionDetails.scss'
import Button from '../../assets/Button';
import { Link } from "react-router-dom";

const DescriptionDetails = ({data}) => {
  console.log(data)
    
  return (
    <div className='descriptionDetails'>      
     <div className='details_left'>
      <div className='details_img'>
       <img src={data.imgPathDetail} alt="modelos" />
       <h3>{data.title}</h3>
      </div> 

      <div className='details_title'>
       <h2>Descrição</h2>
       <p>{data.title}</p> 

       <Link to={"/home"}>
       <Button text="Voltar para Home"/>
       
       </Link>
       </div>
     </div>
       
        <div className='details_right'>
         <h3>Informações Sobre o Produto</h3>

         <p><strong>{data.price}</strong></p>

         <p>
          Cor{" "}
          {data.colors.length == 1 

          }
          </p>

         <p>Tamanho</p>

         <Button text="Finalizar Compra"/>
        </div>
    </div>
  )
}

export default DescriptionDetails