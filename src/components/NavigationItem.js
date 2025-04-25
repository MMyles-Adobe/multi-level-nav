import React, { useRef, useEffect } from 'react';
import { Text, ActionButton, View } from '@adobe/react-spectrum';
import { useNavigate, useLocation } from 'react-router-dom';
import { useButton } from '@react-aria/button';
import { useOverlayTriggerState } from '@react-stately/overlays';
import Visibility from '@spectrum-icons/workflow/Visibility';
import VisibilityOff from '@spectrum-icons/workflow/VisibilityOff';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';
import ChevronDoubleRight from '@spectrum-icons/workflow/ChevronDoubleRight';
import Settings from '@spectrum-icons/workflow/Settings';
import QuickNavPage from '../pages/QuickNavPage';
import Popover from './Popover';
import ViewGrid from '@spectrum-icons/workflow/ViewGrid';

const NavigationItem = ({ item, isCustomizing, onVisibilityChange, isHiddenItem = false, isVisible = true, showChevron = false, chevronSize = "S", chevronType = "single" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSelected = location.pathname === item.path;
  const triggerRef = useRef(null);
  const state = useOverlayTriggerState({});
  const hoverTimer = useRef(null);
  const closeTimer = useRef(null);

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

  const handleMouseEnter = () => {
    if (item.id === 'quick-nav' && !state.isOpen) {
      hoverTimer.current = setTimeout(() => {
        state.open();
      }, 500);
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
    if (state.isOpen) {
      closeTimer.current = setTimeout(() => {
        state.close();
      }, 1500);
    }
  };

  const handlePopoverMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  };

  const handlePopoverMouseLeave = () => {
    if (state.isOpen) {
      closeTimer.current = setTimeout(() => {
        state.close();
      }, 1500);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
      }
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const showVisibilityButton = isCustomizing && item.id !== 'home' && item.id !== 'quick-nav';
  const itemStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px var(--spectrum-global-dimension-size-150)',
    cursor: isHiddenItem || isVisible ? 'pointer' : 'not-allowed',
    borderRadius: 0,
    backgroundColor: isSelected ? 'var(--spectrum-alias-highlight-selected)' : 'transparent',
    opacity: (!isVisible) ? '0.5' : '1',
    minHeight: '32px',
    ':hover': {
      backgroundColor: (isHiddenItem || isVisible) ? 'var(--spectrum-alias-highlight-hover)' : 'transparent'
    }
  };

  const handleVisibilityToggle = () => {
    if (onVisibilityChange) {
      onVisibilityChange(item.id, !isVisible);
    }
  };

  const Icon = item.icon || ViewGrid;
  return (
    <View>
      <div
        {...buttonProps}
        ref={triggerRef}
        style={itemStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spectrum-global-dimension-size-100)',
            flex: 1
          }}
        >
          <Icon size="S" UNSAFE_style={{ color: 'var(--spectrum-global-color-gray-600)' }} />
          <Text UNSAFE_style={{ 
            fontSize: 'var(--spectrum-global-dimension-font-size-75)',
            fontFamily: 'adobe-clean, sans-serif'
          }}>{item.name}</Text>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spectrum-global-dimension-size-100)' }}>
          {showChevron && (
            <div 
              role="button"
              tabIndex={0}
              style={{ 
                cursor: isHiddenItem || isVisible ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
              }}
            >
              {chevronType === "double" ? <ChevronDoubleRight size={chevronSize} UNSAFE_style={{ color: 'var(--spectrum-global-color-gray-600)' }} /> : <ChevronRight size={chevronSize} UNSAFE_style={{ color: 'var(--spectrum-global-color-gray-600)' }} />}
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
          crossOffset={-20}
        >
          <div
            onMouseEnter={handlePopoverMouseEnter}
            onMouseLeave={handlePopoverMouseLeave}
          >
            <View padding="size-200">
              <QuickNavPage onClose={() => state.close()} />
            </View>
          </div>
        </Popover>
      )}
    </View>
  );
};

export default NavigationItem; 