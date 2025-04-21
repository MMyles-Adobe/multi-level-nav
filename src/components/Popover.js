import React, { useRef } from 'react';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import { View } from '@adobe/react-spectrum';

function Popover({ children, state, ...props }) {
  let popoverRef = useRef(null);
  let { popoverProps, underlayProps, arrowProps, placement } = usePopover({
    ...props,
    popoverRef
  }, state);

  return (
    <Overlay>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <div
        {...popoverProps}
        ref={popoverRef}
        style={{
          ...popoverProps.style,
          backgroundColor: '#ffffff',
          border: '1px solid var(--spectrum-global-color-gray-300)',
          borderRadius: 'var(--spectrum-global-dimension-size-50)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          position: 'absolute',
          padding: '24px',
          opacity: state.isOpen ? 1 : 0,
          transform: state.isOpen ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
          pointerEvents: state.isOpen ? 'auto' : 'none'
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}

export default Popover; 