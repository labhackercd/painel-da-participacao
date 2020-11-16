import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

import { fetchData, changeBroadcastingStatus } from './APIHandler';
import { withRouter } from "react-router";

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dashboardId: this.props.match.params.dashboardId,
      sessionInfo: '',
      dataLoaded: false,
      broadcastingOnline: false,
    };
  }


  fetchSessionInfo = async term => {
    try{
      const response = await fetchData(this.props.match.params.dashboardId);
      this.setState({sessionInfo:response.data});
      this.setState({dataLoaded:true});
      this.setState({broadcastingOnline: response.data.enable});
      //console.log("Session info", this.state.sessionInfo)
    }catch(e){
      console.log("erro ao obter informações da sessão")
    }
  };

  componentDidMount(){
      this._isMounted = true;
      //console.log(this.props.match.params.dashboardId);

      if(this._isMounted){
          this.fetchSessionInfo();
      }
  }

  setBroadcastingStatus = async (broadcastingStatus) => {
    try {
      let dashboardInfo = this.state.sessionInfo;
      const response = await changeBroadcastingStatus(dashboardInfo, broadcastingStatus);
      this.setState({broadcastingOnline: response.data.enable});
    } catch(e) {
      console.log("não foi possível inicializar ou finalizar a transmissão");
    }
  }

  render(){
    //console.log("dashboard",this.state.sessionInfo )
    
    if(!this.state.dataLoaded){
      return (<Box display="flex" justifyContent="center" alignItems="center"><CircularProgress></CircularProgress></Box>)
    }

    return (
      <div>
          Dashboard
      </div>
		)
  }
}


//export default withRouter(withStyles(useStyles2)(Dashboard));
export default withRouter(Dashboard);
