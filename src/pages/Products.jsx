import { createSignal, onMount } from 'solid-js'
import ProductsModel from '../js/ProductsModel'
import ProductsList from './shared/ProductsList'

function Products() {
  const [products, setProducts] = createSignal({})
  const [pagenationCount, setPagenationCount] = createSignal(10)
  const [isLoading, setIsLoading] = createSignal(true)

  onMount(async () => {
    try {
      const products = await ProductsModel.all(pagenationCount())
      setProducts(products)
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  })
  
  const pagenate = async (side) => {
    if (side === 'left' && pagenationCount() <= 10) return
    if (side === 'left') setPagenationCount((count) => count - 3)
    if (side === 'right') setPagenationCount((count) => count + 3)
    
    try {
      const products = await ProductsModel.all(pagenationCount())
      setProducts(products)
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div class="container py-3">
        <ProductsList products={products()} loading={isLoading()} actionPagenation={{pagenate}}/>
      </div>
    </>
  )
}

export default Products
