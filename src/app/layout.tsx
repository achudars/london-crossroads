import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'London Elizabeth Line Map',
    description: 'Interactive map of the Elizabeth Line (Crossrail) in London',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="map-body" suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    )
}
