import { Link } from "react-router-dom";

function AddProductNavbar() {
  return (
    <nav>
      <h1 className="nav__title">Product add</h1>
      <div className="nav__buttons">
        <button form="product_form" type="submit" className="nav__buttons-btn-ghost nav__button">
          Save
        </button>
        <Link to="/" className="nav__buttons-btn-ghost">
          Cancel
        </Link>
      </div>
    </nav>
  );
}

export default AddProductNavbar;
