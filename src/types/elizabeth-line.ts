export interface Station {
  id: string;
  name: string;
  lat: number;
  lng: number;
  zone: string;
  interchanges?: string[];
  opened?: string;
}

export interface LineSegment {
  from: Station;
  to: Station;
  coordinates: [number, number][];
}
