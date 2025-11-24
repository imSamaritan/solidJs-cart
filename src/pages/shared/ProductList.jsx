import { Show } from 'solid-js'

function ProductList(props) {
  return (
    <>
      {console.log(props.product)}
      <div class="container mt-3">
        <div class="row gap-0">
          <div class="col-sm-12 col-md-5 col-lg-5 text-center">
            <img
              src={props.product.thumbnail}
              alt={props.product.title}
              class="img-fluid"
            />
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <h1 class="display-5 text-primary fw-bold">
              {props.product.title}
            </h1>
            <Show when={props.product.brand}>
              <p class="lead fs-6">
                Brand:{' '}
                <span class=" text-primary">
                  {props.product.brand || 'None'}
                </span>
              </p>
            </Show>
            <p class="lead fs-6">
              Availability status:{' '}
              <span class="fw-semibold text-success">
                {props.product.availabilityStatus}
              </span>
            </p>
            <p class="lead">{props.product.description}</p>
            <p class="mb-3">
              <span class="lead">ZAR</span>
              <span class="display-5 fw-bold text-success">
                {(props.product.price * 1.9).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
        <div class="bg-transparent border-0 p-3 pt-0">
          <button
            class="btn glass-add-to-cart-btn w-100"
            aria-label="Add Eyeshadow Palette with Mirror to cart"
          >
            <i class="bi bi-cart-plus me-2"></i>Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductList
