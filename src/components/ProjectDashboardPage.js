import React from 'react';
import { View, Heading, Content } from '@adobe/react-spectrum';
import ProjectDashboardHeader from './ProjectDashboardHeader';

function ProjectDashboardPage({ projectName, section, children }) {
  return (
    <View>
      <ProjectDashboardHeader projectName={projectName} />
      <View marginTop="size-400">
        <Heading level={2}>{section}</Heading>
        <Content>
          {children}
        </Content>
      </View>
    </View>
  );
}

export default ProjectDashboardPage; 