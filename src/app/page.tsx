'use client';

import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const LondonRailMap = dynamic(
    () => import('@/components/LondonRailMap'),
    {
        ssr: false,
        loading: () => (
            <div className="map-loading">
                Loading London Rail Map...
            </div>
        )
    }
);

export default function Home() {
    return <LondonRailMap />;
}
