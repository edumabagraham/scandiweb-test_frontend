import { useEffect, useContext } from "react";
import Product from "../layout/Product";
import { ProductsContext } from "../../context/ProductsContext";

function ProductsList() {
  const { fetchProducts, products, msg } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, []);

    return (
      <>
        <div className="products-list">
          {products.length > 0 &&
            products.map((product) => (
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
        <h1 className="no_products">{msg}</h1>
      </>
    );
}

export default ProductsList;
