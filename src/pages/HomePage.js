import React from 'react';
import { View, Heading, Grid, Text, Well, ActionButton } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import Dashboard from '@spectrum-icons/workflow/Dashboard';
import TaskList from '@spectrum-icons/workflow/TaskList';
import UserGroup from '@spectrum-icons/workflow/UserGroup';
import BulkEditUsers from '@spectrum-icons/workflow/BulkEditUsers';
import PageHeading from '../components/PageHeading';

const HomePage = () => {
  const navigate = useNavigate();
  
  const cardData = [
    {
      title: "Recent Projects",
      description: "View and manage your active projects",
      path: "/projects",
      footerText: "12 active projects",
      icon: Dashboard
    },
    {
      title: "My Tasks",
      description: "Track your assigned tasks and deadlines",
      path: "/tasks",
      footerText: "5 tasks due today",
      icon: TaskList
    },
    {
      title: "Team Updates",
      description: "Stay informed about team activities",
      path: "/updates",
      footerText: "3 new updates",
      icon: UserGroup
    },
    {
      title: "Resource Planning",
      description: "Manage team resources and assignments",
      path: "/resourcing",
      footerText: "Resource utilization: 85%",
      icon: BulkEditUsers
    }
  ];

  return (
    <View>
      <PageHeading>Welcome to Workfront</PageHeading>
      <Text>Quick access to your most important tools and information</Text>
      
      <Grid
        columns={{ base: 'repeat(1, 1fr)', M: 'repeat(2, 1fr)', L: 'repeat(3, 1fr)' }}
        gap="size-200"
        marginTop="size-400"
      >
        {cardData.map((card, index) => (
          <Well 
            key={index}
            role="button"
            tabIndex={0}
            onClick={() => navigate(card.path)}
            onKeyPress={(e) => e.key === 'Enter' && navigate(card.path)}
            UNSAFE_style={{
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              ':hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }
            }}
          >
            <View padding="size-200">
              <View marginBottom="size-200">
                <card.icon size="XXL" />
              </View>
              <Heading level={3}>{card.title}</Heading>
              <Text>{card.description}</Text>
              <View marginTop="size-200">
                <Text>{card.footerText}</Text>
              </View>
            </View>
          </Well>
        ))}
      </Grid>
    </View>
  );
};

export default HomePage; 