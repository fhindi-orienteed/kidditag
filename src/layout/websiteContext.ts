import { useOutletContext } from 'react-router-dom';

export interface WebsiteContextType {
  onOpenActivation?: (code?: string) => void;
}

export function useWebsiteContext() {
  return useOutletContext<WebsiteContextType | undefined>();
}
