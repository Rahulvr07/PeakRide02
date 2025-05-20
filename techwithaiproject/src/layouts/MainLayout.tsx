import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import { useAuth } from '../contexts/AuthContext';
import OfflineIndicator from '../components/ui/OfflineIndicator';
import { useNetworkStatus } from '../hooks/useNetworkStatus';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const isOnline = useNetworkStatus();
  
  // Hide navbar and footer on tracking page for a more immersive experience
  const isTrackingPage = location.pathname.includes('/track/');
  
  // Check if we're on a page that should show the full layout
  const showFullLayout = !isTrackingPage;
  
  return (
    <div className="min-h-screen flex flex-col">
      {!isOnline && <OfflineIndicator />}
      
      {showFullLayout && <Navbar />}
      
      <main className={`flex-1 ${showFullLayout ? 'pt-16' : ''}`}>
        <Outlet />
      </main>
      
      {showFullLayout && <Footer />}
    </div>
  );
};

export default MainLayout;