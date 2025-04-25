import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProjectDashboardPage from '../components/ProjectDashboardPage';

// Helper function to format project name
const formatProjectName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

function ProjectDetailsPage() {
  const { projectSlug } = useParams();
  const projectName = formatProjectName(projectSlug);
  
  return (
    <ProjectDashboardPage projectName={projectName} section="Project Details">
      <p>Project details content will go here.</p>
    </ProjectDashboardPage>
  );
}

function ProjectTasksPage() {
  const { projectSlug } = useParams();
  const projectName = formatProjectName(projectSlug);
  
  return (
    <ProjectDashboardPage projectName={projectName} section="Tasks">
      <p>Project tasks content will go here.</p>
    </ProjectDashboardPage>
  );
}

function ProjectPlanningPage() {
  const { projectSlug } = useParams();
  const projectName = formatProjectName(projectSlug);
  
  return (
    <ProjectDashboardPage projectName={projectName} section="Planning">
      <p>Project planning content will go here.</p>
    </ProjectDashboardPage>
  );
}

function ProjectDocumentsPage() {
  const { projectSlug } = useParams();
  const projectName = formatProjectName(projectSlug);
  
  return (
    <ProjectDashboardPage projectName={projectName} section="Documents">
      <p>Project documents content will go here.</p>
    </ProjectDashboardPage>
  );
}

function ProjectIssuesPage() {
  const { projectSlug } = useParams();
  const projectName = formatProjectName(projectSlug);
  
  return (
    <ProjectDashboardPage projectName={projectName} section="Issues">
      <p>Project issues content will go here.</p>
    </ProjectDashboardPage>
  );
}

function ProjectUpdatesPage() {
  const { projectSlug } = useParams();
  const projectName = formatProjectName(projectSlug);
  
  return (
    <ProjectDashboardPage projectName={projectName} section="Updates">
      <p>Project updates content will go here.</p>
    </ProjectDashboardPage>
  );
}

function ProjectMetricsPage() {
  const { projectSlug } = useParams();
  const projectName = formatProjectName(projectSlug);
  
  return (
    <ProjectDashboardPage projectName={projectName} section="Metrics">
      <p>Project metrics content will go here.</p>
    </ProjectDashboardPage>
  );
}

export {
  ProjectDetailsPage,
  ProjectTasksPage,
  ProjectPlanningPage,
  ProjectDocumentsPage,
  ProjectIssuesPage,
  ProjectUpdatesPage,
  ProjectMetricsPage
}; 