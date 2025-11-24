import { createSignal, onMount, onCleanup, Show } from 'solid-js'
import { useParams } from '@solidjs/router'
import ProductsModel from '../js/ProductsModel'
import Card from './shared/Card'
import ProductList from './shared/ProductList'

function Product() {
  const { id } = useParams()
  const [product, setProduct] = createSignal(null)
  const [isLoading, setIsLoading] = createSignal(true)

  onMount(async () => {
    try {
      const product = await ProductsModel.find(id)
      setProduct(product)
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  })
  
  onCleanup(() => {
    setProduct(null)
    setIsLoading(false)
  })
  
  return (
    <>
      <Show when={isLoading()}>
        <div class="loader"></div>
      </Show>

      <Show when={product() != null}>
        <div class="mt-5">
          <ProductList product={product()}/>
        </div>
      </Show>
    </>
  )
}

export default Product
