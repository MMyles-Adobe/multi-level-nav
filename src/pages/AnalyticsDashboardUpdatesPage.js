import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import DashboardHeader from '../components/DashboardHeader';

function AnalyticsDashboardUpdatesPage() {
  return (
    <View>
      <DashboardHeader />
      <View marginTop="size-400">
        <Heading level={2}>Updates</Heading>
        <Content>
          <p>Project updates content will go here.</p>
        </Content>
      </View>
    </View>
  );
}

export default AnalyticsDashboardUpdatesPage; 