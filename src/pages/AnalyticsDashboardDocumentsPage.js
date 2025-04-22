import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import DashboardHeader from '../components/DashboardHeader';

function AnalyticsDashboardDocumentsPage() {
  return (
    <View>
      <DashboardHeader />
      <View marginTop="size-400">
        <Heading level={2}>Documents</Heading>
        <Content>
          <p>Project documents content will go here.</p>
        </Content>
      </View>
    </View>
  );
}

export default AnalyticsDashboardDocumentsPage; 