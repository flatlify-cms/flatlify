import React, { useState } from 'react';

import { Renderer as Text } from './Text';

const minRows = 3;

export const Renderer = props => {
  const [rows, setRows] = useState(minRows);

  return (
    <Text multiline rows={rows} onChange={e => handleRowsChange(e, setRows, minRows)} {...props} />
  );
};

const handleRowsChange = (e, setRows, minRows) => {
  const lineHeight = parseInt(getComputedStyle(e.target).lineHeight);
  const previousRows = e.target.rows;
  e.target.rows = minRows;
  const currentRows = e.target.scrollHeight / lineHeight;

  if (currentRows === previousRows) {
    e.target.rows = currentRows;
  }

  setRows(currentRows);
};
