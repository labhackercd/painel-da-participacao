import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
// import ToolContent from '../src/components/ToolContent';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
  },
}));

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
      <>{children}</>
      )}
    </div>
  );
}
/*
      <TabPanel id="tabTools" value={value} index={0}>
        <ToolContent page={props.page}> </ToolContent>
      </TabPanel>
*/

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleTabPanelChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.body}>
      <NavBar value={value} handleTabPanelChange={handleTabPanelChange} />
      <TabPanel id="tabTools" value={value} index={0}>
        Item 1
      </TabPanel>
      <TabPanel id="tabDocuments" value={value} index={2}>
        Item Three
      </TabPanel>
      <Footer />
    </div>
  );
}

TabPanel.defaultProps = {
  children: React.createElement('div'),
  value: 0,
  index: 0,
};

TabPanel.propTypes = {
  children: PropTypes.elementType,
  value: PropTypes.number,
  index: PropTypes.number,
};
