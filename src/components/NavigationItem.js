import React, { useRef } from 'react';
import { Text, ActionButton, View } from '@adobe/react-spectrum';
import { useNavigate, useLocation } from 'react-router-dom';
import { useButton } from '@react-aria/button';
import { useOverlayTriggerState } from '@react-stately/overlays';
import Visibility from '@spectrum-icons/workflow/Visibility';
import VisibilityOff from '@spectrum-icons/workflow/VisibilityOff';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';
import Settings from '@spectrum-icons/workflow/Settings';
import QuickNavPage from '../pages/QuickNavPage';
import Popover from './Popover';

const NavigationItem = ({ item, isCustomizing, onVisibilityChange, isHiddenItem = false, isVisible = true, showChevron = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSelected = location.pathname === item.path;
  const triggerRef = useRef(null);
  const state = useOverlayTriggerState({});

  const { buttonProps } = useButton({
    onPress: () => {
      if (item.id === 'quick-nav') {
        state.toggle();
      } else {
        navigate(item.path);
      }
    },
    isDisabled: !isHiddenItem && !isVisible
  }, triggerRef);

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

  const handleVisibilityToggle = () => {
    if (onVisibilityChange) {
      onVisibilityChange(item.id, !isVisible);
    }
  };

  const Icon = item.icon === 'Settings' ? Settings : item.icon;
  return (
    <View>
      <div
        {...buttonProps}
        ref={triggerRef}
        style={itemStyles}
      >
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spectrum-global-dimension-size-100)',
            flex: 1
          }}
        >
          <Icon size="S" />
          <Text>{item.name}</Text>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spectrum-global-dimension-size-100)' }}>
          {showChevron && (
            <div 
              role="button"
              tabIndex={0}
              style={{ cursor: isHiddenItem || isVisible ? 'pointer' : 'not-allowed' }}
            >
              <ChevronRight size="S" />
            </div>
          )}
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
      </div>
      {state.isOpen && (
        <Popover 
          state={state}
          triggerRef={triggerRef}
          placement="right top"
          offset={8}
        >
          <View padding="size-200">
            <QuickNavPage />
          </View>
        </Popover>
      )}
    </View>
  );
};

export default NavigationItem; 