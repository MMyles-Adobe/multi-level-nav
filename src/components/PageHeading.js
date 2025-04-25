import React from 'react';
import { Heading } from '@adobe/react-spectrum';

const PageHeading = ({ children }) => {
  return (
    <Heading 
      level={1} 
      margin="size-0"
      marginBottom="size-200"
    >
      {children}
    </Heading>
  );
};

export default PageHeading; 