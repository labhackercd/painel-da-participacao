import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  toolTip: {
    maxWidth: 220,
  },
  toolTipIcon: {
    color: '#DA7F0B',
  },
}));

export default function Tooltips(props) {
  const defaultClass = useStyles();
  const {
    // eslint-disable-next-line react/prop-types
    toolTipText,
  } = props;

  return (
    <div>
      <Tooltip title={toolTipText} className={defaultClass.toolTip}>
        <IconButton aria-label="informação">
          <InfoIcon className={defaultClass.toolTipIcon} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
