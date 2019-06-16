import React from 'react';
import Button from '@material-ui/core/Button'
import {Form, Text } from 'informed';
import {load, save} from '../../../core/client/api/content';
import {getContentTypeMeta} from '../../../core/entities/content-type';

const Edit = ({content}) => (
  <Form initialValues={content} onSubmit={values => {
    save(values.slug, values);
  }}>

    <Button type="submit">Save</Button>
    <Text field="slug" />
    <Text field="data" />

  </Form>
);

Edit.getInitialProps = async ({query}) => {
  const content = await load(query.contentType, query.slug);
  const typeSchema = await getContentTypeMeta(query.contentType);
  return { content, typeSchema };
}

export default Edit;
