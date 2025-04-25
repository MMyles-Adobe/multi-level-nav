import React from 'react';
import { Breadcrumbs, Item, View } from '@adobe/react-spectrum';
import { useLocation } from 'react-router-dom';

const PageBreadcrumbs = () => {
  const location = useLocation();
  
  const formatObjectName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const generateBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(path => path);
    let breadcrumbs = [];
    let currentPath = '';
    
    // If we're on the home page, just show single Home node
    if (paths.length === 0 || (paths.length === 1 && paths[0] === 'home')) {
      return [{
        label: 'Home',
        path: '/home'
      }];
    }

    // For other pages, start with Home as parent
    breadcrumbs.push({
      label: 'Home',
      path: '/home'
    });

    paths.forEach((path, index) => {
      // Handle collection pages and their detail pages
      if (['project', 'portfolio', 'program', 'campaign'].includes(path)) {
        // Add the collection page (parent)
        const collectionLabel = path.charAt(0).toUpperCase() + path.slice(1) + 's';
        const collectionPath = `/${path}s`;
        breadcrumbs.push({
          label: collectionLabel,
          path: collectionPath
        });

        // If there's a specific object and a nav item, combine them
        if (paths[index + 1] && paths[index + 2]) {
          const objectName = formatObjectName(paths[index + 1]);
          const navItemName = formatObjectName(paths[index + 2]);
          const objectPath = `/${path}/${paths[index + 1]}/${paths[index + 2]}`;
          
          breadcrumbs.push({
            label: `${objectName}: ${navItemName}`,
            path: objectPath
          });
        }
      }
      // Handle regular pages (not object detail pages)
      else if (!['project', 'portfolio', 'program', 'campaign'].includes(paths[index - 1]) && 
               !['project', 'portfolio', 'program', 'campaign'].includes(paths[index - 2])) {
        currentPath += `/${path}`;
        const label = formatObjectName(path);
        breadcrumbs.push({
          label: label,
          path: currentPath
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <View UNSAFE_style={{ textAlign: 'left' }} width="100%" marginBottom="size-100">
      <Breadcrumbs 
        size="S"
        onAction={key => window.location.hash = key}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <Item
            key={breadcrumb.path}
            href={`#${breadcrumb.path}`}
          >
            {breadcrumb.label}
          </Item>
        ))}
      </Breadcrumbs>
    </View>
  );
};

export default PageBreadcrumbs; 