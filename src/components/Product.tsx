import { addSku } from "../features/deleteSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ProductProps } from "./pages/ProductsList";
import Card from "./layout/Card";

function Product({
  sku,
  name,
  price,
  weight,
  size,
  height,
  width,
  length
}: ProductProps) {

  const dispatch = useAppDispatch()
  const allSkus = useAppSelector(state=>state.delete.selectedSkus)

  const onChange = (sku:string) => {
    const skus = allSkus.find(s => s === sku) 
    
    if (skus) {
      dispatch(addSku({selectedSkus: allSkus.filter(s => s !== sku )}))
    }else{
      dispatch(addSku({selectedSkus:[...allSkus,sku]}))
    }
  }

  return (
    <div>
      <Card>
        <div className="product-info">
          <div>
            <input type="checkbox" className="delete-checkbox" id="checkItem" value={sku} onChange={() => onChange (sku)} />
          </div>
          <div className="product-description">
            <p>{sku}</p>
            <p>{name}</p>
            <p>{price} $</p>
            {weight && 
                <p>Weight: {weight} KG</p>
            }
            {size && 
                <p>Size: {size}MB</p>
            }
            {height && 
                <p>Dimensions: {height}x{width}x{length}</p>
            }
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Product;
