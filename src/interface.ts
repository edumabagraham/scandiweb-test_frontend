export interface IChildren {
    children?: React.ReactNode
  }

export interface IFormValues {
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

export interface IProducts{
    sku: string;
    name: string;
    price: number;
    weight?: number;
    size?: number;
    height?: number;
    width?: number;
    length?: number;
  }

  export interface IProductsContext {
    products: IProducts[]
    msg:string
    loading: boolean
    skus: string[]
    setSkus: React.Dispatch<React.SetStateAction<string[] | []>>
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>
    fetchProducts: () => void

  }