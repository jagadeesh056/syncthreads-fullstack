import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AuthContext);

    if (!token) {
        // Redirect to login if no token
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;