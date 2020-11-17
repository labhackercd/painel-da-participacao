import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { withRouter } from "react-router";

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
    

    return (
      <div>
          Dashboard
      </div>
		)
  }
}


//export default withRouter(withStyles(useStyles2)(Dashboard));
export default withRouter(Dashboard);
