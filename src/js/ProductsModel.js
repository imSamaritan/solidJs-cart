const productsEndPoint = 'https://dummyjson.com/products'

export default {
  async all(limit = 0) {
    const productsResponse = await fetch(
      `${productsEndPoint}/?limit=${limit}&delay=1000`,
    )
    const products = await productsResponse.json()

    return products
  },

  async find(id) {
    const productResponse = await fetch(`${productsEndPoint}/${id}/?delay=1500`)
    const product = await productResponse.json()

    return product
  },
}
