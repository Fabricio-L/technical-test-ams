async function apiPostProduct(body) {
  try {
    let response = await fetch(
      'https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/cart',
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export default apiPostProduct
