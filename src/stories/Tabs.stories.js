import React from 'react';
import { Provider, defaultTheme, View, Header, Footer, Tabs, TabList, TabPanels, Item } from '@adobe/react-spectrum';
import { HomeTab } from '../components/tabs/HomeTab';
import { ProductsTab } from '../components/tabs/ProductsTab';
import { ServicesTab } from '../components/tabs/ServicesTab';
import { AboutTab } from '../components/tabs/AboutTab';
import { ContactTab } from '../components/tabs/ContactTab';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => (
  <Provider theme={defaultTheme}>
    <View 
      UNSAFE_style={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100vh',
        width: '100%'
      }}
    >
      <Header UNSAFE_style={{ flexShrink: 0 }}>
        <View padding="size-200">
          <h1>Multi Level Navigation</h1>
        </View>
      </Header>
      <View 
        UNSAFE_style={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        <Tabs aria-label="Navigation" UNSAFE_style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0 16px' }}>
          <TabList>
            <Item key="home">Home</Item>
            <Item key="products">Products</Item>
            <Item key="services">Services</Item>
            <Item key="about">About</Item>
            <Item key="contact">Contact</Item>
          </TabList>
          <TabPanels UNSAFE_style={{ flex: 1, overflow: 'auto' }}>
            <Item key="home">
              <HomeTab />
            </Item>
            <Item key="products">
              <ProductsTab />
            </Item>
            <Item key="services">
              <ServicesTab />
            </Item>
            <Item key="about">
              <AboutTab />
            </Item>
            <Item key="contact">
              <ContactTab />
            </Item>
          </TabPanels>
        </Tabs>
      </View>
      <Footer UNSAFE_style={{ flexShrink: 0 }}>
        <View padding="size-200">
          <p>Footer Content</p>
        </View>
      </Footer>
    </View>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {}; 