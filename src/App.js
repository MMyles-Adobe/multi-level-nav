import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import SideNavigation from './components/SideNavigation';
import { View } from '@adobe/react-spectrum';
import HomePage from './pages/HomePage';
import QuickNavPage from './pages/QuickNavPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BoardsPage from './pages/BoardsPage';
import TimesheetsPage from './pages/TimesheetsPage';
import TeamsPage from './pages/TeamsPage';
import CalendarsPage from './pages/CalendarsPage';
import WorkspacesPage from './pages/WorkspacesPage';
import PrioritizePage from './pages/PrioritizePage';
import BlueprintsPage from './pages/BlueprintsPage';
import PortfoliosPage from './pages/PortfoliosPage';
import ProgramsPage from './pages/ProgramsPage';
import CampaignsPage from './pages/CampaignsPage';
import ProjectsPage from './pages/ProjectsPage';
import DocumentsPage from './pages/DocumentsPage';
import RequestsPage from './pages/RequestsPage';
import DashboardsPage from './pages/DashboardsPage';
import ReportsPage from './pages/ReportsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import UsersPage from './pages/UsersPage';
import ResourcingPage from './pages/ResourcingPage';
import SetupPage from './pages/SetupPage';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider theme={defaultTheme}>
        <View
          UNSAFE_style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <SideNavigation />
          <View
            UNSAFE_style={{
              flex: 1,
              padding: 'var(--spectrum-global-dimension-size-400)',
              overflow: 'auto'
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/quick-nav" element={<QuickNavPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/boards" element={<BoardsPage />} />
              <Route path="/timesheets" element={<TimesheetsPage />} />
              <Route path="/teams" element={<TeamsPage />} />
              <Route path="/calendars" element={<CalendarsPage />} />
              <Route path="/workspaces" element={<WorkspacesPage />} />
              <Route path="/prioritize" element={<PrioritizePage />} />
              <Route path="/blueprints" element={<BlueprintsPage />} />
              <Route path="/portfolios" element={<PortfoliosPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/documents" element={<DocumentsPage />} />
              <Route path="/requests" element={<RequestsPage />} />
              <Route path="/dashboards" element={<DashboardsPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/resourcing" element={<ResourcingPage />} />
              <Route path="/setup" element={<SetupPage />} />
            </Routes>
          </View>
        </View>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
