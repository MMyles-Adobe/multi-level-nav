import React, { useState } from 'react';
import { View, Text, ActionButton } from '@adobe/react-spectrum';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';

const NavigationSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <View
      UNSAFE_style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spectrum-global-dimension-size-100)'
      }}
    >
      <ActionButton
        onPress={() => setIsExpanded(!isExpanded)}
        UNSAFE_style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spectrum-global-dimension-size-100)',
          padding: 'var(--spectrum-global-dimension-size-100)',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <ChevronRight
          UNSAFE_style={{
            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out'
          }}
        />
        <Text
          UNSAFE_style={{
            fontSize: 'var(--spectrum-global-dimension-font-size-75)',
            fontWeight: 'var(--spectrum-global-font-weight-bold)',
            color: 'var(--spectrum-global-color-gray-700)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}
        >
          {title}
        </Text>
      </ActionButton>
      {isExpanded && children}
    </View>
  );
};

export default NavigationSection; 