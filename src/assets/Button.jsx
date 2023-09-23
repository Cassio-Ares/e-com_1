import "./Button.scss";

const Button = ({ customClass, text }) => {
  return (
    <div>
      <button className={`btn ${customClass}`}>{text}</button>
    </div>
  );
};

export default Button;
