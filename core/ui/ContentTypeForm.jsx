import React from 'react';
import { Form } from 'informed';
import Button from '@material-ui/core/Button';

const ContentTypeForm = ({ typeSchema, initialValues = {}, onSave }) => {
  return (
    <Form initialValues={initialValues} onSubmit={onSave}>
      <div>
        {typeSchema.fields.map((field, index) => {
          return <field.Renderer key={index} field={field.name} label={field.name} />;
        })}
        <Button type="submit">Save</Button>
      </div>
    </Form>
  );
};

export default ContentTypeForm;
