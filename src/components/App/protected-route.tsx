import { Navigate, Outlet } from 'react-router';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  redirectPath?: string;
};
const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = '/',
}: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
