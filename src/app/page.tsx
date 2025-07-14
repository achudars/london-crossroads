'use client';

import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const ElizabethLineMap = dynamic(
    () => import('@/components/ElizabethLineMap'),
    {
        ssr: false,
        loading: () => (
            <div className="map-loading">
                Loading Elizabeth Line Map...
            </div>
        )
    }
);

export default function Home() {
    return <ElizabethLineMap />;
}
