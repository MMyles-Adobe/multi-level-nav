import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import DashboardHeader from '../components/DashboardHeader';

function AnalyticsDashboardMetricsPage() {
  return (
    <View>
      <DashboardHeader />
      <View marginTop="size-400">
        <Heading level={2}>Metrics</Heading>
        <Content>
          <p>Project metrics content will go here.</p>
        </Content>
      </View>
    </View>
  );
}

export default AnalyticsDashboardMetricsPage; 