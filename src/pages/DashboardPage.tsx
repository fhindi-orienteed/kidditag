import OverviewPage from './dashboard/overview';

interface DashboardPageProps {
  onOpenActivation?: () => void;
}

export default function DashboardPage({ onOpenActivation }: DashboardPageProps) {
  return <OverviewPage onOpenActivation={onOpenActivation} />;
}
