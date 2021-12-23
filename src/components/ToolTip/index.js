import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import useMobile from '../../hooks/useMobile';

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    margin: 0,
    backgroundColor: (props) => props.backgroundcolor,
    color: 'black',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
  },
}))(Tooltip);

export default function Tooltips(props) {
  const {
    // eslint-disable-next-line react/prop-types
    toolTipText, toolTipColor, toolTipAriaLabel,
  } = props;
  const [open, setOpen] = useState(false);
  const { mobileView, tabletView } = useMobile();
  const handleOpen = () => (!mobileView && !tabletView) && setOpen(true);
  const handleClose = () => setOpen(false);

  function toolTipHtmlTitle(title) {
    return (
      <>
        {title}
      </>
    );
  }

  return (
    <div>
      <HtmlTooltip
        title={toolTipHtmlTitle(toolTipText)}
        backgroundcolor={toolTipColor}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <IconButton aria-label={toolTipAriaLabel} style={{ padding: 0, margin: 0 }}>
          <InfoIcon aria-label={toolTipAriaLabel} style={{ color: toolTipColor }} />
        </IconButton>
      </HtmlTooltip>
    </div>
  );
}
