async function apiPostProduct(body) {
  try {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/cart`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export default apiPostProduct
