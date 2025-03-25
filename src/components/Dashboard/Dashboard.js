import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const { token, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!token) {
        return <h1>User not logged in</h1>;
    }

    const handleLogout = () => {
        logout(); // Clear the token
        navigate('/'); // Redirect to login page
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <button 
                    onClick={handleLogout} 
                    className="logout-button"
                >
                    Logout
                </button>
            </div>
            <div className="card-container">
                <div className="card" onClick={() => navigate('/map')}>
                    <h2 className="card-title">Map View</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;