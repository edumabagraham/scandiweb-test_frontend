import { useEffect, useState } from "react";
import Product from "../Product";

type ProductProps = {
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

  useEffect(() => {
    fetch("http://localhost/scandiweb_test/api/readproducts.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setProducts(data);
      });
  }, []);

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

export default ProductsList;
