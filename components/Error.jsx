import { useRouteError } from "react-router"
export default function Error() {
    const error = useRouteError();
      return (
    <h2>Someting went rong {error.status}</h2>
  )
}
