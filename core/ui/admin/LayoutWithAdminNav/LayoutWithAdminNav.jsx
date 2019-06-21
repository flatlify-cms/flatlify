import React from 'react';
import PropTypes from 'prop-types';

import { AdminSideNav } from '../AdminSideNav';

const LayoutWithAdminNav = props => {
  const { children } = props;
  return (
    <div>
      <AdminSideNav />
      {children}
    </div>
  );
};

LayoutWithAdminNav.propTypes = {
  children: PropTypes.node.isRequired,
};
LayoutWithAdminNav.defaultProps = {};

export default LayoutWithAdminNav;
