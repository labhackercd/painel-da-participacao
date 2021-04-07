import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(() => ({
  toolTip: {
    maxWidth: 220,
  },
}));

export default function Tooltips(props) {
  const {
    // eslint-disable-next-line react/prop-types
    toolTipText, toolTipColor,
  } = props;
  const defaultClass = useStyles({ toolTipColor });

  return (
    <div>
      <Tooltip title={toolTipText} className={defaultClass.toolTip}>
        <IconButton aria-label="informação">
          <InfoIcon aria-label="informação" style={{ color: toolTipColor }} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
