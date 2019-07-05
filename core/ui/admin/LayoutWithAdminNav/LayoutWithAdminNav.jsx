import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { AdminSideNav } from '../AdminSideNav';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
  },
  sideNav: {
    flexBasis: 240,
  },
  content: {
    flexGrow: 1,
  },
});

const LayoutWithAdminNav = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.sideNav}>
        <AdminSideNav />
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

LayoutWithAdminNav.propTypes = {
  children: PropTypes.node.isRequired,
};
LayoutWithAdminNav.defaultProps = {};

export default LayoutWithAdminNav;
