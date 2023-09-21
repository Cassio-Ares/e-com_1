import "./Search.scss";
import search from "../../img/search.svg";
import User from "../../img/user.svg";
import Curtida from "../../img/curtida.svg";

const Search = () => {
  return (
    <div className="search">
      <form className="search_form">
        <button>
          <img src={search} alt="search" />
        </button>
        <input type="text" placeholder="O que você está procurando?" />
      </form>

      <div className="user">
        <img src={User} alt="User" />
        <img src={Curtida} alt="Coração" />
      </div>
    </div>
  );
};

export default Search;
