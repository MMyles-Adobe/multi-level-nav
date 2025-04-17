import React from 'react';
import { Provider, defaultTheme, View, Header, Content, Footer, Tabs, TabList, TabPanels, Item } from '@adobe/react-spectrum';
import './App.css';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <View 
        UNSAFE_style={{ 
          display: 'flex', 
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <Header UNSAFE_style={{ flexShrink: 0 }}>
          <View padding="size-200">
            <h1>Multi Level Navigation</h1>
          </View>
        </Header>
        <Content UNSAFE_style={{ flex: 1, overflowY: 'auto' }}>
          <View padding="size-400">
            <Tabs aria-label="Navigation">
              <TabList>
                <Item key="home">Home</Item>
                <Item key="products">Products</Item>
                <Item key="services">Services</Item>
                <Item key="about">About</Item>
                <Item key="contact">Contact</Item>
              </TabList>
              <TabPanels>
                <Item key="home">
                  <View padding="size-200">Home Content</View>
                </Item>
                <Item key="products">
                  <View padding="size-200">Products Content</View>
                </Item>
                <Item key="services">
                  <View padding="size-200">Services Content</View>
                </Item>
                <Item key="about">
                  <View padding="size-200">About Content</View>
                </Item>
                <Item key="contact">
                  <View padding="size-200">Contact Content</View>
                </Item>
              </TabPanels>
            </Tabs>
          </View>
        </Content>
        <Footer UNSAFE_style={{ flexShrink: 0 }}>
          <View padding="size-200">
            <p>Footer Content</p>
          </View>
        </Footer>
      </View>
    </Provider>
  );
}

export default App;
