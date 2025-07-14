export interface Station {
  id: string;
  name: string;
  lat: number;
  lng: number;
  zone: string;
  interchanges?: string[];
  opened?: string;
  line?: string; // Added to identify which line the station belongs to
}

export interface LineSegment {
  from: Station;
  to: Station;
  coordinates: [number, number][];
}

export interface LineConfig {
  name: string;
  color: string;
  weight: number;
  opacity: number;
  stations: Station[];
}
