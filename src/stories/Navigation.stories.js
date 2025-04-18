import React from 'react';
import { SideNavigation } from '../components/SideNavigation';
import { NavigationSection } from '../components/NavigationSection';
import { NavigationItem } from '../components/NavigationItem';

export default {
  title: 'Navigation',
  component: SideNavigation,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <SideNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomizationMode = Template.bind({});
CustomizationMode.args = {
  isCustomizing: true,
};

export const WithHiddenItems = Template.bind({});
WithHiddenItems.args = {
  hiddenItems: [
    { id: 'hidden1', name: 'Hidden Item 1', icon: 'Folder', path: '/hidden1', isVisible: false },
    { id: 'hidden2', name: 'Hidden Item 2', icon: 'Document', path: '/hidden2', isVisible: true },
  ],
};

export const NavigationSectionExample = () => (
  <NavigationSection title="Example Section">
    <div>
      <NavigationItem
        item={{
          id: 'item1',
          name: 'Item 1',
          icon: 'Folder',
          path: '/item1',
          isVisible: true,
        }}
        isCustomizing={true}
      />
      <NavigationItem
        item={{
          id: 'item2',
          name: 'Item 2',
          icon: 'Document',
          path: '/item2',
          isVisible: false,
        }}
        isCustomizing={true}
      />
    </div>
  </NavigationSection>
);

NavigationSectionExample.storyName = 'Navigation Section';

export const NavigationItemExample = () => (
  <div style={{ width: '256px', backgroundColor: 'var(--spectrum-global-color-gray-50)' }}>
    <NavigationItem
      item={{
        id: 'example',
        name: 'Example Item',
        icon: 'Folder',
        path: '/example',
        isVisible: true,
      }}
      isCustomizing={true}
    />
  </div>
);

NavigationItemExample.storyName = 'Navigation Item'; 