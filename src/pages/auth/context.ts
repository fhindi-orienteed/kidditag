import { useOutletContext } from 'react-router-dom';

export interface AuthContextType {
  onOpenActivation?: () => void;
}

export function useAuthContext() {
  return useOutletContext<AuthContextType | undefined>();
}
