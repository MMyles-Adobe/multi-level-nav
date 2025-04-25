import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import PortfolioDashboardHeader from './PortfolioDashboardHeader';

function PortfolioDashboardPage({ portfolioName, section, children }) {
  return (
    <View>
      <PortfolioDashboardHeader portfolioName={portfolioName} />
      <View marginTop="size-400">
        <Heading level={2}>{section}</Heading>
        <Content>
          {children}
        </Content>
      </View>
    </View>
  );
}

export default PortfolioDashboardPage; 