import React from 'react';
import { Text, View, Icon } from '@adobe/react-spectrum';
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
          marginBottom: 'var(--spectrum-global-dimension-size-50)',
          gap: 'var(--spectrum-global-dimension-size-100)'
        }}
        onClick={onToggle}
      >
        <Icon>
          <ChevronRight 
            size="S" 
            UNSAFE_style={{ 
              transform: isExpanded ? 'rotate(90deg)' : 'none',
              transition: 'transform 0.2s ease-in-out',
              marginRight: 'var(--spectrum-global-dimension-size-100)',
              fill: 'var(--spectrum-global-color-gray-600)'
            }} 
          />
        </Icon>
        <Text UNSAFE_style={{ 
          fontSize: 'var(--spectrum-global-dimension-font-size-75)',
          fontWeight: 'var(--spectrum-global-font-weight-bold)',
          color: 'var(--spectrum-global-color-gray-700)',
          letterSpacing: 'var(--spectrum-global-dimension-font-letter-spacing-100)',
          fontFamily: 'adobe-clean, sans-serif',
          flex: 1
        }}>
          {title}
        </Text>
      </div>
      {isExpanded && (
        <View UNSAFE_style={{
          ...UNSAFE_style,
          paddingTop: 'var(--spectrum-global-dimension-size-50)'
        }}>
          {children}
        </View>
      )}
    </div>
  );
};

export default NavigationSection; 