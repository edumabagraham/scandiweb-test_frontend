import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import axios from "axios";
import { deleting } from "../../features/deleteSlice";

function Navbar() {
  const selectedSku = useAppSelector((state) => state.delete.selectedSkus);
  const dispatch = useAppDispatch()

  const deleteProducts = () => {
    axios.post(
      "http://localhost/scandiweb_test/api/deleteproduct.php", selectedSku
    ).then(response => {
      console.log(response);
      dispatch(deleting({deleting:true}))
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
