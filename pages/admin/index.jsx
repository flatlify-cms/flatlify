import React from 'react';
import LayoutWithAdminNav from '../../core/ui/admin/LayoutWithAdminNav/LayoutWithAdminNav';

const App = ({}) => {
  return (
    <LayoutWithAdminNav>
      <h1>Admin Page</h1>
    </LayoutWithAdminNav>
  );
};

App.getInitialProps = async () => {
  return {};
};

export default App;
