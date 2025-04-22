import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import SideNavigation from './components/SideNavigation';
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
import AnalyticsDashboardPage from './pages/AnalyticsDashboardPage';
import UsersPage from './pages/UsersPage';
import ResourcingPage from './pages/ResourcingPage';
import ProjectPreferencesPage from './pages/ProjectPreferencesPage';
import ProcessesPage from './pages/ProcessesPage';
import CustomFormsPage from './pages/CustomFormsPage';
import JobRolesPage from './pages/JobRolesPage';
import GroupsPage from './pages/GroupsPage';
import CompaniesPage from './pages/CompaniesPage';
import LoginAsPage from './pages/LoginAsPage';
import ResourceManagementPage from './pages/ResourceManagementPage';
import SchedulesPage from './pages/SchedulesPage';
import TimesheetsHoursPage from './pages/TimesheetsHoursPage';
import EmailPage from './pages/EmailPage';
import ScorecardsPage from './pages/ScorecardsPage';
import ExpenseTypesPage from './pages/ExpenseTypesPage';
import RiskTypesPage from './pages/RiskTypesPage';
import AccessLevelsPage from './pages/AccessLevelsPage';
import InterfacePage from './pages/InterfacePage';
import ReviewApprovalPage from './pages/ReviewApprovalPage';
import ProofSettingsPage from './pages/ProofSettingsPage';
import SystemPage from './pages/SystemPage';
import RecycleBinPage from './pages/RecycleBinPage';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <BrowserRouter 
        basename="/multi-level-nav"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <div style={{ display: 'flex', height: '100vh' }}>
          <SideNavigation />
          <main style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/analytics-dashboard" element={<AnalyticsDashboardPage />} />
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
              <Route path="/setup" element={<Navigate to="/setup/project-preferences" replace />} />
              <Route path="/setup/project-preferences" element={<ProjectPreferencesPage />} />
              <Route path="/setup/processes" element={<ProcessesPage />} />
              <Route path="/setup/custom-forms" element={<CustomFormsPage />} />
              <Route path="/setup/job-roles" element={<JobRolesPage />} />
              <Route path="/setup/teams" element={<TeamsPage />} />
              <Route path="/setup/groups" element={<GroupsPage />} />
              <Route path="/setup/companies" element={<CompaniesPage />} />
              <Route path="/setup/login-as" element={<LoginAsPage />} />
              <Route path="/setup/resource-management" element={<ResourceManagementPage />} />
              <Route path="/setup/schedules" element={<SchedulesPage />} />
              <Route path="/setup/timesheets-hours" element={<TimesheetsHoursPage />} />
              <Route path="/setup/email" element={<EmailPage />} />
              <Route path="/setup/scorecards" element={<ScorecardsPage />} />
              <Route path="/setup/expense-types" element={<ExpenseTypesPage />} />
              <Route path="/setup/risk-types" element={<RiskTypesPage />} />
              <Route path="/setup/access-levels" element={<AccessLevelsPage />} />
              <Route path="/setup/interface" element={<InterfacePage />} />
              <Route path="/setup/review-approval" element={<ReviewApprovalPage />} />
              <Route path="/setup/proof-settings" element={<ProofSettingsPage />} />
              <Route path="/setup/documents" element={<DocumentsPage />} />
              <Route path="/setup/system" element={<SystemPage />} />
              <Route path="/setup/recycle-bin" element={<RecycleBinPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
