import React, { useState } from 'react';
import { Text, ActionButton } from '@adobe/react-spectrum';
import { useNavigate, useLocation } from 'react-router-dom';
import Visibility from '@spectrum-icons/workflow/Visibility';
import VisibilityOff from '@spectrum-icons/workflow/VisibilityOff';

const NavigationItem = ({ item, isCustomizing }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSelected = location.pathname === item.path;
  const [isVisible, setIsVisible] = useState(true);

  const showVisibilityButton = isCustomizing && item.id !== 'home' && item.id !== 'quick-nav';
  const itemStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: showVisibilityButton ? '1px var(--spectrum-global-dimension-size-150) 0' : '6px var(--spectrum-global-dimension-size-150)',
    cursor: isVisible ? 'pointer' : 'not-allowed',
    borderRadius: 0,
    backgroundColor: isSelected ? 'var(--spectrum-alias-highlight-selected)' : 'transparent',
    opacity: isVisible ? 1 : 0.5,
    ':hover': {
      backgroundColor: isVisible ? 'var(--spectrum-alias-highlight-hover)' : 'transparent'
    }
  };

  const handleClick = () => {
    if (isVisible) {
      navigate(item.path);
    }
  };

  const handleVisibilityToggle = () => {
    setIsVisible(!isVisible);
  };

  const Icon = item.icon;
  return (
    <div style={itemStyles}>
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spectrum-global-dimension-size-100)',
          flex: 1
        }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        <Icon size="S" />
        <Text>{item.name}</Text>
      </div>
      {showVisibilityButton && (
        <ActionButton isQuiet onPress={handleVisibilityToggle}>
          {isVisible ? <Visibility size="S" /> : <VisibilityOff size="S" />}
        </ActionButton>
      )}
    </div>
  );
};

export default NavigationItem; 