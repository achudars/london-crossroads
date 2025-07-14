import { Station } from '@/types/elizabeth-line';

export const elizabethLineStations: Station[] = [
  // Western Section
  { id: 'reading', name: 'Reading', lat: 51.4542, lng: -0.9731, zone: 'Outside London', interchanges: ['National Rail'] },
  { id: 'twyford', name: 'Twyford', lat: 51.4753, lng: -0.8615, zone: 'Outside London' },
  { id: 'maidenhead', name: 'Maidenhead', lat: 51.5190, lng: -0.7192, zone: 'Outside London' },
  { id: 'taplow', name: 'Taplow', lat: 51.5237, lng: -0.6826, zone: 'Outside London' },
  { id: 'burnham', name: 'Burnham', lat: 51.5238, lng: -0.6472, zone: 'Outside London' },
  { id: 'slough', name: 'Slough', lat: 51.5118, lng: -0.5915, zone: 'Outside London', interchanges: ['National Rail'] },
  { id: 'langley', name: 'Langley', lat: 51.5099, lng: -0.5436, zone: 'Outside London' },
  { id: 'iver', name: 'Iver', lat: 51.5167, lng: -0.5189, zone: 'Outside London' },
  { id: 'west-drayton', name: 'West Drayton', lat: 51.4822, lng: -0.4702, zone: '6', interchanges: ['National Rail'] },
  { id: 'hayes-harlington', name: 'Hayes & Harlington', lat: 51.5013, lng: -0.4219, zone: '5', interchanges: ['National Rail'] },
  { id: 'southall', name: 'Southall', lat: 51.5058, lng: -0.3759, zone: '4', interchanges: ['National Rail'] },
  { id: 'hanwell', name: 'Hanwell', lat: 51.5139, lng: -0.3394, zone: '4' },
  { id: 'west-ealing', name: 'West Ealing', lat: 51.5130, lng: -0.3251, zone: '3' },
  { id: 'ealing-broadway', name: 'Ealing Broadway', lat: 51.5152, lng: -0.3017, zone: '3', interchanges: ['Central', 'District'] },
  { id: 'acton-main-line', name: 'Acton Main Line', lat: 51.5167, lng: -0.2671, zone: '3' },
  
  // Central Section
  { id: 'paddington', name: 'Paddington', lat: 51.5154, lng: -0.1755, zone: '1', interchanges: ['Bakerloo', 'Circle', 'District', 'Hammersmith & City', 'National Rail'] },
  { id: 'bond-street', name: 'Bond Street', lat: 51.5142, lng: -0.1494, zone: '1', interchanges: ['Central', 'Jubilee'] },
  { id: 'tottenham-court-road', name: 'Tottenham Court Road', lat: 51.5165, lng: -0.1308, zone: '1', interchanges: ['Central', 'Northern'] },
  { id: 'farringdon', name: 'Farringdon', lat: 51.5203, lng: -0.1053, zone: '1', interchanges: ['Circle', 'Hammersmith & City', 'Metropolitan', 'Thameslink'] },
  { id: 'liverpool-street', name: 'Liverpool Street', lat: 51.5178, lng: -0.0823, zone: '1', interchanges: ['Central', 'Circle', 'Hammersmith & City', 'Metropolitan', 'National Rail'] },
  { id: 'whitechapel', name: 'Whitechapel', lat: 51.5196, lng: -0.0590, zone: '2', interchanges: ['District', 'Hammersmith & City'] },
  { id: 'canary-wharf', name: 'Canary Wharf', lat: 51.5054, lng: -0.0235, zone: '2', interchanges: ['Jubilee', 'DLR'] },
  { id: 'custom-house', name: 'Custom House', lat: 51.5095, lng: 0.0256, zone: '3', interchanges: ['DLR'] },
  { id: 'woolwich', name: 'Woolwich', lat: 51.4913, lng: 0.0694, zone: '4', interchanges: ['DLR'] },
  { id: 'abbey-wood', name: 'Abbey Wood', lat: 51.4906, lng: 0.1209, zone: '4', interchanges: ['National Rail'] },
  
  // Eastern Section (via Stratford)
  { id: 'stratford', name: 'Stratford', lat: 51.5418, lng: -0.0042, zone: '2/3', interchanges: ['Central', 'Jubilee', 'DLR', 'National Rail'] },
  { id: 'maryland', name: 'Maryland', lat: 51.5474, lng: 0.0063, zone: '3' },
  { id: 'forest-gate', name: 'Forest Gate', lat: 51.5508, lng: 0.0272, zone: '3' },
  { id: 'manor-park', name: 'Manor Park', lat: 51.5524, lng: 0.0460, zone: '3' },
  { id: 'ilford', name: 'Ilford', lat: 51.5590, lng: 0.0836, zone: '4', interchanges: ['National Rail'] },
  { id: 'seven-kings', name: 'Seven Kings', lat: 51.5637, lng: 0.0996, zone: '4' },
  { id: 'goodmayes', name: 'Goodmayes', lat: 51.5544, lng: 0.1129, zone: '4' },
  { id: 'chadwell-heath', name: 'Chadwell Heath', lat: 51.5680, lng: 0.1290, zone: '5' },
  { id: 'romford', name: 'Romford', lat: 51.5747, lng: 0.1821, zone: '6', interchanges: ['National Rail'] },
  { id: 'gidea-park', name: 'Gidea Park', lat: 51.5847, lng: 0.2028, zone: '6' },
  { id: 'harold-wood', name: 'Harold Wood', lat: 51.5934, lng: 0.2244, zone: '6' },
  { id: 'brentwood', name: 'Brentwood', lat: 51.6157, lng: 0.3039, zone: 'Outside London' },
  { id: 'shenfield', name: 'Shenfield', lat: 51.6313, lng: 0.3234, zone: 'Outside London', interchanges: ['National Rail'] },
];
