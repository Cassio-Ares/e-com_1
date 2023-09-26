import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="nav">
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
    </>
  );
};

export default Nav;
