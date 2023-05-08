import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ element, allowed, fallbackPath }) => {
  return allowed ? element : <Navigate to={fallbackPath} replace />
}

export default ProtectedRoute
