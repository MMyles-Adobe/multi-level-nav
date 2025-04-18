import React from 'react';
import { Text, ActionButton } from '@adobe/react-spectrum';
import { useNavigate, useLocation } from 'react-router-dom';
import Visibility from '@spectrum-icons/workflow/Visibility';
import VisibilityOff from '@spectrum-icons/workflow/VisibilityOff';

const NavigationItem = ({ item, isCustomizing, onVisibilityChange, isHiddenItem = false, isVisible = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSelected = location.pathname === item.path;

  const showVisibilityButton = isCustomizing && item.id !== 'home' && item.id !== 'quick-nav';
  const itemStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: showVisibilityButton ? '1px var(--spectrum-global-dimension-size-150) 0' : '6px var(--spectrum-global-dimension-size-150)',
    cursor: isHiddenItem || isVisible ? 'pointer' : 'not-allowed',
    borderRadius: 0,
    backgroundColor: isSelected ? 'var(--spectrum-alias-highlight-selected)' : 'transparent',
    opacity: (!isVisible) ? '0.5' : '1',
    ':hover': {
      backgroundColor: (isHiddenItem || isVisible) ? 'var(--spectrum-alias-highlight-hover)' : 'transparent'
    }
  };

  const handleClick = () => {
    if (isHiddenItem || isVisible) {
      navigate(item.path);
    }
  };

  const handleVisibilityToggle = () => {
    if (onVisibilityChange) {
      onVisibilityChange(item.id, !isVisible);
    }
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
        <ActionButton 
          isQuiet 
          onPress={handleVisibilityToggle}
          UNSAFE_style={{
            opacity: (!isVisible) ? '0.5' : '1'
          }}
        >
          {isVisible ? <Visibility size="S" /> : <VisibilityOff size="S" />}
        </ActionButton>
      )}
    </div>
  );
};

export default NavigationItem; 