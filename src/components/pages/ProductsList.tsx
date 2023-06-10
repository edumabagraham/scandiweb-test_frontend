import { useEffect,useContext } from "react";
import Spinner from "../layout/Spinner";
import Product from "../layout/Product";
import {ProductsContext} from "../../context/ProductsContext";


function ProductsList() {
  const {fetchProducts, products, loading} = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!loading) {
      return (
        <div className="products-list">
          {products?.map((product) => (
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
  } else {
    return <Spinner />;
  }
}

export default ProductsList;
