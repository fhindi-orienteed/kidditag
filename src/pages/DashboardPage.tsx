import { useNavigate } from 'react-router-dom';
import ParentDashboard from '../components/ParentDashboard';

interface DashboardPageProps {
  onOpenActivation?: (code?: string) => void;
}

export default function DashboardPage({ onOpenActivation }: DashboardPageProps) {
  const navigate = useNavigate();

  return (
    <main>
      <ParentDashboard 
        onBackToLanding={() => navigate('/')}
        onOpenActivation={onOpenActivation}
      />
    </main>
  );
}
