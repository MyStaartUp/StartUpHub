import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/lib/auth/AuthProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { LoginPage } from '@/pages/auth/LoginPage';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { InvestorPage } from '@/pages/InvestorPage';
import { StartupPage } from '@/pages/StartupPage';
import { StartupDetailsPage } from '@/pages/StartupDetailsPage';
import { AboutPage } from '@/pages/AboutPage';
import { RegisterStartupPage } from '@/pages/RegisterStartupPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { PrivateRoute } from '@/components/auth/PrivateRoute';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/investors" element={<InvestorPage />} />
              <Route path="/startups" element={<StartupPage />} />
              <Route path="/startups/:id" element={<StartupDetailsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/register-startup" 
                element={
                  <PrivateRoute>
                    <RegisterStartupPage />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}