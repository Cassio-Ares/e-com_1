import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ customClass, text }) => {
  return (
    <div>
      <Link to={"home"}>
        <button className={`btn ${customClass}`}>{text}</button>
      </Link>
    </div>
  );
};

export default Button;
