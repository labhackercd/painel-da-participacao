import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Typography, IconButton,
} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import { useStyles } from './style';

export default function InfoModal(props) {
  const classes = useStyles();

  const {
    // eslint-disable-next-line react/prop-types
    open, handleClose, title, toolTipText, toolTipColor,
  } = props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.container}>
        <Box className={classes.modal}>
          <IconButton
            data-testid="close-icon"
            onClick={handleClose}
            className={classes.close}
          >
            <CloseIcon className={classes.iconClose} />
          </IconButton>
          <IconButton className={classes.info} style={{ padding: 0 }}>
            <InfoIcon className={classes.iconInfo} style={{ color: toolTipColor }} />
          </IconButton>
          <Typography variant="h4" className={classes.titleModal}>
            <Box fontWeight="fontWeightBold" display="flex">
              {title}
            </Box>
          </Typography>
          <Typography id="modal-modal-description" className={classes.descriptionModal}>
            {toolTipText}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

InfoModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  toolTipText: PropTypes.string,
  toolTipColor: PropTypes.string,
};

InfoModal.defaultProps = {
  open: false,
  handleClose: () => {},
  title: '',
  toolTipText: '',
  toolTipColor: '',
};
