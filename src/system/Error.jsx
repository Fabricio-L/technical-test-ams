import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div>
      <h1>Oops!</h1>
      <p>{error.status}</p>
      <p>{error.statusText}</p>
      <p>{error.error.message}</p>
    </div>
  )
}

export default Error
