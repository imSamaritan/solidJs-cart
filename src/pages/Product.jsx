import { createSignal, onMount, Show } from 'solid-js'
import { useParams } from '@solidjs/router'
import ProductsModel from '../js/ProductsModel'

function Product() {
  const { id } = useParams()
  const [product, setProduct] = createSignal({})
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
  return (
    <>
      <Show when={isLoading()}>
        <div class="loader"></div>
      </Show>

      <Show when={product()}>{console.log(product())}</Show>
    </>
  )
}

export default Product
