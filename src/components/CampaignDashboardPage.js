import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import CampaignDashboardHeader from './CampaignDashboardHeader';

function CampaignDashboardPage({ campaignName, section, children }) {
  return (
    <View>
      <CampaignDashboardHeader campaignName={campaignName} />
      <View marginTop="size-400">
        <Heading level={2}>{section}</Heading>
        <Content>
          {children}
        </Content>
      </View>
    </View>
  );
}

export default CampaignDashboardPage; 