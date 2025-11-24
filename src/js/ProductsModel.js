const productsEndPoint = 'https://dummyjson.com/products'

export default {
  async all(limit = 0) {
    const productsResponse = await fetch(
      `${productsEndPoint}/?limit=${limit}`,
    )
    const products = await productsResponse.json()

    return products
  },

  async find(id) {
    const productResponse = await fetch(`${productsEndPoint}/${id}`)
    const product = await productResponse.json()

    return product
  },
}
