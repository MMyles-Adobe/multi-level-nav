import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import DashboardHeader from '../components/DashboardHeader';

function AnalyticsDashboardTasksPage() {
  return (
    <View>
      <DashboardHeader />
      <View marginTop="size-400">
        <Heading level={2}>Tasks</Heading>
        <Content>
          <p>Project tasks content will go here.</p>
        </Content>
      </View>
    </View>
  );
}

export default AnalyticsDashboardTasksPage; 