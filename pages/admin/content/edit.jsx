import React from 'react';

import { load, save } from '../../../core/client/api/content';
import { getContentTypeMeta } from '../../../core/entities/content-type';
import { getFieldComponentByType } from '../../../core/entities/field-type';
import ContentTypeForm from '../../../core/ui/ContentTypeForm';

const Edit = ({ content, typeSchema }) => {
  return (
    <ContentTypeForm
      initialValues={content}
      typeSchema={{
        ...typeSchema,
        fields: typeSchema.fields.map(field => ({
          ...field,
          Renderer: getFieldComponentByType(field.type),
        })),
      }}
      onSave={values => {
        save(content.type, values.slug, values);
      }}
    />
  );
};

Edit.getInitialProps = async ({ query }) => {
  const content = await load(query.contentType, query.slug);
  const typeSchema = await getContentTypeMeta(query.contentType);

  return {
    content,
    typeSchema,
  };
};

export default Edit;
