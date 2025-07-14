import { Station } from '@/types/elizabeth-line';

export const thameslinkStations: Station[] = [
  // Thameslink route from Rainham northwards towards Bedford
  { id: 'rainham-tl', name: 'Rainham', lat: 51.5187, lng: 0.1838, zone: '6', line: 'thameslink', interchanges: ['c2c'] },
  { id: 'purfleet', name: 'Purfleet', lat: 51.4818, lng: 0.2341, zone: '6', line: 'thameslink', interchanges: ['c2c'] },
  { id: 'grays', name: 'Grays', lat: 51.4762, lng: 0.3220, zone: '6', line: 'thameslink', interchanges: ['c2c'] },
  { id: 'chafford-hundred', name: 'Chafford Hundred', lat: 51.4876, lng: 0.2941, zone: '6', line: 'thameslink', interchanges: ['c2c'] },
  { id: 'ockendon', name: 'Ockendon', lat: 51.5126, lng: 0.2938, zone: '6', line: 'thameslink' },
  { id: 'upminster', name: 'Upminster', lat: 51.5588, lng: 0.2512, zone: '6', line: 'thameslink', interchanges: ['District', 'c2c'] },
  { id: 'dagenham-dock', name: 'Dagenham Dock', lat: 51.5193, lng: 0.1543, zone: '5', line: 'thameslink', interchanges: ['c2c'] },
  { id: 'rainham-central', name: 'Rainham (Central)', lat: 51.5154, lng: 0.1901, zone: '6', line: 'thameslink' },
  { id: 'elm-park', name: 'Elm Park', lat: 51.5489, lng: 0.1977, zone: '6', line: 'thameslink', interchanges: ['District'] },
  { id: 'hornchurch', name: 'Hornchurch', lat: 51.5542, lng: 0.2184, zone: '6', line: 'thameslink', interchanges: ['District'] },
  { id: 'emerson-park', name: 'Emerson Park', lat: 51.5678, lng: 0.2145, zone: '6', line: 'thameslink' },
  { id: 'upminster-bridge', name: 'Upminster Bridge', lat: 51.5586, lng: 0.2342, zone: '6', line: 'thameslink', interchanges: ['District'] },
  
  // Moving north through East London
  { id: 'barking', name: 'Barking', lat: 51.5396, lng: 0.0807, zone: '4', line: 'thameslink', interchanges: ['District', 'Hammersmith & City', 'c2c', 'Gospel Oak to Barking'] },
  { id: 'west-ham', name: 'West Ham', lat: 51.5287, lng: 0.0058, zone: '2/3', line: 'thameslink', interchanges: ['District', 'Hammersmith & City', 'Jubilee', 'DLR'] },
  { id: 'stratford-tl', name: 'Stratford', lat: 51.5418, lng: -0.0042, zone: '2/3', line: 'thameslink', interchanges: ['Central', 'Jubilee', 'DLR', 'Elizabeth', 'National Rail'] },
  
  // Central London section
  { id: 'london-bridge', name: 'London Bridge', lat: 51.5049, lng: -0.0863, zone: '1', line: 'thameslink', interchanges: ['Jubilee', 'Northern', 'National Rail'] },
  { id: 'blackfriars', name: 'Blackfriars', lat: 51.5120, lng: -0.1034, zone: '1', line: 'thameslink', interchanges: ['Circle', 'District'] },
  { id: 'city-thameslink', name: 'City Thameslink', lat: 51.5145, lng: -0.1037, zone: '1', line: 'thameslink' },
  { id: 'farringdon-tl', name: 'Farringdon', lat: 51.5203, lng: -0.1053, zone: '1', line: 'thameslink', interchanges: ['Circle', 'Hammersmith & City', 'Metropolitan', 'Elizabeth'] },
  { id: 'kings-cross', name: 'King\'s Cross St. Pancras', lat: 51.5308, lng: -0.1238, zone: '1', line: 'thameslink', interchanges: ['Circle', 'Hammersmith & City', 'Metropolitan', 'Northern', 'Piccadilly', 'Victoria'] },
  
  // North London towards Bedford
  { id: 'kentish-town', name: 'Kentish Town', lat: 51.5507, lng: -0.1402, zone: '2', line: 'thameslink', interchanges: ['Northern'] },
  { id: 'west-hampstead', name: 'West Hampstead Thameslink', lat: 51.5465, lng: -0.1907, zone: '2', line: 'thameslink', interchanges: ['Jubilee', 'Metropolitan', 'Overground'] },
  { id: 'cricklewood', name: 'Cricklewood', lat: 51.5584, lng: -0.2140, zone: '3', line: 'thameslink' },
  { id: 'hendon', name: 'Hendon', lat: 51.5832, lng: -0.2261, zone: '3', line: 'thameslink' },
  { id: 'mill-hill-broadway', name: 'Mill Hill Broadway', lat: 51.6128, lng: -0.2488, zone: '4', line: 'thameslink' },
  { id: 'elstree-borehamwood', name: 'Elstree & Borehamwood', lat: 51.6558, lng: -0.2728, zone: '6', line: 'thameslink' },
  { id: 'radlett', name: 'Radlett', lat: 51.6903, lng: -0.3181, zone: 'Outside London', line: 'thameslink' },
  { id: 'st-albans-city', name: 'St Albans City', lat: 51.7506, lng: -0.3426, zone: 'Outside London', line: 'thameslink' },
  { id: 'harpenden', name: 'Harpenden', lat: 51.8157, lng: -0.3538, zone: 'Outside London', line: 'thameslink' },
  { id: 'luton-airport', name: 'Luton Airport Parkway', lat: 51.8717, lng: -0.3953, zone: 'Outside London', line: 'thameslink' },
  { id: 'luton', name: 'Luton', lat: 51.8838, lng: -0.4094, zone: 'Outside London', line: 'thameslink' },
  { id: 'leagrave', name: 'Leagrave', lat: 51.9070, lng: -0.4443, zone: 'Outside London', line: 'thameslink' },
  { id: 'harlington', name: 'Harlington', lat: 51.9344, lng: -0.4735, zone: 'Outside London', line: 'thameslink' },
  { id: 'flitwick', name: 'Flitwick', lat: 52.0036, lng: -0.4886, zone: 'Outside London', line: 'thameslink' },
  { id: 'bedford', name: 'Bedford', lat: 52.1361, lng: -0.4786, zone: 'Outside London', line: 'thameslink' },
];
