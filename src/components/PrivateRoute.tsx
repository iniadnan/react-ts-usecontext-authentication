import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { PrivateRouteProps } from '../types';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
    const { isAuthenticated } = useAuth();

    return (
        <Route
            {...rest}
            element={isAuthenticated ? element : <Navigate to="/login" replace />}
        />
    );
};

export default PrivateRoute;