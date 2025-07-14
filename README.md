# London Elizabeth Line Map - Next.js

A modern, interactive full-screen map showing the Elizabeth Line (Crossrail) in London, built with Next.js and React-Leaflet.

![London Crossroads Map Preview](london-crossroads.png)

## Features

- 🗺️ **Full-screen interactive map** with zoom and pan controls
- 🚇 **All Elizabeth Line stations** with accurate coordinates
- 🔄 **Interchange indicators** - larger markers for stations with connections
- 📱 **Responsive design** - works on desktop and mobile
- ℹ️ **Station information** - click any station for details including zone and interchanges
- 🎨 **Official Elizabeth Line branding** - purple color scheme
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
│   └── elizabeth-line-stations.ts # Station data
└── types/
    └── elizabeth-line.ts   # TypeScript interfaces
```

## Station Data

The map includes all 41 Elizabeth Line stations with:

- Accurate GPS coordinates
- Zone information
- Interchange connections with other lines
- Opening dates

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

- **Regular stations**: Purple circles (12px)
- **Interchange stations**: Larger purple circles (16px) with thicker borders
- Click any marker for detailed station information

### Elizabeth Line Route

- Continuous purple line connecting all stations
- Follows the actual route geography
- 6px thick line with rounded ends for clarity

### Information Panel

- Fixed overlay showing line statistics
- Legend explaining marker types
- Key facts about the Elizabeth Line

## Customization

### Changing Colors

Edit the purple color (`#663399`) in:

- `src/components/ElizabethLineMap.tsx` (markers and line)
- `src/app/globals.css` (UI elements)

### Adding More Data

Extend the `Station` interface in `src/types/elizabeth-line.ts` and update station data in `src/data/elizabeth-line-stations.ts`.

## License

MIT License
