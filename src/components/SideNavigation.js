import React, { useMemo, useState, useEffect } from 'react';
import { View, ActionButton, ButtonGroup, Button } from '@adobe/react-spectrum';
import { useNavigate, useLocation } from 'react-router-dom';
import NavigationSection from './NavigationSection';
import NavigationItem from './NavigationItem';
import Home from '@spectrum-icons/workflow/Home';
import PinOn from '@spectrum-icons/workflow/PinOn';
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
import Properties from '@spectrum-icons/workflow/Properties';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';
import ViewGrid from '@spectrum-icons/workflow/ViewGrid';
import navMain from '../config/navMain.json';
import navSetup from '../config/navSetup.json';

const iconMap = {
  Home,
  PinOn,
  Folder,
  TaskList,
  Calendar,
  Table,
  Document,
  FolderOpen,
  GraphTrend,
  Campaign,
  Project,
  Help,
  Dashboard,
  Report,
  User,
  Group,
  Clock,
  UserGroup,
  Settings,
  Properties,
  ChevronRight,
  ViewGrid
};

const SideNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [itemVisibility, setItemVisibility] = useState({});
  const [pendingVisibility, setPendingVisibility] = useState({});
  const [hiddenMainItems, setHiddenMainItems] = useState([]);
  const [hiddenSetupItems, setHiddenSetupItems] = useState([]);
  const [isSetupMode, setIsSetupMode] = useState(location.pathname.startsWith('/setup'));
  const [expandedSections, setExpandedSections] = useState(() => {
    const saved = localStorage.getItem('expandedSections');
    return saved ? JSON.parse(saved) : {
      'Planning & Strategy': true,
      'Work Items': true,
      'Monitoring': true,
      'People & Resourcing': true,
      'Tools': true,
      'Hidden items': false
    };
  });

  // Function to determine which section contains the current path
  const getSectionForPath = (path) => {
    if (path.startsWith('/setup')) return 'Tools';
    if (path.startsWith('/workspaces') || path.startsWith('/prioritize') || 
        path.startsWith('/boards') || path.startsWith('/calendars') || 
        path.startsWith('/blueprints')) return 'Planning & Strategy';
    if (path.startsWith('/portfolios') || path.startsWith('/programs') || 
        path.startsWith('/campaigns') || path.startsWith('/projects') || 
        path.startsWith('/documents') || path.startsWith('/requests')) return 'Work Items';
    if (path.startsWith('/dashboards') || path.startsWith('/reports') || 
        path.startsWith('/analytics')) return 'Monitoring';
    if (path.startsWith('/users') || path.startsWith('/teams') || 
        path.startsWith('/timesheets') || path.startsWith('/resourcing') || 
        path.startsWith('/calendars')) return 'People & Resourcing';
    return null;
  };

  // Effect to expand section when navigating to a new page
  useEffect(() => {
    const currentPath = location.pathname;
    const section = getSectionForPath(currentPath);
    if (section && !expandedSections[section]) {
      const newExpandedSections = {
        ...expandedSections,
        [section]: true
      };
      setExpandedSections(newExpandedSections);
      localStorage.setItem('expandedSections', JSON.stringify(newExpandedSections));
    }
  }, [location.pathname, expandedSections]);

  const toggleSection = (sectionName) => {
    const newExpandedSections = {
      ...expandedSections,
      [sectionName]: !expandedSections[sectionName]
    };
    setExpandedSections(newExpandedSections);
    localStorage.setItem('expandedSections', JSON.stringify(newExpandedSections));
  };

  // Handle location changes
  React.useEffect(() => {
    const path = location.pathname;
    const isSetup = path.startsWith('/setup');
    setIsSetupMode(isSetup);
  }, [location.pathname]);

  const handleSetupNavigation = () => {
    setIsSetupMode(true);
    // Navigate to the first setup item's path
    const firstSetupItem = navSetup.setupItems[0];
    if (firstSetupItem) {
      navigate(firstSetupItem.path);
    }
  };

  // Get the current navigation config based on mode
  const currentConfig = isSetupMode ? navSetup : navMain;

  const handleVisibilityChange = (itemId, isVisible) => {
    setPendingVisibility(prev => ({
      ...prev,
      [itemId]: isVisible
    }));
  };

  const handleSave = () => {
    setItemVisibility(pendingVisibility);
    
    // Update hidden items based on visibility state and current navigation mode
    if (isSetupMode) {
      const newHiddenSetupItems = currentConfig.setupItems
        .filter(item => pendingVisibility[item.id] === false);
      setHiddenSetupItems(newHiddenSetupItems);
    } else {
      const newHiddenMainItems = [
        ...currentConfig.mainItems,
        ...currentConfig.planningItems,
        ...currentConfig.workItems,
        ...currentConfig.monitoringItems,
        ...currentConfig.peopleItems,
        ...currentConfig.toolsItems
      ].filter(item => pendingVisibility[item.id] === false);
      setHiddenMainItems(newHiddenMainItems);
    }
    
    setIsCustomizing(false);
  };

  const handleCancel = () => {
    setPendingVisibility(itemVisibility);
    setIsCustomizing(false);
  };

  const mapItemsWithIcons = (items) => {
    return items.map(item => ({
      ...item,
      icon: iconMap[item.icon]
    }));
  };

  const mainItems = useMemo(() => mapItemsWithIcons(currentConfig.mainItems), [currentConfig]);
  const setupItems = useMemo(() => isSetupMode ? mapItemsWithIcons(currentConfig.setupItems) : [], [currentConfig, isSetupMode]);
  const planningItems = useMemo(() => !isSetupMode ? mapItemsWithIcons(currentConfig.planningItems) : [], [currentConfig, isSetupMode]);
  const workItems = useMemo(() => !isSetupMode ? mapItemsWithIcons(currentConfig.workItems) : [], [currentConfig, isSetupMode]);
  const monitoringItems = useMemo(() => !isSetupMode ? mapItemsWithIcons(currentConfig.monitoringItems) : [], [currentConfig, isSetupMode]);
  const peopleItems = useMemo(() => !isSetupMode ? mapItemsWithIcons(currentConfig.peopleItems) : [], [currentConfig, isSetupMode]);

  const isItemHidden = (item) => {
    if (isSetupMode) {
      return hiddenSetupItems.some(hiddenItem => hiddenItem.id === item.id);
    } else {
      return hiddenMainItems.some(hiddenItem => hiddenItem.id === item.id);
    }
  };

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
      <View
        UNSAFE_style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--spectrum-global-dimension-size-200)',
          borderBottom: '1px solid var(--spectrum-global-color-gray-200)'
        }}
      >
        <View className="nav-section">
          {mainItems.filter(item => !isItemHidden(item)).map(item => (
            <NavigationItem
              key={item.id}
              item={item}
              isCustomizing={isCustomizing}
              onVisibilityChange={handleVisibilityChange}
              isVisible={pendingVisibility[item.id] ?? true}
              showChevron={item.id === 'quick-nav'}
              chevronSize="S"
              chevronType="single"
            />
          ))}
        </View>
      </View>
      <View
        UNSAFE_style={{
          flex: 1,
          overflow: 'auto',
          padding: 'var(--spectrum-global-dimension-size-200)',
          gap: 'var(--spectrum-global-dimension-size-200)'
        }}
      >
        {isSetupMode ? (
          <View className="nav-section">
            {setupItems.filter(item => !isItemHidden(item)).map(item => (
              <NavigationItem 
                key={item.id} 
                item={item} 
                isCustomizing={isCustomizing}
                onVisibilityChange={handleVisibilityChange}
                isVisible={pendingVisibility[item.id] ?? true}
              />
            ))}
          </View>
        ) : (
          <>
            <NavigationSection 
              title="Planning & Strategy" 
              UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-100)' }}
              isExpanded={expandedSections['Planning & Strategy']}
              onToggle={() => toggleSection('Planning & Strategy')}
            >
              <View className="nav-section">
                {planningItems.filter(item => !isItemHidden(item)).map(item => (
                  <NavigationItem 
                    key={item.id} 
                    item={item} 
                    isCustomizing={isCustomizing}
                    onVisibilityChange={handleVisibilityChange}
                    isVisible={pendingVisibility[item.id] ?? true}
                  />
                ))}
              </View>
            </NavigationSection>

            <NavigationSection 
              title="Work Items" 
              UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-100)' }}
              isExpanded={expandedSections['Work Items']}
              onToggle={() => toggleSection('Work Items')}
            >
              <View className="nav-section">
                {workItems.filter(item => !isItemHidden(item)).map(item => (
                  <NavigationItem 
                    key={item.id} 
                    item={item} 
                    isCustomizing={isCustomizing}
                    onVisibilityChange={handleVisibilityChange}
                    isVisible={pendingVisibility[item.id] ?? true}
                  />
                ))}
              </View>
            </NavigationSection>

            <NavigationSection 
              title="Monitoring" 
              UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-100)' }}
              isExpanded={expandedSections['Monitoring']}
              onToggle={() => toggleSection('Monitoring')}
            >
              <View className="nav-section">
                {monitoringItems.filter(item => !isItemHidden(item)).map(item => (
                  <NavigationItem 
                    key={item.id} 
                    item={item} 
                    isCustomizing={isCustomizing}
                    onVisibilityChange={handleVisibilityChange}
                    isVisible={pendingVisibility[item.id] ?? true}
                  />
                ))}
              </View>
            </NavigationSection>

            <NavigationSection 
              title="People & Resourcing" 
              UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-100)' }}
              isExpanded={expandedSections['People & Resourcing']}
              onToggle={() => toggleSection('People & Resourcing')}
            >
              <View className="nav-section">
                {peopleItems.filter(item => !isItemHidden(item)).map(item => (
                  <NavigationItem 
                    key={item.id} 
                    item={item} 
                    isCustomizing={isCustomizing}
                    onVisibilityChange={handleVisibilityChange}
                    isVisible={pendingVisibility[item.id] ?? true}
                  />
                ))}
              </View>
            </NavigationSection>

            <NavigationSection 
              title="Tools" 
              UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-100)' }}
              isExpanded={expandedSections['Tools']}
              onToggle={() => toggleSection('Tools')}
            >
              <NavigationItem
                key="setup"
                item={{
                  id: 'setup',
                  name: 'Setup',
                  icon: Settings,
                  path: '/setup'
                }}
                isCustomizing={isCustomizing}
                onVisibilityChange={handleVisibilityChange}
                isVisible={pendingVisibility['setup'] ?? true}
                showChevron={true}
                chevronSize="S"
                chevronType="single"
                onPress={handleSetupNavigation}
              />
            </NavigationSection>
          </>
        )}

        {(isSetupMode ? hiddenSetupItems : hiddenMainItems).length > 0 && (
          <NavigationSection 
            title="Hidden items" 
            UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-200)' }}
            isExpanded={expandedSections['Hidden items']}
            onToggle={() => toggleSection('Hidden items')}
          >
            <View className="nav-section">
              {(isSetupMode ? hiddenSetupItems : hiddenMainItems).map(item => (
                <NavigationItem
                  key={item.id}
                  item={item}
                  isCustomizing={isCustomizing}
                  onVisibilityChange={handleVisibilityChange}
                  isHiddenItem={true}
                  isVisible={pendingVisibility[item.id] ?? true}
                />
              ))}
            </View>
          </NavigationSection>
        )}
      </View>
      <View
        UNSAFE_style={{
          borderTop: '1px solid var(--spectrum-global-color-gray-200)',
          padding: 'var(--spectrum-global-dimension-size-200)',
          backgroundColor: 'var(--spectrum-global-color-gray-50)'
        }}
      >
        {isCustomizing ? (
          <ButtonGroup>
            <Button variant="secondary" onPress={handleCancel}>Cancel</Button>
            <Button variant="cta" onPress={handleSave}>Save</Button>
          </ButtonGroup>
        ) : (
          <ActionButton
            isQuiet
            onPress={() => {
              setPendingVisibility(itemVisibility);
              setIsCustomizing(true);
            }}
            UNSAFE_style={{
              width: '100%',
              justifyContent: 'flex-start'
            }}
          >
            <Properties />
            <View marginStart="size-100">Customize</View>
          </ActionButton>
        )}
      </View>
    </View>
  );
};

export default SideNavigation; 