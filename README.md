# London Rail Network Map - Next.js

A modern, interactive full-screen map showing London's rail network including the Elizabeth Line (Crossrail) and Thameslink routes, built with Next.js and React-Leaflet.

![London Crossroads Map Preview](london-crossroads.png)

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

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **React-Leaflet** - React components for Leaflet maps
- **Leaflet** - Interactive maps library
- **OpenStreetMap** - Map tiles

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
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   └── ElizabethLineMap.tsx # Main map component
├── data/
│   ├── elizabeth-line-stations.ts # Elizabeth Line station data
│   └── thameslink-stations.ts     # Thameslink station data
└── types/
    └── elizabeth-line.ts   # TypeScript interfaces
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
- 5px thick lines with rounded ends for clarity

### Coverage Visualization

- **1-mile radius circles** around each station showing coverage area
- Pink circles for Elizabeth Line stations
- Light teal circles for Thameslink stations
- Semi-transparent overlay (8% opacity) for subtle visualization

### Information Panel

- Fixed overlay showing network statistics
- Combined Elizabeth Line and Thameslink data
- Legend explaining all marker types and colors
- Key facts about both rail lines

## Customization

### Changing Colors

Edit the colors in `src/components/ElizabethLineMap.tsx`:

- Elizabeth Line: Purple (`#663399`)
- Thameslink: Teal (`#008B8B`)
- UI elements: `src/app/globals.css`

### Adding More Lines

1. Create new station data file in `src/data/`
2. Import stations in `ElizabethLineMap.tsx`
3. Add line configuration with colors and styling
4. Update legend and information panel
5. Extend the `Station` interface in `src/types/elizabeth-line.ts` if needed

## License

MIT License
