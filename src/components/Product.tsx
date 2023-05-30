import Card from "./layout/Card";

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
  return (
    <div>
      <Card>
        <div className="product-info">
          <div>
            <input type="checkbox" className="delete-checkbox" />
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
