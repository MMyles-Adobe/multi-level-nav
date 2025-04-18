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
        paddingTop: 'var(--spectrum-global-dimension-size-100)'
      }}
    >
      <style>
        {`
          .spectrum-ActionButton-label {
            text-align: left !important;
          }
          .custom-action-button {
            padding: 8px 0px 8px 5px !important;
          }
        `}
      </style>
      <ActionButton
        onPress={() => setIsExpanded(!isExpanded)}
        UNSAFE_className="custom-action-button"
        UNSAFE_style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          justifyContent: 'flex-start'
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
            fontSize: '14px',
            fontWeight: 'var(--spectrum-global-font-weight-bold)',
            color: 'var(--spectrum-global-color-gray-700)',
            letterSpacing: '0.06em',
            textAlign: 'left'
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