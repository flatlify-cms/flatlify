import React from 'react';
import {listContentTypes} from '../../../core/entities/content-type';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Link from 'next/link'

const ContentTypeList = ({contentTypes}) => {
  return (<List>
    {
      Object.keys(contentTypes).map(contentType => <ListItem key={`list-item-${contentType}`}>
          <Link
            href={`/admin/content/list?contentType=${contentType}`}
          >
            {contentType}
          </Link>
        </ListItem>
      )
    }
  </List>);
}

ContentTypeList.getInitialProps = async () => {

  const contentTypes = listContentTypes();
  console.log(contentTypes);
  return { contentTypes };
}

export default ContentTypeList;
