import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import TrackingPage from './pages/TrackingPage';
import ProfilePage from './pages/ProfilePage';
import EmergencyPage from './pages/EmergencyPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SafetyPage from './pages/SafetyPage';
import DriverSignupPage from './pages/DriverSignupPage';
import DriverDashboardPage from './pages/DriverDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

// Providers
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { LocationProvider } from './contexts/LocationContext';
import { BookingProvider } from './contexts/BookingContext';

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <LocationProvider>
            <BookingProvider>
              <Router>
                <Toaster position="top-center" />
                <Routes>
                  <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="book" element={<BookingPage />} />
                    <Route path="track/:bookingId" element={<TrackingPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="emergency" element={<EmergencyPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="safety" element={<SafetyPage />} />
                    <Route path="driver/signup" element={<DriverSignupPage />} />
                    <Route path="driver/dashboard" element={<DriverDashboardPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Route>
                </Routes>
              </Router>
            </BookingProvider>
          </LocationProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;