import { createSignal, onMount, Switch, Match } from 'solid-js'
import { useLocation } from '@solidjs/router'
import ProductsModel from './js/ProductsModel'
import ProductsList from './pages/shared/ProductsList'
import Navigation from './components/Navigation'

function App(props) {
  const [products, setProducts] = createSignal({})
  const [pagenationCount, setPagenationCount] = createSignal(10)
  const [isLoading, setIsLoading] = createSignal(true)

  const location = useLocation()
  const [currentPath, setCurrentPath] = createSignal('/')

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
    setIsLoading(true)
    if (side === 'left' && pagenationCount() <= 10) {
      setIsLoading(false)
      return
    }
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

  const navigate = (to) => {
    setCurrentPath(to)
    console.log(to)
  }

  return (
    <>
      <Navigation navigate={navigate} />
      <div class="container py-3">
        <Switch>
          <Match when={currentPath() === '/'}>
            <ProductsList
              products={products()}
              loading={isLoading()}
              actionPagenation={{ pagenate }}
              navigate={navigate}
            />
          </Match>
          <Match when={currentPath() != '/'}>{props.children}</Match>
        </Switch>
      </div>
    </>
  )
}

export default App
