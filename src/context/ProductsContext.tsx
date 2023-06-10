import { createContext, useState } from "react";
import { IChildren, IProducts, IProductsContext } from "../interface";
import axios from "axios";

const defaultValues = {
  products: [],
  loading: true,
  skus: [],
  fetchProducts: () => undefined,
  addProduct: () => undefined,
  deleteProduct: () => undefined,
  setLoading: () => undefined
}

export const ProductsContext = createContext<IProductsContext>(defaultValues);

export const ProductsProvider = ({ children }: IChildren) => {
   const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <ProductsContext.Provider 
      value={{
        products,
        loading,
        fetchProducts
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
