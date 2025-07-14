import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'London Rail Network Map - Multi-Line Crossroads',
    description: 'Interactive map visualizing London rail network crossroads with Elizabeth Line and Thameslink routes, featuring coverage analysis and station details',
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
