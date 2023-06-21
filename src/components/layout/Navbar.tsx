import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ProductsContext } from "../../context/ProductsContext";
import axios from "axios";

function Navbar() {
  const {skus, fetchProducts} = useContext(ProductsContext)

  const handleDelete = () => {
    axios.post(
      "https://gloria-graham.000webhostapp.com/api/deleteproduct.php", skus
    ).then(() => {
      fetchProducts();
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
          onClick={handleDelete}
        >
          Mass delete
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
