import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import DashboardHeader from '../components/DashboardHeader';

function AnalyticsDashboardPlanningPage() {
  return (
    <View>
      <DashboardHeader />
      <View marginTop="size-400">
        <Heading level={2}>Planning</Heading>
        <Content>
          <p>Project planning content will go here.</p>
        </Content>
      </View>
    </View>
  );
}

export default AnalyticsDashboardPlanningPage; 