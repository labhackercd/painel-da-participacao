import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { withRouter } from "react-router";
import NavBar from './../../components/Dashboard/NavBar';

const useStyles = theme => ({
  body: {
    border: 0,
    width: '100%',
  },
});

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataLoaded: false,
    };
  }
  componentDidMount(){
      this._isMounted = true;
      if(this._isMounted){
          //console.log("Loaded")
      }
  }
  render(){
    const classes = useStyles();
    return (
      <div className={classes.body}>
        <NavBar></NavBar>
      </div>
		)
  }
}
//export default withRouter(withStyles(useStyles2)(Dashboard));
export default withRouter(Dashboard);
