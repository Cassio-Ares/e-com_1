import './Details.jsx'
import Header from '../../assets/Header.jsx'
import Nav from '../components_home/Nav.jsx'
import Carrinho from '../components_home/Carrinho.jsx'
import Search from '../components_home/Search.jsx'
import Button from '../../assets/Button.jsx'


const Details = () => {
  return (
    <div className="home">
      <Header custonClass="header_home">
        <Nav />
        <Carrinho />
      </Header>
      <Search />
   <div>
    <div>
      <img src="" alt=""/>
      <h3></h3>
      <p></p>
    </div>

    <div>
      <h2></h2>
      <p><strong></strong></p>

      <p></p>

      <p></p>

    <Button/>
    </div>
   </div>
  </div>
  )
}

export default Details