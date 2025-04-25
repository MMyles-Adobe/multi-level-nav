import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import ProgramDashboardHeader from './ProgramDashboardHeader';

function ProgramDashboardPage({ programName, section, children }) {
  return (
    <View>
      <ProgramDashboardHeader programName={programName} />
      <View marginTop="size-400">
        <Heading level={2}>{section}</Heading>
        <Content>
          {children}
        </Content>
      </View>
    </View>
  );
}

export default ProgramDashboardPage; 