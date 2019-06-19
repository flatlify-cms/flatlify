import React from 'react';
import Button from '@material-ui/core/Button'
import {Form, Text } from 'informed';
import {load, save} from '../../../core/client/api/content';
import {getContentTypeMeta} from '../../../core/entities/content-type';
import ContentTypeForm from '../../../core/ui/ContentTypeForm';

const Edit = ({content, typeSchema}) => (
  <ContentTypeForm 
    initialValues={content} 
    typeSchema={typeSchema}
    onSave={values => {
      save(content.type, values.slug, values);
    }}
  />);

Edit.getInitialProps = async ({query}) => {
  const content = await load(query.contentType, query.slug);
  const typeSchema = await getContentTypeMeta(query.contentType);
  return { content, typeSchema };
}

export default Edit;
