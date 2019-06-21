import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link';
import LayoutWithAdminNav from '../../core/ui/admin/LayoutWithAdminNav/LayoutWithAdminNav';
// import * as content from '../../core/client/api/content';

const App = ({ contentList = [] }) => {
  return (
    <LayoutWithAdminNav>
      <List>
        {contentList.map(contentItem => (
          <ListItem key={`list-item-${contentItem.slug}`}>
            <Link href={`/admin/content/edit?slug=${contentItem.slug}`}>{contentItem.slug}</Link>
          </ListItem>
        ))}
      </List>
    </LayoutWithAdminNav>
  );
};

App.getInitialProps = async () => {
  // const contentList = await content.list();
  return { contentList: [] };
};

export default App;
