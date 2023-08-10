import { useLocation, Navigate, Outlet } from 'react-router-dom';

const AuthGuard = ({ authRoles }) => {
  const user_role = localStorage.user_role;
  const bet_token = localStorage.bet_token;
  const location = useLocation();

  if (!bet_token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (authRoles.includes(user_role?.toLowerCase())) {
    return <Outlet />;
  }

  return <Navigate to="/unauthorized" state={{ from: location }} replace />;
};

export default AuthGuard;
