import React from 'react';
import Router from 'next/router';
import { load, save } from '../../../core/client/api/content';
import { getContentTypeMeta } from '../../../core/entities/content-type';
import ContentTypeForm from '../../../core/ui/ContentTypeForm';

const Edit = ({ content, typeSchema }) => (
  <ContentTypeForm
    initialValues={content}
    typeSchema={typeSchema}
    onSave={values => {
      values.slug = values.slug.trim();
      save(content.type, content.slug, { type: content.type, ...values }).then(
        response => {
          Router.push('/admin/content/list?contentType=' + content.type);
        },
        err => {
          console.error(err);
        },
      );
    }}
  />
);

Edit.getInitialProps = async ({ query }) => {
  const content = await load(query.contentType, query.slug);
  const typeSchema = await getContentTypeMeta(query.contentType);
  const slug = query.slug;

  return { content, typeSchema, slug };
};

export default Edit;
