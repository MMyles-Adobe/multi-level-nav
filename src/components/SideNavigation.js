import React from 'react';
import { View, Item, ListView, Text } from '@adobe/react-spectrum';
import NavigationHeader from './NavigationHeader';
import NavigationSection from './NavigationSection';

const SideNavigation = () => {
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
        <ListView
          aria-label="Main Navigation"
          items={mainItems}
          selectionMode="single"
          UNSAFE_style={{
            gap: 'var(--spectrum-global-dimension-size-100)'
          }}
        >
          {(item) => (
            <Item key={item.id} textValue={item.name}>
              <Text>{item.name}</Text>
            </Item>
          )}
        </ListView>

        <NavigationSection title="Section 1">
          <ListView
            aria-label="Section 1 Navigation"
            items={section1Items}
            selectionMode="single"
            UNSAFE_style={{
              gap: 'var(--spectrum-global-dimension-size-100)',
              paddingLeft: 'var(--spectrum-global-dimension-size-200)'
            }}
          >
            {(item) => (
              <Item key={item.id} textValue={item.name}>
                <Text>{item.name}</Text>
              </Item>
            )}
          </ListView>
        </NavigationSection>

        <NavigationSection title="Section 2">
          <ListView
            aria-label="Section 2 Navigation"
            items={section2Items}
            selectionMode="single"
            UNSAFE_style={{
              gap: 'var(--spectrum-global-dimension-size-100)',
              paddingLeft: 'var(--spectrum-global-dimension-size-200)'
            }}
          >
            {(item) => (
              <Item key={item.id} textValue={item.name}>
                <Text>{item.name}</Text>
              </Item>
            )}
          </ListView>
        </NavigationSection>
      </View>
    </View>
  );
};

export default SideNavigation; 