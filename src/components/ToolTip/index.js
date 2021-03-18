import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#DA7F0B',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
  },
}))(Tooltip);

export default function Tooltips(props) {
  const {
    // eslint-disable-next-line react/prop-types
    toolTipText,
  } = props;

  return (
    <div>
      <HtmlTooltip
        title={toolTipText}
      >
        <IconButton aria-label="informação">
          <InfoIcon style={{ color: '#DA7F0B' }} />
        </IconButton>
      </HtmlTooltip>
    </div>
  );
}
