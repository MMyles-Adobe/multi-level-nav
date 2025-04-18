import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import SideNavigation from './components/SideNavigation';
import { View } from '@adobe/react-spectrum';
import HomePage from './pages/HomePage';
import QuickNavPage from './pages/QuickNavPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <View
        UNSAFE_style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <SideNavigation />
        <View
          UNSAFE_style={{
            flex: 1,
            padding: 'var(--spectrum-global-dimension-size-400)',
            overflow: 'auto'
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/quick-nav" element={<QuickNavPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </View>
      </View>
    </Provider>
  );
}

export default App;
