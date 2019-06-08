import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Link from 'next/link'
import {list} from '../../core/client/api/content';

const App = ({ contentList = [] }) => (
  <List>
    {
      contentList.map(contentItem => <ListItem key={`list-item-${contentItem.slug}`}>
          <Link
            href={`/admin/content/edit?slug=${contentItem.slug}`}
          >
            {contentItem.slug}
          </Link>
        </ListItem>
      )
    }
  </List>
)

App.getInitialProps = async () => {

  const contentList = await list();
  return { contentList};
}

export default App
