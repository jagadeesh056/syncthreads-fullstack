import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

const MapView = () => {
    return (
        <div className="map-container">
            <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100vh' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </div>
    );
};

export default MapView;
