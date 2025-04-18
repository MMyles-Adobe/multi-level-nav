import React, { useMemo } from 'react';
import { View } from '@adobe/react-spectrum';
import NavigationHeader from './NavigationHeader';
import NavigationSection from './NavigationSection';
import NavigationItem from './NavigationItem';
import Home from '@spectrum-icons/workflow/Home';
import Star from '@spectrum-icons/workflow/Star';
import Folder from '@spectrum-icons/workflow/Folder';
import TaskList from '@spectrum-icons/workflow/TaskList';
import Calendar from '@spectrum-icons/workflow/Calendar';
import Table from '@spectrum-icons/workflow/Table';
import Document from '@spectrum-icons/workflow/Document';
import FolderOpen from '@spectrum-icons/workflow/FolderOpen';
import GraphTrend from '@spectrum-icons/workflow/GraphTrend';
import Campaign from '@spectrum-icons/workflow/Campaign';
import Project from '@spectrum-icons/workflow/Project';
import Help from '@spectrum-icons/workflow/Help';
import Dashboard from '@spectrum-icons/workflow/Dashboard';
import Report from '@spectrum-icons/workflow/Report';
import User from '@spectrum-icons/workflow/User';
import Group from '@spectrum-icons/workflow/Group';
import Clock from '@spectrum-icons/workflow/Clock';
import UserGroup from '@spectrum-icons/workflow/UserGroup';
import Settings from '@spectrum-icons/workflow/Settings';

const SideNavigation = () => {
  const mainItems = useMemo(() => [
    { id: 'home', name: 'Home', icon: Home, path: '/home' },
    { id: 'quick-nav', name: 'My quick navigation', icon: Star, path: '/quick-nav' }
  ], []);

  const planningItems = useMemo(() => [
    { id: 'workspaces', name: 'Workspaces', icon: Folder, path: '/workspaces' },
    { id: 'prioritize', name: 'Prioritize', icon: TaskList, path: '/prioritize' },
    { id: 'boards', name: 'Boards', icon: Table, path: '/boards' },
    { id: 'calendars', name: 'Calendars', icon: Calendar, path: '/calendars' },
    { id: 'blueprints', name: 'Blueprints', icon: Document, path: '/blueprints' }
  ], []);

  const workItems = useMemo(() => [
    { id: 'portfolios', name: 'Portfolios', icon: FolderOpen, path: '/portfolios' },
    { id: 'programs', name: 'Programs', icon: GraphTrend, path: '/programs' },
    { id: 'campaigns', name: 'Campaigns', icon: Campaign, path: '/campaigns' },
    { id: 'projects', name: 'Projects', icon: Project, path: '/projects' },
    { id: 'documents', name: 'Documents', icon: Document, path: '/documents' },
    { id: 'requests', name: 'Requests', icon: Help, path: '/requests' }
  ], []);

  const monitoringItems = useMemo(() => [
    { id: 'dashboards', name: 'Dashboards', icon: Dashboard, path: '/dashboards' },
    { id: 'reports', name: 'Reports', icon: Report, path: '/reports' },
    { id: 'analytics', name: 'Analytics', icon: GraphTrend, path: '/analytics' }
  ], []);

  const peopleItems = useMemo(() => [
    { id: 'users', name: 'Users', icon: User, path: '/users' },
    { id: 'teams', name: 'Teams', icon: Group, path: '/teams' },
    { id: 'timesheets', name: 'Timesheets', icon: Clock, path: '/timesheets' },
    { id: 'resourcing', name: 'Resourcing', icon: UserGroup, path: '/resourcing' },
    { id: 'people-calendars', name: 'Calendars', icon: Calendar, path: '/calendars' }
  ], []);

  const toolsItems = useMemo(() => [
    { id: 'setup', name: 'Setup', icon: Settings, path: '/setup' }
  ], []);

  const hiddenItems = useMemo(() => [], []);

  return (
    <View
      UNSAFE_style={{
        width: '256px',
        height: '100%',
        backgroundColor: 'var(--spectrum-global-color-gray-50)',
        borderRight: '1px solid var(--spectrum-global-color-gray-200)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <NavigationHeader title="Navigation" />
      <View
        UNSAFE_style={{
          flex: 1,
          overflow: 'auto',
          padding: 'var(--spectrum-global-dimension-size-200)',
          gap: 'var(--spectrum-global-dimension-size-200)'
        }}
      >
        <View>
          {mainItems.map(item => (
            <NavigationItem key={item.id} item={item} />
          ))}
        </View>

        <NavigationSection title="Planning & Strategy">
          <View>
            {planningItems.map(item => (
              <NavigationItem key={item.id} item={item} />
            ))}
          </View>
        </NavigationSection>

        <NavigationSection title="Work Items">
          <View>
            {workItems.map(item => (
              <NavigationItem key={item.id} item={item} />
            ))}
          </View>
        </NavigationSection>

        <NavigationSection title="Monitoring">
          <View>
            {monitoringItems.map(item => (
              <NavigationItem key={item.id} item={item} />
            ))}
          </View>
        </NavigationSection>

        <NavigationSection title="People & Resourcing">
          <View>
            {peopleItems.map(item => (
              <NavigationItem key={item.id} item={item} />
            ))}
          </View>
        </NavigationSection>

        <NavigationSection title="Tools">
          <View>
            {toolsItems.map(item => (
              <NavigationItem key={item.id} item={item} />
            ))}
          </View>
        </NavigationSection>

        <NavigationSection title="Hidden items">
          <View>
            {hiddenItems.map(item => (
              <NavigationItem key={item.id} item={item} />
            ))}
          </View>
        </NavigationSection>
      </View>
    </View>
  );
};

export default SideNavigation; 