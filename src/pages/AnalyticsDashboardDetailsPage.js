import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import DashboardHeader from '../components/DashboardHeader';

function AnalyticsDashboardDetailsPage() {
  return (
    <View>
      <DashboardHeader />
      <View marginTop="size-400">
        <Heading level={2}>Project Details</Heading>
        <Content>
          <p>Project details content will go here.</p>
        </Content>
      </View>
    </View>
  );
}

export default AnalyticsDashboardDetailsPage; 