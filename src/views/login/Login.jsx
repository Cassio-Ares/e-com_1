import './Login.scss'
import Header from '../../assets/Header';
import Button from '../../assets/Button';


const Login = () => {
  return (
    <>
      <Header/>
      <main className="login_main">
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h3>Você pode entrar com o seu CPF</h3>

        <form className="login_form">
          <label htmlFor="">Digite se Nome ou E-mail cadastrado</label>
          <input
            type="text"
            name="name ou e-mail"
            placeholder="Nome ou E-mail"
          />
          <label htmlFor="">Digite sua senha</label>
          <input type="password" name="senha" placeholder="***************" />
          <Button text='Entrar' customClass= 'btn_login' />
        </form>
      </main>
    </>
  );
};

export default Login;
