import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const selectedSku = ['']

  const deleteProducts = () => {
    axios.post(
      "http://localhost/scandiweb_test/api/deleteproduct.php", selectedSku
    ).then(response => {
      // console.log(response);
    })
    .catch(err => alert(err));
  };

  return (
    <nav>
      <Link to="/" className="nav__title">
        Product list
      </Link>
      <div className="nav__buttons">
        <Link to="/addproduct" className="nav__buttons-btn-ghost">
          Add
        </Link>
        <button
          className="nav__buttons-btn-ghost nav__button"
          id="delete-product-btn"
          onClick={deleteProducts}
        >
          Mass delete
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
