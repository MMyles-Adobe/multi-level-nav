import React, { useMemo } from 'react';
import { View } from '@adobe/react-spectrum';
import NavigationHeader from './NavigationHeader';
import NavigationSection from './NavigationSection';
import NavigationItem from './NavigationItem';
import Home from '@spectrum-icons/workflow/Home';
import ShoppingCart from '@spectrum-icons/workflow/ShoppingCart';
import Apps from '@spectrum-icons/workflow/Apps';
import Info from '@spectrum-icons/workflow/Info';
import User from '@spectrum-icons/workflow/User';
import Star from '@spectrum-icons/workflow/Star';

const SideNavigation = () => {
  const mainItems = useMemo(() => [
    { id: 'home', name: 'Home', icon: Home, path: '/home' },
    { id: 'quick-nav', name: 'My quick navigation', icon: Star, path: '/quick-nav' }
  ], []);

  const section1Items = useMemo(() => [
    { id: 'products', name: 'Products', icon: ShoppingCart, path: '/products' },
    { id: 'services', name: 'Services', icon: Apps, path: '/services' }
  ], []);

  const section2Items = useMemo(() => [
    { id: 'about', name: 'About', icon: Info, path: '/about' },
    { id: 'contact', name: 'Contact', icon: User, path: '/contact' }
  ], []);

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
          {mainItems.map(item => (
            <NavigationItem key={item.id} item={item} />
          ))}
        </View>

        <NavigationSection title="Section 1">
          <View>
            {section1Items.map(item => (
              <NavigationItem key={item.id} item={item} />
            ))}
          </View>
        </NavigationSection>

        <NavigationSection title="Section 2">
          <View>
            {section2Items.map(item => (
              <NavigationItem key={item.id} item={item} />
            ))}
          </View>
        </NavigationSection>
      </View>
    </View>
  );
};

export default SideNavigation; 