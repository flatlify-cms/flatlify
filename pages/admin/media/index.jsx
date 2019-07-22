import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { removeMedia, mediaList, saveMedia } from '../../../core/client/api/content';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  card: {
    height: 250,
    width: 250,
    borderRadius: 10,
    padding: 10,
    position: 'relative',
  },
  img: {
    height: 250,
    width: 250,
    borderRadius: 10,
    '&:hover': {
      opacity: 0.5,
    },
  },
  cardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 700,
    padding: 20,
  },
  removeIcon: {
    right: 20,
    top: 10,
    position: 'absolute',
  },
  upload: {
    opacity: 0,
    position: 'absolute',
    zIndex: -1
  },
  uploadLabel: {
    cursor: 'pointer',
    fontSize: 20,
    fontWeight: 700,
    padding: 20,
  },
  uploadWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  labelWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
});

const MediaLibrary = () => {
  useEffect(() => {
    mediaList().then(data => setMediaArray(data));
  }, []);

  const classes = useStyles();
  const [cardHover, setCardHover] = useState(false);
  const [mediaArray, setMediaArray] = useState([]);

  const handleChange = e => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    saveMedia(data);
    mediaList().then(data => setMediaArray(data));
  };

  const renderLibrary = mediaArray => {
    const cards = mediaArray.map((media, index) => (
      <div
        key={index}
        className={classes.card}
        onClick={() => Router.back()}
        onKeyUp={() => {}}
        role="button"
        tabIndex="0"
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
      >
        <img src={`/static/${media}`} className={classes.img} alt='' />
        {cardHover && <RemoveIcon className={classes.removeIcon} onClick={() => {
          removeMedia(media);
          mediaList().then(data => setMediaArray(data));
          }}/>}
      </div>
    ));
    return cards;
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.labelWrapper}>
        <div className={classes.label}>Media library</div>
        <div className={classes.uploadWrapper}>
        <label className={classes.uploadLabel} htmlFor="upload">Upload</label>
        <input className={classes.upload} type="file" name="photo" id="upload" onChange={e => handleChange(e)} />
      </div>
      </div>
      <div className={classes.cardsWrapper}>{renderLibrary(mediaArray)}</div>
    </div>
  );
};

export default MediaLibrary;
