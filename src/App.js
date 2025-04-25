import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, defaultTheme, View } from '@adobe/react-spectrum';
import SideNavigation from './components/SideNavigation';
import PageBreadcrumbs from './components/PageBreadcrumbs';
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
import AnalyticsDashboardDetailsPage from './pages/AnalyticsDashboardDetailsPage';
import AnalyticsDashboardTasksPage from './pages/AnalyticsDashboardTasksPage';
import AnalyticsDashboardPlanningPage from './pages/AnalyticsDashboardPlanningPage';
import AnalyticsDashboardDocumentsPage from './pages/AnalyticsDashboardDocumentsPage';
import AnalyticsDashboardIssuesPage from './pages/AnalyticsDashboardIssuesPage';
import AnalyticsDashboardUpdatesPage from './pages/AnalyticsDashboardUpdatesPage';
import AnalyticsDashboardMetricsPage from './pages/AnalyticsDashboardMetricsPage';
import {
  ProjectDetailsPage,
  ProjectTasksPage,
  ProjectPlanningPage,
  ProjectDocumentsPage,
  ProjectIssuesPage,
  ProjectUpdatesPage,
  ProjectMetricsPage
} from './pages/ProjectPages';
import {
  PortfolioDetailsPage,
  PortfolioProgramsPage,
  PortfolioProjectsPage
} from './pages/PortfolioPages';
import {
  ProgramDetailsPage,
  ProgramProjectsPage,
  ProgramDocumentsPage
} from './pages/ProgramPages';
import {
  CampaignDetailsPage,
  CampaignProjectsPage,
  CampaignAssetsPage
} from './pages/CampaignPages';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <HashRouter>
        <div style={{ display: 'flex', height: '100vh' }}>
          <SideNavigation />
          <main style={{ flex: 1, overflow: 'auto' }}>
            <View padding="size-200" UNSAFE_style={{ textAlign: 'left' }}>
              <PageBreadcrumbs />
              <View marginTop="size-200">
                <Routes>
                  <Route path="/" element={<Navigate to="/home" replace />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/analytics-dashboard" element={<Navigate to="/analytics-dashboard/details" replace />} />
                  <Route path="/analytics-dashboard/details" element={<AnalyticsDashboardDetailsPage />} />
                  <Route path="/analytics-dashboard/tasks" element={<AnalyticsDashboardTasksPage />} />
                  <Route path="/analytics-dashboard/planning" element={<AnalyticsDashboardPlanningPage />} />
                  <Route path="/analytics-dashboard/documents" element={<AnalyticsDashboardDocumentsPage />} />
                  <Route path="/analytics-dashboard/issues" element={<AnalyticsDashboardIssuesPage />} />
                  <Route path="/analytics-dashboard/updates" element={<AnalyticsDashboardUpdatesPage />} />
                  <Route path="/analytics-dashboard/metrics" element={<AnalyticsDashboardMetricsPage />} />
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
                  <Route path="/analytics-dashboard/*" element={<Navigate to="/project/analytics-dashboard-redesign/details" replace />} />
                  <Route path="/project/:projectSlug" element={<Navigate to="details" replace />} />
                  <Route path="/project/:projectSlug/details" element={<ProjectDetailsPage />} />
                  <Route path="/project/:projectSlug/tasks" element={<ProjectTasksPage />} />
                  <Route path="/project/:projectSlug/planning" element={<ProjectPlanningPage />} />
                  <Route path="/project/:projectSlug/documents" element={<ProjectDocumentsPage />} />
                  <Route path="/project/:projectSlug/issues" element={<ProjectIssuesPage />} />
                  <Route path="/project/:projectSlug/updates" element={<ProjectUpdatesPage />} />
                  <Route path="/project/:projectSlug/metrics" element={<ProjectMetricsPage />} />
                  <Route path="/portfolio/:portfolioSlug" element={<Navigate to="details" replace />} />
                  <Route path="/portfolio/:portfolioSlug/details" element={<PortfolioDetailsPage />} />
                  <Route path="/portfolio/:portfolioSlug/programs" element={<PortfolioProgramsPage />} />
                  <Route path="/portfolio/:portfolioSlug/projects" element={<PortfolioProjectsPage />} />
                  <Route path="/program/:programSlug" element={<Navigate to="details" replace />} />
                  <Route path="/program/:programSlug/details" element={<ProgramDetailsPage />} />
                  <Route path="/program/:programSlug/projects" element={<ProgramProjectsPage />} />
                  <Route path="/program/:programSlug/documents" element={<ProgramDocumentsPage />} />
                  <Route path="/campaign/:campaignSlug" element={<Navigate to="details" replace />} />
                  <Route path="/campaign/:campaignSlug/details" element={<CampaignDetailsPage />} />
                  <Route path="/campaign/:campaignSlug/projects" element={<CampaignProjectsPage />} />
                  <Route path="/campaign/:campaignSlug/assets" element={<CampaignAssetsPage />} />
                </Routes>
              </View>
            </View>
          </main>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
