import './Header.scss'
import Logo from "../img/logo.svg"

const Header = ({children, custonClass}) => {
  return (
    <div className={`header_login ${custonClass}`}>
        <img src={Logo} alt=""/>
        {children} 

    </div>
  )
}

export default Header