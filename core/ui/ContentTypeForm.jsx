import React from 'react';
import { Form } from 'informed';
import { save } from '../../server/content';

const ContentTypeForm = (contentTypeMeta, data = {}) => {

  return (<Form
    initialValues={data}
    onSubmit={values => {
      save(values.slug, values);
    }}
  >
    {({ formApi }) => (contentTypeMeta.fields.map(field => {
      const value = formApi.getValue(field.name) || field.defaultValue;
      return <field.Renderer
        value={value}
        onChange={value => formApi.setValue(field.name, value)}
      > </field.Renderer>
    }))}
  </Form>);
}

export default ContentTypeForm;
