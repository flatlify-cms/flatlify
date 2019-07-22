import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { saveMedia, loadMedia } from '../../core/client/api/content';
import InputLabel from '@material-ui/core/InputLabel';
import S from 'string';
import { asField } from 'informed';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Clear';
import DownloadIcon from '@material-ui/icons/SaveAlt';
import { colors } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  previewWrapper: {
    margin: 20,
    height: 180,
    width: 350,
    position: 'relative',
    '&:hover': {
      opacity: 0.6,
    },
  },
  imgWrapper: {
    height: '100%',
    width: '100%',
  },
  dropZoneWrapper: {
    height: 180,
    width: 350,
    backgroundColor: colors.grey[200],
    padding: 10,
    margin: 20,
    '&:hover': {
      backgroundColor: colors.grey[100],
    },
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    border: '1px dashed silver',
  },
  input: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0,
  },
  removeIcon: {
    position: 'absolute',
    right: 5,
    cursor: 'pointer',
  },
  downloadIcon: {
    height: 30,
    width: 30,
  },
  dragInfoLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: 'black',
  },
  clickInfoLabel: {
    fontSize: 10,
    color: colors.grey[500],
    paddingBottom: 10,
  },
});

export const Renderer = asField(({ fieldState, fieldApi, label, ...props }) => {
  useEffect(() => {
    loadMedia(value).then(res => res && setMediaUrl(`/static/${value}`));
  }, [value])
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  const [mediaUrl, setMediaUrl] = useState(null);
  const [mediaHover, setMediaHover] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {label && <InputLabel>{S(label).capitalize().s}</InputLabel>}
      {mediaUrl === null ? (
        <div
          className={classes.dropZoneWrapper}
          onClick={() => Router.push('/admin/media')}
          onKeyUp={() => {}}
          role="button"
          tabIndex="0"
        >
          <div className={classes.inputWrapper}>
            <input
              {...rest}
              ref={forwardedRef}
              type="file"
              multiple={true}
              onClick={e => e.preventDefault()}
              onChange={e => handleChange(e, setValue, setMediaUrl)}
              onBlur={e => {
                setTouched(true);
                if (onBlur) {
                  onBlur(e);
                }
              }}
              className={classes.input}
            />
            <div className={classes.dragInfoLabel}>DRAG AND DROP A FILE</div>
            <div className={classes.clickInfoLabel}>(OR CLICK TO BROWSE)</div>
            <DownloadIcon className={classes.downloadIcon} />
          </div>
        </div>
      ) : (
        <div
          className={classes.previewWrapper}
          onKeyUp={() => {}}
          role="button"
          tabIndex="0"
          onMouseEnter={() => setMediaHover(true)}
          onMouseLeave={() => setMediaHover(false)}
        >
          <img src={mediaUrl} className={classes.imgWrapper} alt="" />
          {mediaHover && (
            <RemoveIcon
              onClick={() => handleRemoveMedia(setMediaUrl, setValue)}
              className={classes.removeIcon}
            />
          )}
        </div>
      )}
    </div>
  );
});

const handleChange = (e, setValue, setMediaUrl) => {
  const file = e.target.files[0];
  const data = new FormData();
  data.append('file', file);
  setValue(`${file.name}`);
  saveMedia(data);
  setMediaUrl(URL.createObjectURL(file));
};

const handleRemoveMedia = (setMediaUrl, setValue) => {
  setMediaUrl(null);
  setValue('');
};

export const validator = ({ value, required }) => {};

export const defaultValue = '';
