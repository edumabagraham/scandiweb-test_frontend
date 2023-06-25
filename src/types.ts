export type IChildren = {
    children?: React.ReactNode
  }

export type IFormValues = {
  sku: string;
  name: string;
  price?: number;
  type: string;
  size?: number;
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
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
    loading: boolean
    skus: string[]
    setSkus: React.Dispatch<React.SetStateAction<string[] | []>>
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>
    fetchProducts: () => void
  }