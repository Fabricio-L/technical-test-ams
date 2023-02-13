async function apiGetProducts(id) {
  try {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`)
    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export default apiGetProducts
