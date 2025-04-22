import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import DashboardHeader from '../components/DashboardHeader';

function AnalyticsDashboardIssuesPage() {
  return (
    <View>
      <DashboardHeader />
      <View marginTop="size-400">
        <Heading level={2}>Issues</Heading>
        <Content>
          <p>Project issues content will go here.</p>
        </Content>
      </View>
    </View>
  );
}

export default AnalyticsDashboardIssuesPage; 