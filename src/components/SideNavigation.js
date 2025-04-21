import React, { useMemo, useState } from 'react';
import { View, ActionButton, ButtonGroup, Button } from '@adobe/react-spectrum';
import { useNavigate, useLocation } from 'react-router-dom';
import NavigationHeader from './NavigationHeader';
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
import navigationConfig from '../config/navMain.json';

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
  Properties
};

const SideNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [itemVisibility, setItemVisibility] = useState({});
  const [pendingVisibility, setPendingVisibility] = useState({});
  const [hiddenItems, setHiddenItems] = useState([]);

  const handleVisibilityChange = (itemId, isVisible) => {
    setPendingVisibility(prev => ({
      ...prev,
      [itemId]: isVisible
    }));
  };

  const handleSave = () => {
    setItemVisibility(pendingVisibility);
    // Update hidden items based on visibility state
    const newHiddenItems = [
      ...navigationConfig.mainItems,
      ...navigationConfig.planningItems,
      ...navigationConfig.workItems,
      ...navigationConfig.monitoringItems,
      ...navigationConfig.peopleItems,
      ...navigationConfig.toolsItems
    ].filter(item => pendingVisibility[item.id] === false);
    setHiddenItems(newHiddenItems);
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

  const mainItems = useMemo(() => mapItemsWithIcons(navigationConfig.mainItems), []);
  const planningItems = useMemo(() => mapItemsWithIcons(navigationConfig.planningItems), []);
  const workItems = useMemo(() => mapItemsWithIcons(navigationConfig.workItems), []);
  const monitoringItems = useMemo(() => mapItemsWithIcons(navigationConfig.monitoringItems), []);
  const peopleItems = useMemo(() => mapItemsWithIcons(navigationConfig.peopleItems), []);
  const toolsItems = useMemo(() => mapItemsWithIcons(navigationConfig.toolsItems), []);

  const allItems = useMemo(() => [
    ...mainItems,
    ...planningItems,
    ...workItems,
    ...monitoringItems,
    ...peopleItems,
    ...toolsItems
  ], [mainItems, planningItems, workItems, monitoringItems, peopleItems, toolsItems]);

  const isItemHidden = (item) => {
    return hiddenItems.some(hiddenItem => hiddenItem.id === item.id);
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
      <NavigationHeader title="Navigation" />
      <View
        UNSAFE_style={{
          flex: 1,
          overflow: 'auto',
          padding: 'var(--spectrum-global-dimension-size-200)',
          gap: 'var(--spectrum-global-dimension-size-200)'
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
            />
          ))}
        </View>

        <NavigationSection title="Planning & Strategy" UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-200)' }}>
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

        <NavigationSection title="Work Items" UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-200)' }}>
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

        <NavigationSection title="Monitoring" UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-200)' }}>
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

        <NavigationSection title="People & Resourcing" UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-200)' }}>
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

        <NavigationSection title="Tools" UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-200)' }}>
          <View className="nav-section">
            {toolsItems.filter(item => !isItemHidden(item)).map(item => (
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

        {hiddenItems.length > 0 && (
          <NavigationSection title="Hidden items" UNSAFE_style={{ marginTop: 'var(--spectrum-global-dimension-size-200)' }}>
            <View className="nav-section">
              {hiddenItems.map(item => (
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