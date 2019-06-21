import React from 'react';
import Link from 'next/link';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LinkIcon from '@material-ui/icons/Link';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  logo: {
    display: 'flex',
    justifyContent: 'center',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    width: 240,
  },
});

const navItems = [{ to: '/admin/content', name: 'Content Types' }];

const AdminSideNav = props => {
  const { classes } = props;

  return (
    <Drawer open variant="permanent">
      <div className={classes.toolbar}>
        <div className={classes.logo}>
          <h1>Flatlify</h1>
        </div>

        <Divider />

        <List>
          {navItems.map(({ to, name }) => (
            <Link href={to} key={name}>
              <ListItem button>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default withStyles(styles)(AdminSideNav);
