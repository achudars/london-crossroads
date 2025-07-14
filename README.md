# London Rail Network Map - Multi-Line Interactive Visualization

A modern, interactive full-screen map visualizing London's rail network crossroads, featuring the Elizabeth Line (Crossrail) and Thameslink routes with 1-mile coverage radiuses around each station. Built with Next.js and React-Leaflet.

![London Crossroads Map Preview](london-crossroads.png)

## About This App

This application visualizes the intersection and coverage areas of London's major rail networks, specifically focusing on how different rail lines create transportation crossroads throughout the city. The app displays:

- **Multi-line rail network visualization** showing how different rail systems intersect
- **Coverage analysis** with 1-mile radius circles around each station
- **Interactive exploration** of London's rail infrastructure
- **Comprehensive station data** including zones and interchange connections

The focus is on understanding London's rail crossroads - where different transportation networks meet and overlap, making it easier to understand connectivity and coverage gaps across the city.

## Features

- 🗺️ **Full-screen interactive map** with zoom and pan controls
- 🚇 **Multiple rail lines** - Elizabeth Line and Thameslink routes
- 📍 **Comprehensive station data** - 41 Elizabeth Line + 33 Thameslink stations
- 🔄 **Interchange indicators** - larger markers for stations with connections
- 📱 **Responsive design** - works on desktop and mobile
- ℹ️ **Station information** - click any station for details including zone and interchanges
- 🎨 **Line-specific branding** - Purple for Elizabeth Line, Teal for Thameslink
- 📏 **1-mile radius circles** - visualize coverage areas around each station
- ⚡ **Modern tech stack** - Next.js 14, TypeScript, React-Leaflet

## Technologies Used

- **Next.js 15.3.5** - React framework with App Router (latest stable)
- **React 18.3.1** - Latest stable React version
- **TypeScript 5.1.6** - Type safety and modern JavaScript features
- **React-Leaflet 4.2.1** - React components for Leaflet maps
- **Leaflet 1.9.4** - Interactive maps library
- **OpenStreetMap** - Map tiles
- **ESLint 9.31.0** - Code linting and quality
- **Lucide React 0.263.1** - Modern icon library

## Development Dependencies

- **@types/leaflet 1.9.4** - TypeScript definitions for Leaflet
- **@types/node 20.5.0** - Node.js TypeScript definitions
- **@types/react 18.3.23** - React TypeScript definitions
- **@types/react-dom 18.3.7** - React DOM TypeScript definitions
- **eslint-config-next 15.3.5** - Next.js ESLint configuration

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Run development server:**

```bash
npm run dev
```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page with dynamic map import
│   └── globals.css         # Global styles
├── components/
│   └── LondonRailMap.tsx   # Main interactive map component
├── data/
│   ├── elizabeth-line-stations.ts # Elizabeth Line station data
│   └── thameslink-stations.ts     # Thameslink station data
└── types/
    └── elizabeth-line.ts   # TypeScript interfaces for stations
```

## Station Data

The map includes comprehensive rail network data:

### Elizabeth Line (41 stations)

- Reading to Abbey Wood via Central London
- Accurate GPS coordinates and zone information
- Interchange connections with other London transport
- Opening dates and service information

### Thameslink (33 stations)

- Rainham to Bedford route through Central London
- Complete north-south corridor coverage
- Integration with existing transport networks
- Detailed geographic positioning

## Building for Production

```bash
npm run build
npm start
```

## Features in Detail

### Interactive Map

- Full-screen, resizable map interface
- Smooth zoom and pan controls
- Responsive design for all screen sizes

### Station Markers

- **Elizabeth Line Regular stations**: Purple circles (12px)
- **Elizabeth Line Interchange stations**: Larger purple circles (16px) with thicker borders
- **Thameslink Regular stations**: Teal circles (12px)
- **Thameslink Interchange stations**: Larger teal circles (16px) with thicker borders
- Click any marker for detailed station information

### Rail Route Lines

- **Elizabeth Line**: Continuous purple line (#663399) connecting all stations
- **Thameslink**: Continuous teal line (#008B8B) from Rainham to Bedford
- Both follow actual route geography with smooth curves
- Weighted lines (6px Elizabeth, 5px Thameslink) with rounded ends for clarity

### Coverage Visualization

- **1-mile radius circles** around each station showing coverage area
- Pink circles (opacity 8%) for Elizabeth Line stations
- Light teal circles (opacity 8%) for Thameslink stations
- Visual analysis of network overlap and coverage gaps

### Information Panel

- Fixed overlay showing comprehensive network statistics
- Combined Elizabeth Line and Thameslink data
- Interactive legend explaining all marker types and colors
- Key facts about both rail lines and their intersections

## Customization

### Changing Colors

Edit the colors in `src/components/LondonRailMap.tsx`:

- Elizabeth Line: Purple (`#663399`)
- Thameslink: Teal (`#008B8B`)
- UI elements: `src/app/globals.css`

### Adding More Lines

1. Create new station data file in `src/data/`
2. Import stations in `LondonRailMap.tsx`
3. Add line configuration with colors and styling
4. Update legend and information panel
5. Extend the `Station` interface in `src/types/elizabeth-line.ts` if needed

## License

MIT License
