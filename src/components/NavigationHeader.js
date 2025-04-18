import React from 'react';
import { View, Text } from '@adobe/react-spectrum';

const NavigationHeader = ({ title }) => {
  return (
    <View
      UNSAFE_style={{
        padding: 'var(--spectrum-global-dimension-size-200)',
        borderBottom: '1px solid var(--spectrum-global-color-gray-200)',
        backgroundColor: 'var(--spectrum-global-color-gray-50)'
      }}
    >
      <Text
        UNSAFE_style={{
          fontSize: 'var(--spectrum-global-dimension-font-size-100)',
          fontWeight: 'var(--spectrum-global-font-weight-bold)',
          color: 'var(--spectrum-global-color-gray-700)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em'
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default NavigationHeader; 