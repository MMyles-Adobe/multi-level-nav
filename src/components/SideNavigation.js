import React, { useState } from 'react';
import { View, Checkbox } from '@adobe/react-spectrum';
import NavigationHeader from './NavigationHeader';
import NavigationSection from './NavigationSection';

const SideNavigation = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const mainItems = [
    { id: 'home', name: 'Home' }
  ];

  const section1Items = [
    { id: 'products', name: 'Products' },
    { id: 'services', name: 'Services' }
  ];

  const section2Items = [
    { id: 'about', name: 'About' },
    { id: 'contact', name: 'Contact' }
  ];

  const itemStyles = {
    padding: '6px var(--spectrum-global-dimension-size-150)',
    cursor: 'pointer',
    borderRadius: 0,
    ':hover': {
      backgroundColor: 'var(--spectrum-alias-highlight-hover)'
    }
  };

  const handleItemSelect = (itemId) => {
    setSelectedItem(itemId);
  };

  const renderNavigationItem = (item) => (
    <View 
      key={item.id} 
      UNSAFE_style={itemStyles}
      onClick={() => handleItemSelect(item.id)}
    >
      <Checkbox
        isSelected={selectedItem === item.id}
        onChange={() => handleItemSelect(item.id)}
        UNSAFE_style={{
          '--spectrum-checkbox-border-color': 'var(--spectrum-global-color-gray-500)',
          '--spectrum-checkbox-box-border-radius': '2px'
        }}
      >
        {item.name}
      </Checkbox>
    </View>
  );

  return (
    <View
      UNSAFE_style={{
        width: '256px',
        height: '100%',
        backgroundColor: 'var(--spectrum-global-color-gray-50)',
        borderRight: '1px solid var(--spectrum-global-color-gray-200)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <NavigationHeader title="Navigation" />
      <View
        UNSAFE_style={{
          flex: 1,
          overflow: 'auto',
          padding: 'var(--spectrum-global-dimension-size-200)',
          gap: 'var(--spectrum-global-dimension-size-200)'
        }}
      >
        <View>
          {mainItems.map(renderNavigationItem)}
        </View>

        <NavigationSection title="Section 1">
          <View>
            {section1Items.map(renderNavigationItem)}
          </View>
        </NavigationSection>

        <NavigationSection title="Section 2">
          <View>
            {section2Items.map(renderNavigationItem)}
          </View>
        </NavigationSection>
      </View>
    </View>
  );
};

export default SideNavigation; 