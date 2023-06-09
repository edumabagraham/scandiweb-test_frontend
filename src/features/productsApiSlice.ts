import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductProps } from '../components/pages/ProductsList'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost/scandiweb_test/api',
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query<ProductProps[], number | void>({
                query: () => '/readproducts.php'
            })
        }
    }
})

export const {useFetchProductsQuery} = apiSlice

 