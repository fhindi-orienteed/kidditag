import { useOutletContext } from 'react-router-dom';
import type { ChildProfile } from '../../types';

export interface DashboardContextType {
  selectedChild: string;
  setSelectedChild: (child: string) => void;
  currentChild: ChildProfile;
  childrenData: Record<string, ChildProfile>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  lostModeActive: boolean;
  setLostModeActive: (active: boolean) => void;
  onOpenActivation?: () => void;
}

export function useDashboardContext() {
  return useOutletContext<DashboardContextType | undefined>();
}
