import React, { useRef } from 'react';
import { View, Heading, Text } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import { useButton } from '@react-aria/button';

const QuickNavItem = ({ name, path, onClose }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { buttonProps } = useButton({
    onPress: () => {
      navigate(path);
      onClose();
    }
  }, ref);

  return (
    <div
      {...buttonProps}
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--spectrum-global-dimension-size-100) var(--spectrum-global-dimension-size-150)',
        cursor: 'pointer',
        color: 'var(--spectrum-global-color-gray-700)',
        ':hover': {
          backgroundColor: 'var(--spectrum-alias-highlight-hover)',
          color: 'var(--spectrum-global-color-gray-900)'
        }
      }}
    >
      <Text>• {name}</Text>
    </div>
  );
};

function QuickNavPage({ onClose }) {
  const navItems = [
    { name: 'Projects', path: '/projects' },
    { name: 'Campaigns', path: '/campaigns' },
    { name: 'Reports', path: '/reports' },
    { name: 'Boards', path: '/boards' },
    { name: 'Workspaces', path: '/workspaces' }
  ];

  return (
    <View>
      <Heading 
        level={2} 
        margin={0}
        UNSAFE_style={{
          fontSize: '18px',
          fontFamily: 'Adobe Clean',
          fontWeight: 700
        }}
      >
        Pins
      </Heading>
      <View 
        UNSAFE_style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginTop: '16px'
        }}
      >
        {navItems.map((item) => (
          <QuickNavItem
            key={item.path}
            name={item.name}
            path={item.path}
            onClose={onClose}
          />
        ))}
      </View>
    </View>
  );
}

export default QuickNavPage; 