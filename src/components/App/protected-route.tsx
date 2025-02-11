import { Navigate } from 'react-router';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  redirectPath?: string;
  children: React.ReactNode;
};
const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = '/',
  children,
}: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
