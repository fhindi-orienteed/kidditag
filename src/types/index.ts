export interface Tag {
  id: string;
  type: string;
  color: string;
  status: 'Active' | 'Inactive' | 'Pending';
  scans: number;
  lastScan: string;
  location: string;
}

export interface EmergencyContact {
  name: string;
  phone: string;
  priority: string;
  status: 'Verified' | 'Pending' | 'Active';
}

export interface ScanHistoryRecord {
  id: number;
  location: string;
  time: string;
  scanner: string;
  action: string;
  resolved: boolean;
  coords: string;
}

export interface ChildProfile {
  name: string;
  age: number;
  gender: string;
  bloodType: string;
  avatar: string;
  tags: Tag[];
  contacts: EmergencyContact[];
  scanHistory: ScanHistoryRecord[];
}

export interface User {
  id?: string;
  userName: string;
  email?: string;
  role?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
