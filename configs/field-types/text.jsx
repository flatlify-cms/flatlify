const React = require('react');
const Input = require('@material-ui/core/Input');

export const Renderer = ({onChange, value}) => {
  return <Input onChange={onChange} value={value} />;
};

export const validator = ({value, required}) => {

};

export const defaultValue = '';
