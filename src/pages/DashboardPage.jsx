import React from 'react';
import { useNavigate } from 'react-router-dom';
import ParentDashboard from '../components/ParentDashboard';

export default function DashboardPage({ onOpenActivation }) {
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
