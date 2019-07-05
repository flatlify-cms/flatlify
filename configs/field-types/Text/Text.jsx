import React from 'react';
import S from 'string';
import { asField } from 'informed';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { colors } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    marginBottom: 10,
  },
  errorText: {
    color: colors.red[500],
  },
});

export const Renderer = asField(props => {
  const { fieldState, fieldApi, label, ...otherProps } = props;
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = otherProps;

  const labelText = label && S(label).capitalize().s;

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {label && <InputLabel>{}</InputLabel>}
      <TextField
        {...rest}
        ref={forwardedRef}
        value={!value && value !== 0 ? '' : value}
        error={!!fieldState.error}
        label={labelText}
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
        variant="outlined"
      />
      {fieldState.error && (
        <FormHelperText classes={{ root: classes.errorText }}>{fieldState.error}</FormHelperText>
      )}
    </div>
  );
});

export const validator = ({ value, required }) => {};

export const defaultValue = '';
