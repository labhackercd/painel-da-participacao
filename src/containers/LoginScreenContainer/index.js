import React from 'react';
//import {Redirect } from "react-router-dom";

import { Grid, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
//import axiosInstance from './../../auth/axiosApi.js'
import {APPLICATION_RESET_PASSWORD_URL} from './../../api_urls';
//import {DASHBOARD_PAGE_URL} from './../../api_urls';

//import {sendLoginRequest, verifyUserToken} from './sendLoginRequest'
import Alert from '@material-ui/lab/Alert';
import CamaraLogoIcon from './../../assets/LoginScreenContainer/logo_camara.svg';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';


const useStyles = theme => ({
  body: {
    backgroundColor: "#121212",
    height: '100vh',
    fontFamily: 'Open Sans',
    position: 'fixed',
    display: 'flex',
    border: 0,
  },
  loginBox: {
    display: 'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    marginTop: "12rem",
    [theme.breakpoints.up('md')]: {
      marginLeft:"6rem"
    },
  },
  textField: {
    color: 'white',
    borderRadius: '4px 4px 0 0',
    margin: '1rem 0 0 0',
    backgroundColor: '#979797',
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#666"
    }
  },
  loginButton: {
    backgroundColor: '#00C354',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: "#00AF82"
    },
    justifyContent: 'flex-start',
  },
  forgotPassword: {
    color: 'white',
    justifyContent: 'flex-end',
  },
  camaraLogo: {
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      margin: '10rem 0 -10rem 0',
    },
    [theme.breakpoints.down('md')]: {
      margin: '2rem 0 0 0',
    },
  }
});



class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:"" ,
      succesfullLogin:false,
      error:{
        status:false,
        message:"Erro - Email ou senha incorreta. Tente novamente."
      },

    };
    //this.loginMethod = this.loginMethod.bind(this);
  }
 /*
  async verifyIfUserIsAlreadyLogged(){
    try{
      const result = await verifyUserToken( localStorage.getItem('access_token'));
      if(result.status===200){
        this.setState({succesfullLogin:true})
      }
    }catch(e){
      this.setState({succesfullLogin:false})
    }
  }*/
/*
  async loginMethod(event){
    //event.preventDefault();
    //const history = useHistory();
  
    try{
      const result = await sendLoginRequest(this.state.email,this.state.password );
      if(result.status===200){
        axiosInstance.defaults.headers['Authorization'] = "JWT " + result.data.access;
        localStorage.setItem('access_token', result.data.access);
        localStorage.setItem('refresh_token', result.data.refresh);
        this.setState({succesfullLogin:true})
        
      }
    }catch(e){
      if(e.name === "TypeError"){
        this.setState({error:{status:true, message:"Erro no servidor. Tente novamente em alguns minutos."}})
      }else if(e.name === "Error"){
        this.setState({error:{status:true, message:" Email ou senha incorretos. Tente novamente."}})
      }
    }
  }*/

  componentDidMount(){
    this._isMounted = true;
    /*
    if(this._isMounted){
        //this.verifyIfUserIsAlreadyLogged();
    }*/
}

  handleEmailFormChange = (e) =>
  {
    this.setState({email: e.target.value});
  };

  handlePasswordFormChange = (e) =>
  {
    this.setState({password: e.target.value});
  };

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword})
  };

  render(){
    const { classes } = this.props;

      /*if(this.state.succesfullLogin) {
        return <Redirect to={DASHBOARD_PAGE_URL}/>
      }*/
      return (
        <div>
            <Grid container className={classes.body}>
              <div className={classes.loginArea}>
                <Box className={classes.loginBox}>
                    <Grid container  style={{display: 'flex', justifyContent: 'space-between'}}>
                      <Box className="formItems" marginTop={2} marginX={2}>
                        <Grid item xs={12} md={8}><Typography  variant="h1" style={{color:"#FFFFFF"}}>Dashboard de dados da participação popular</Typography></Grid>
                        <Grid item xs={12} md={4}>
                          <Box paddingTop={2} width="100%"  paddingBottom={2} >
                            {this.state.error.status ? <Alert severity="error">{this.state.error.message}</Alert> : null}
                            <TextField InputProps={{style: {color: "white"}}} className={classes.textField} variant="filled" value={this.state.email} label="Email" id="email" type="email" onChange={(e)=>{this.handleEmailFormChange(e)}} fullWidth autoFocus required />
                            <TextField className={classes.textField} variant="filled" value={this.state.password} label="Senha" id="password" onChange={(e)=>{this.handlePasswordFormChange(e)}} fullWidth required type={this.state.showPassword ? 'text' : 'password'}
                               InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton aria-label="toggle password visibility" onClick={this.handleClickShowPassword} edge="end">
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                  style:{color: "white"}
                                }}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Grid container>
                            <Grid item xs={6}><Button style= {{textTransform: 'capitalize'}} className={classes.loginButton} onClick={this.loginMethod} variant="contained">Acessar</Button></Grid>
                            <Grid item xs={6}>
                              <Box display="flex" flexDirection="row-reverse"><a href={APPLICATION_RESET_PASSWORD_URL} className={classes.forgotPassword}>Esqueci a senha</a></Box>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item className={classes.camaraLogo}>
                          <img src={CamaraLogoIcon} alt="Logo da Câmara dos Deputados"/>
                        </Grid>
                      </Box>
                    </Grid>
                </Box>
              </div>
            </Grid>
        
        </div>
      )
  }

}

LoginScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(LoginScreen);