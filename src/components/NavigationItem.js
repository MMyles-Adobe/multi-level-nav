import React from 'react';
import { Text } from '@adobe/react-spectrum';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationItem = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSelected = location.pathname === item.path;

  const itemStyles = {
    padding: '6px var(--spectrum-global-dimension-size-150)',
    cursor: 'pointer',
    borderRadius: 0,
    backgroundColor: isSelected ? 'var(--spectrum-alias-highlight-selected)' : 'transparent',
    ':hover': {
      backgroundColor: 'var(--spectrum-alias-highlight-hover)'
    }
  };

  const handleClick = () => {
    console.log('Navigating to:', item.path); // Debug log
    navigate(item.path);
  };

  const Icon = item.icon;
  return (
    <div 
      style={itemStyles}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spectrum-global-dimension-size-100)'
      }}>
        <Icon size="S" />
        <Text>{item.name}</Text>
      </div>
    </div>
  );
};

export default NavigationItem; 