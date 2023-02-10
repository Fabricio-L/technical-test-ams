async function apiGetProducts(id) {
  try {
    let response = await fetch(
      `https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product/${id}`
    )
    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export default apiGetProducts
