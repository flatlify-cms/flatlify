import React from 'react';
import Button from '@material-ui/core/Button'
import {Form, Text } from 'informed';
import {load, save} from '../../../core/client/api/content';

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
  const content = await load(query.slug);
  const type = await load(query.type);
  return { content };
}

export default Edit;
