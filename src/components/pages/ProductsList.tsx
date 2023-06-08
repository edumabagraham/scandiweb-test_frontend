import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Product from "../Product";
import { deleting } from "../../features/deleteSlice";

export type ProductProps = {
  sku: string;
  name: string;
  price: string;
  weight?: number;
  size?: number;
  height?: number;
  width?: number;
  length?: number;
};
function ProductsList() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { selectedSkus, deleting: _deleting } = useAppSelector(
    (state) => state.delete
  );
  const dispatch = useAppDispatch();

  const fetchProducts = () => {
    axios
      .get("http://localhost/scandiweb_test/api/readproducts.php")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    _deleting &&
      setProducts((products) =>
        products.filter((p) => !selectedSkus.includes(p.sku))
      );
    dispatch(deleting({ deleting: false }));
  }, [_deleting, selectedSkus, dispatch]);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!loading) {
    if (products.length === 0) {
      return <div>No products yet</div>;
    } else {
      return (
        <div className="products-list">
          {products.map((product) => (
            <Product
              key={product.sku}
              sku={product.sku}
              name={product.name}
              price={product.price}
              weight={product.weight}
              size={product.size}
              height={product.height}
              width={product.width}
              length={product.length}
            />
          ))}
        </div>
      );
    }
  } else {
    return <Spinner />;
  }
}

export default ProductsList;
