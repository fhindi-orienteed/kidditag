import type { ChildProfile } from '../../types';

export const initialChildrenData: Record<string, ChildProfile> = {
  maya: {
    name: 'Maya Sinclair',
    age: 5,
    gender: 'Female',
    bloodType: 'O+',
    avatar: '👧',
    tags: [
      { id: 'KT-7842', type: 'Silicone Wristband', color: 'Purple', status: 'Active', scans: 4, lastScan: '14 mins ago', location: 'Brooklyn Bridge Park, Pier 6' },
      { id: 'KT-9104', type: 'Backpack Safety Badge', color: 'Teal', status: 'Active', scans: 1, lastScan: 'Yesterday at 3:15 PM', location: 'Prospect Park Zoo' },
      { id: 'KT-3381', type: 'Shoe Lace Tag', color: 'Pink', status: 'Active', scans: 0, lastScan: 'Never scanned', location: 'Ready for use' }
    ],
    contacts: [
      { name: 'Sarah Sinclair (Mother)', phone: '(555) 234-8901', priority: 'Primary Emergency', status: 'Verified' },
      { name: 'David Sinclair (Father)', phone: '(555) 234-8902', priority: 'Secondary Emergency', status: 'Verified' },
      { name: 'Dr. Evelyn Reed (Pediatrician)', phone: '(555) 901-4455', priority: 'Doctor', status: 'Active' }
    ],
    scanHistory: [
      {
        id: 1,
        location: 'Brooklyn Bridge Park, Pier 6',
        time: 'Today at 2:14 PM',
        scanner: 'Safari iOS • Verified Good Samaritan',
        action: 'Called Mother via Proxy',
        resolved: true,
        coords: '40.6928° N, 73.9997° W'
      },
      {
        id: 2,
        location: 'Prospect Park Zoo Entrance',
        time: 'Yesterday at 3:15 PM',
        scanner: 'Chrome Android • Park Staff',
        action: 'Instant GPS pin sent via SMS',
        resolved: true,
        coords: '40.6655° N, 73.9654° W'
      }
    ]
  },
  leo: {
    name: 'Leo Sinclair',
    age: 3,
    gender: 'Male',
    bloodType: 'A+',
    avatar: '👦',
    tags: [
      { id: 'KT-4412', type: 'Silicone Wristband', color: 'Blue', status: 'Active', scans: 2, lastScan: '3 days ago', location: 'Central Park Carousel' },
      { id: 'KT-6629', type: 'Jacket Clip Tag', color: 'Yellow', status: 'Active', scans: 0, lastScan: 'Never scanned', location: 'Ready for use' }
    ],
    contacts: [
      { name: 'Sarah Sinclair (Mother)', phone: '(555) 234-8901', priority: 'Primary Emergency', status: 'Verified' },
      { name: 'David Sinclair (Father)', phone: '(555) 234-8902', priority: 'Secondary Emergency', status: 'Verified' }
    ],
    scanHistory: [
      {
        id: 1,
        location: 'Central Park Carousel',
        time: 'Sep 30, 2026 at 11:20 AM',
        scanner: 'Safari iOS',
        action: 'SMS Ping Acknowledged',
        resolved: true,
        coords: '40.7688° N, 73.9744° W'
      }
    ]
  }
};
