const React = require('react');
const useState = require('react').useState;
const Input = require('@material-ui/core/Input').default;
const InputLabel = require('@material-ui/core/InputLabel').default;
const S = require('string');
const asField = require('informed').asField;

export const Renderer = asField(({ fieldState, fieldApi, label, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  const minRows = 3;
  const [rows, setRows] = useState(minRows);

  return (
    <React.Fragment>
      {label && <InputLabel>{S(label).capitalize().s}</InputLabel>}
      <Input
        {...rest}
        ref={forwardedRef}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          handleRowsChange(e, setRows, minRows);
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
        multiline={true}
        rows={rows}
        style={fieldState.error ? { border: 'solid 1px red', resize: 'none' } : null}
      />
    </React.Fragment>
  );
});

const handleRowsChange = (e, setRows, minRows) => {
  const lineHeight = 19;
  const previousRows = e.target.rows;
  e.target.rows = minRows;
  const currentRows = e.target.scrollHeight / lineHeight;

  if (currentRows === previousRows) {
    e.target.rows = currentRows;
  }

  setRows(currentRows);
};

export const validator = ({ value, required }) => {};

export const defaultValue = '';
