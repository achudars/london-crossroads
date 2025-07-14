'use client';

import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const LondonRailMap = dynamic(
    () => import('@/components/LondonRailMap'),
    {
        ssr: false,
        loading: () => (
            <div className="map-loading" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '18px'
            }}>
                Loading London Rail Map...
            </div>
        )
    }
);

export default function Home() {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <LondonRailMap />
        </div>
    );
}
