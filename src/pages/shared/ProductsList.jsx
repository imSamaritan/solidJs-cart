import { createSignal, onMount, onCleanup } from 'solid-js'
import { Show, For } from 'solid-js'
import Card from './Card'
function ProductsList(props) {
  const [showPagination, setShowPagination] = createSignal(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    // Show pagination when user is within 300px of the bottom
    const nearBottom = scrollTop + windowHeight >= documentHeight - 300
    setShowPagination(nearBottom)
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll)
    // Check initial position
    handleScroll()
  })

  onCleanup(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <Show when={props.loading}>
        <div class="loader"></div>
      </Show>

      <div class="row">
        <Show when={props.products}>
          <For each={props.products.products}>
            {(product, i) => {
              return (
                <>
                  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <Card product={product} />
                  </div>
                </>
              )
            }}
          </For>
        </Show>
      </div>
      <div
        class={`d-flex justify-content-center mt-5 pagenation ${showPagination() ? 'show' : ''}`}
      >
        <div className="btn-group">
          <button
            class="btn btn-group-item btn-light"
            on:click={() => props.actionPagenate('left')}
          >
            {'<<'}
          </button>
          <button
            class="btn btn-group-item btn-light"
            on:click={() => props.actionPagenate('right')}
          >
            {'>>'}
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductsList
