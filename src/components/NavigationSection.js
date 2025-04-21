import React from 'react';
import { Text, View } from '@adobe/react-spectrum';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';

const NavigationSection = ({ title, children, UNSAFE_style, isExpanded = true, onToggle }) => {
  return (
    <div style={{ marginBottom: 'var(--spectrum-global-dimension-size-200)' }}>
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          cursor: 'pointer',
          padding: '0 var(--spectrum-global-dimension-size-150)',
          marginBottom: 'var(--spectrum-global-dimension-size-100)'
        }}
        onClick={onToggle}
      >
        <Text UNSAFE_style={{ 
          fontSize: 'var(--spectrum-global-dimension-font-size-75)',
          fontWeight: 'var(--spectrum-global-font-weight-bold)',
          color: 'var(--spectrum-global-color-gray-700)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--spectrum-global-dimension-font-letter-spacing-100)',
          flex: 1
        }}>
          {title}
        </Text>
        <ChevronRight 
          size="S" 
          UNSAFE_style={{ 
            transform: isExpanded ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.2s ease-in-out'
          }} 
        />
      </div>
      {isExpanded && (
        <View UNSAFE_style={UNSAFE_style}>
          {children}
        </View>
      )}
    </div>
  );
};

export default NavigationSection; 