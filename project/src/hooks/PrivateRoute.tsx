import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from '../types';
import { AppRoute } from '../use/routes';

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const hasAcces = false;

  return hasAcces ? children : <Navigate to={AppRoute.SingIn} />;
}

export default PrivateRoute;
