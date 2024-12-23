import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { InvestorPage } from '@/pages/InvestorPage';
import { StartupPage } from '@/pages/StartupPage';
import { StartupDetailsPage } from '@/pages/StartupDetailsPage';
import { AboutPage } from '@/pages/AboutPage';
import { RegisterStartupPage } from '@/pages/RegisterStartupPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investors" element={<InvestorPage />} />
            <Route path="/startups" element={<StartupPage />} />
            <Route path="/startups/:id" element={<StartupDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/register-startup" element={<RegisterStartupPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}