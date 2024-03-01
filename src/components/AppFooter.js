
import React from 'react';
import { CFooter } from '@coreui/react';

const AppFooter = () => {
  return (
    <CFooter>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="https://www.unisys.com" target="_blank" rel="noopener noreferrer">
          <img src="/Footer.png" alt="Footer" style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
        </a>
        <span style={{ fontSize: '0.8em' }}>&copy; Copyright Unisys</span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
