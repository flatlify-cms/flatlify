import React from 'react';
import { Form } from 'informed';
import Button from '@material-ui/core/Button';

import { getValidation } from '../../helpers/validationHelper';

const ContentTypeForm = props => {
  const { typeSchema, initialValues = {}, onSave } = props;

  return (
    <Form initialValues={initialValues} onSubmit={onSave}>
      <div>
        {typeSchema.fields.map((field, index) => {
          return (
            <field.Renderer
              key={field.name}
              field={field.name}
              label={field.name}
              validate={getValidation(field)}
              validateOnChange
            />
          );
        })}
        <Button variant="contained" type="submit">Save</Button>
      </div>
    </Form>
  );
};

export default ContentTypeForm;
