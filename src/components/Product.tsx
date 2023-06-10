import { useContext } from "react";
import { IProducts } from "../interface";
import Card from "./layout/Card";
import { ProductsContext } from "../context/ProductsContext";

function Product({
  sku,
  name,
  price,
  weight,
  size,
  height,
  width,
  length,
}: IProducts) {
  const { skus, setSkus } = useContext(ProductsContext);
  // const onChange = (sku:string) => {
  //   const skus = allSkus.find(s => s === sku)

  //   if (skus) {
  //     dispatch(addSku({selectedSkus: allSkus.filter(s => s !== sku )}))
  //   }else{
  //     dispatch(addSku({selectedSkus:[...allSkus,sku]}))
  //   }
  // }

  const onChange = (product_sku: string) => {
    const all_skus = skus.find(s => s === sku);

    if (all_skus) {
      setSkus(prevSkus => {
        return prevSkus.filter(s => s !== product_sku);
      });
    }else{
      setSkus(prevSkus => {
        return [...prevSkus,product_sku]
      }) 
    }
  };

  return (
    <div>
      <Card>
        <div className="product-info">
          <div>
            <input
              type="checkbox"
              className="delete-checkbox"
              id="checkItem"
              value={sku}
              onChange={() => onChange(sku)}
            />
          </div>
          <div className="product-description">
            <p>{sku}</p>
            <p>{name}</p>
            <p>{price} $</p>
            {weight && <p>Weight: {weight} KG</p>}
            {size && <p>Size: {size}MB</p>}
            {height && (
              <p>
                Dimensions: {height}x{width}x{length}
              </p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Product;
