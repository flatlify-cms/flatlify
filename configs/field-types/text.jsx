import React from 'react';
import Input from '@material-ui/core/Input';

const Renderer = ({onChange, value}) => {
  return <Input onChange={onChange} value={value} />;
};

const validator = ({value, required}) => {

};

module.exports = {
  Renderer,
  validator,
  defaultValue: ''
};
