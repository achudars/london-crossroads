'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { elizabethLineStations } from '@/data/elizabeth-line-stations';
import { Station } from '@/types/elizabeth-line';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Elizabeth Line branded station icon
const createElizabethIcon = (isInterchange: boolean = false) => {
    return L.divIcon({
        className: 'elizabeth-station-marker',
        html: `
      <div style="
        width: ${isInterchange ? '16px' : '12px'};
        height: ${isInterchange ? '16px' : '12px'};
        background-color: #663399;
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ${isInterchange ? 'border-width: 3px;' : ''}
      "></div>
    `,
        iconSize: [isInterchange ? 16 : 12, isInterchange ? 16 : 12],
        iconAnchor: [isInterchange ? 8 : 6, isInterchange ? 8 : 6],
    });
};

// Component to fit bounds to all stations
const FitBounds: React.FC = () => {
    const map = useMap();

    useEffect(() => {
        const bounds = L.latLngBounds(
            elizabethLineStations.map(station => [station.lat, station.lng])
        );
        map.fitBounds(bounds, { padding: [20, 20] });
    }, [map]);

    return null;
};

interface StationPopupProps {
    station: Station;
}

const StationPopup: React.FC<StationPopupProps> = ({ station }) => (
    <div className="station-popup">
        <h3 style={{ color: '#663399', margin: '0 0 8px 0', fontSize: '16px' }}>
            {station.name}
        </h3>
        <p style={{ margin: '4px 0', fontSize: '14px' }}>
            <strong>Zone:</strong> {station.zone}
        </p>
        {station.interchanges && station.interchanges.length > 0 && (
            <p style={{ margin: '4px 0', fontSize: '14px' }}>
                <strong>Interchanges:</strong><br />
                {station.interchanges.join(', ')}
            </p>
        )}
    </div>
);

const ElizabethLineMap: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <div className="map-loading">
                <div>Loading Elizabeth Line Map...</div>
            </div>
        );
    }

    // Create line segments for smoother curves
    const createLineSegments = () => {
        const segments: [number, number][] = [];

        // Sort stations by approximate geographical flow
        const westToEast = [...elizabethLineStations].sort((a, b) => a.lng - b.lng);

        westToEast.forEach(station => {
            segments.push([station.lat, station.lng]);
        });

        return segments;
    };

    const lineCoordinates = createLineSegments();

    return (
        <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <MapContainer
                center={[51.5074, -0.1278]}
                zoom={10}
                style={{ height: '100%', width: '100%' }}
                zoomControl={true}
                scrollWheelZoom={true}
                doubleClickZoom={true}
                dragging={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Elizabeth Line route */}
                <Polyline
                    positions={lineCoordinates}
                    pathOptions={{
                        color: '#663399',
                        weight: 6,
                        opacity: 0.8,
                        lineCap: 'round',
                        lineJoin: 'round',
                    }}
                />

                {/* Station markers */}
                {elizabethLineStations.map((station) => (
                    <Marker
                        key={station.id}
                        position={[station.lat, station.lng]}
                        icon={createElizabethIcon(!!station.interchanges?.length)}
                    >
                        <Popup maxWidth={300} closeButton={true}>
                            <StationPopup station={station} />
                        </Popup>
                    </Marker>
                ))}

                <FitBounds />
            </MapContainer>

            {/* Map overlay info */}
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 1000,
                maxWidth: '300px',
            }}>
                <h2 style={{ color: '#663399', margin: '0 0 10px 0', fontSize: '18px' }}>
                    Elizabeth Line
                </h2>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Stations:</strong> {elizabethLineStations.length}
                </p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Length:</strong> 118 km (73 miles)
                </p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Opened:</strong> May 24, 2022
                </p>
                <div style={{ marginTop: '10px', fontSize: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '3px 0' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: '#663399',
                            borderRadius: '50%',
                            border: '2px solid white',
                            marginRight: '8px'
                        }}></div>
                        Regular Station
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '3px 0' }}>
                        <div style={{
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#663399',
                            borderRadius: '50%',
                            border: '3px solid white',
                            marginRight: '6px'
                        }}></div>
                        Interchange Station
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElizabethLineMap;
