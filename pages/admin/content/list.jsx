import React from 'react';
import { list } from '../../../core/client/api/content';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link';

const ContentList = ({ contentList, contentType }) => {
  return (
    <List>
      {contentList.map(entry => (
        <ListItem key={`list-item-${entry.slug}`}>
          <Link href={`/admin/content/edit?slug=${entry.slug}&contentType=${contentType}`}>
            {entry.slug}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

ContentList.getInitialProps = async ({ query }) => {
  const contentList = await list(query.contentType);
  return {
    contentList,
    contentType: query.contentType,
  };
};

export default ContentList;
