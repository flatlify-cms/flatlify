const React = require('react');
const Input = require('@material-ui/core/Input').default;
const InputLabel = require('@material-ui/core/InputLabel').default;
const S = require('string');
const asField = require('informed').asField;

export const Renderer = asField(({fieldState, fieldApi, label, ...props}) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return <React.Fragment>
    {label && <InputLabel>{S(label).capitalize().s}</InputLabel>}
    <Input {...rest}
      ref={forwardedRef}
      value={!value && value !== 0 ? '' : value}
      onChange={e => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      }}
      style={fieldState.error ? { border: 'solid 1px red' } : null} 
      />
  </React.Fragment>;
});

export const validator = ({value, required}) => {

};

export const defaultValue = '';
