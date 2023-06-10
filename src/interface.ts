export interface IChildren {
    children?: React.ReactNode
  }

export interface IFormValues {
  sku: string;
  name: string;
  price: string;
  type: string;
  size?: string;
  weight?: string;
  height?: string;
  width?: string;
  length?: string;
}

export interface IProducts{
    sku: string;
    name: string;
    price: string;
    weight?: number;
    size?: number;
    height?: number;
    width?: number;
    length?: number;
  }

  export interface IProductsContext {
    products: IProducts[]
    loading: boolean
    skus: string[]
    setSkus: React.Dispatch<React.SetStateAction<string[] | []>>
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>
    fetchProducts: () => void

  }