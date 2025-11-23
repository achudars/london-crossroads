import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import { elizabethLineStations } from '@/data/elizabeth-line-stations';
import { thameslinkStations } from '@/data/thameslink-stations';
import { Station } from '@/types/elizabeth-line';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Next.js
delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: unknown })._getIconUrl;
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

// Thameslink branded station icon
const createThameslinkIcon = (isInterchange: boolean = false) => {
    return L.divIcon({
        className: 'thameslink-station-marker',
        html: `
      <div style="
        width: ${isInterchange ? '16px' : '12px'};
        height: ${isInterchange ? '16px' : '12px'};
        background-color: #008B8B;
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
        const allStations = [...elizabethLineStations, ...thameslinkStations];
        const bounds = L.latLngBounds(
            allStations.map(station => [station.lat, station.lng])
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

const LondonRailMap: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
    const [mapReady, setMapReady] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const mapKeyRef = useRef(Date.now());
    const initializationRef = useRef(false);

    useEffect(() => {
        // Prevent double initialization in React Strict Mode
        if (initializationRef.current) return;
        initializationRef.current = true;

        setIsClient(true);

        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            setMapReady(true);
        }, 300);

        // Cleanup function
        return () => {
            clearTimeout(timer);
            setMapReady(false);
            // Generate new key for next mount
            mapKeyRef.current = Date.now();
            initializationRef.current = false;
        };
    }, []);

    if (!isClient || !mapReady) {
        return (
            <div className="map-loading">
                <div>Loading London Rail Map...</div>
            </div>
        );
    }

    // Create line segments for smoother curves
    const createLineSegments = () => {
        const segments: [number, number][] = [];

        // Sort stations by approximate geographical flow
        const westToEast = [...elizabethLineStations].sort((a, b) => a.lng - b.lng);

        for (const station of westToEast) {
            segments.push([station.lat, station.lng]);
        }

        return segments;
    };

    // Create Thameslink line segments following the route order
    const createThameslinkLineSegments = () => {
        const segments: [number, number][] = [];

        // Use the order defined in the data file which represents the route structure
        // Sorting by latitude caused issues with branches (e.g. connecting Cricklewood to East London stations)
        for (const station of thameslinkStations) {
            segments.push([station.lat, station.lng]);
        }

        return segments;
    };

    const lineCoordinates = createLineSegments();
    const thameslinkCoordinates = createThameslinkLineSegments();

    return (
        <div ref={containerRef} style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <MapContainer
                key={`london-map-${mapKeyRef.current}`}
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

                {/* Thameslink route */}
                <Polyline
                    positions={thameslinkCoordinates}
                    pathOptions={{
                        color: '#008B8B',
                        weight: 5,
                        opacity: 0.8,
                        lineCap: 'round',
                        lineJoin: 'round',
                    }}
                />

                {/* 1-mile radius circles around each Elizabeth Line station */}
                {elizabethLineStations.map((station) => (
                    <Circle
                        key={`circle-${station.id}`}
                        center={[station.lat, station.lng]}
                        radius={1609} // 1 mile in meters
                        pathOptions={{
                            color: '#FF69B4',
                            weight: 2,
                            opacity: 0.6,
                            fillColor: '#FF69B4',
                            fillOpacity: 0.1,
                        }}
                    />
                ))}

                {/* 1-mile radius circles around each Thameslink station */}
                {thameslinkStations.map((station) => (
                    <Circle
                        key={`circle-tl-${station.id}`}
                        center={[station.lat, station.lng]}
                        radius={1609} // 1 mile in meters
                        pathOptions={{
                            color: '#40E0D0',
                            weight: 2,
                            opacity: 0.5,
                            fillColor: '#40E0D0',
                            fillOpacity: 0.08,
                        }}
                    />
                ))}

                {/* Elizabeth Line station markers */}
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

                {/* Thameslink station markers */}
                {thameslinkStations.map((station) => (
                    <Marker
                        key={`tl-${station.id}`}
                        position={[station.lat, station.lng]}
                        icon={createThameslinkIcon(!!station.interchanges?.length)}
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
                    London Rail Network
                </h2>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Elizabeth Line:</strong> {elizabethLineStations.length} stations
                </p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Thameslink:</strong> {thameslinkStations.length} stations
                </p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Elizabeth Line Opened:</strong> May 24, 2022
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
                    <div style={{ display: 'flex', alignItems: 'center', margin: '3px 0' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: '#FF69B4',
                            borderRadius: '50%',
                            border: '2px solid #FF69B4',
                            opacity: '0.6',
                            marginRight: '8px'
                        }}></div>
                        1-mile radius
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '3px 0' }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: '#008B8B',
                            borderRadius: '50%',
                            border: '2px solid white',
                            marginRight: '8px'
                        }}></div>
                        Thameslink Station
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '3px 0' }}>
                        <div style={{
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#008B8B',
                            borderRadius: '50%',
                            border: '3px solid white',
                            marginRight: '6px'
                        }}></div>
                        Thameslink Interchange
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LondonRailMap;
