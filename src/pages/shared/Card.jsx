import { Show } from 'solid-js'
import { A } from '@solidjs/router'

function Card(props) {
  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Add to cart logic here
    console.log('Added to cart:', props.product.title)
  }

  return (
    <Show when={props.product} fallback={<p>Loading...</p>}>
      {console.log(props.product)}
      <div class="card mb-3 h-fluid">
        <A href={`/products/${props.product.id}`} style="text-decoration:none">
          <div class="text-center">
            <img
              src={props.product.thumbnail}
              alt={props.product.title}
              class="card-img-top img-fluid w-75"
            />
          </div>
          <div class="card-body">
            <div class="card-title text-center">
              <span class="fw-semibold mb-2 text-center lead">
                {props.product.title}
              </span>
            </div>

            <div className="card-text mb-3">
              <p class="mb-2 lead fs-6">
                {props.product.description.slice(0, 100)}...
              </p>
              <p class="mb-3">
                <span class="lead">ZAR</span>
                <span class="display-6">
                  {(props.product.price * 1.9).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        </A>

        {/* Add to Cart Button */}
        <div class="card-footer bg-transparent border-0 p-3 pt-0">
          <button
            class="btn glass-add-to-cart-btn w-100"
            onClick={handleAddToCart}
            aria-label={`Add ${props.product.title} to cart`}
          >
            <i class="bi bi-cart-plus me-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </Show>
  )
}

export default Card
