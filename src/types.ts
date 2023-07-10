export type IChildren = {
    children?: React.ReactNode
  }

export type IFormValues = {
  sku: string;
  name: string;
  price: number | undefined;
  type: string;
  size?: number | undefined;
  weight?: number | undefined;
  height?: number | undefined;
  width?: number | undefined;
  length?: number | undefined;
}

export type IProduct = {
    sku: string;
    name: string;
    price: number;
    weight?: number;
    size?: number;
    height?: number;
    width?: number;
    length?: number;
  }

  export type IProductsContext =  {
    products: IProduct[]
    msg:string
    skus: string[]
    setSkus: React.Dispatch<React.SetStateAction<string[] | []>>
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>
    fetchProducts: () => void
  }