import React from 'react';
import { View, Heading, Text, Flex, ActionButton } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import ChevronLeft from '@spectrum-icons/workflow/ChevronLeft';

function DashboardHeader({ title }) {
  const navigate = useNavigate();

  return (
    <View>
      <Flex gap="size-100" alignItems="baseline">
        <ActionButton
          isQuiet
          onPress={() => navigate('/projects')}
          aria-label="Back to Projects"
        >
          <ChevronLeft />
        </ActionButton>
        <Flex direction="column">
          <Heading level={1} UNSAFE_className="obj-type-header" UNSAFE_style={{ marginBottom: 0 }}>Analytics Dashboard Redesign</Heading>
          <Text size="S" UNSAFE_style={{ color: 'var(--spectrum-global-color-gray-600)' }}>Project</Text>
        </Flex>
      </Flex>
    </View>
  );
}

export default DashboardHeader; 