import React from 'react';
import { Grid, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		width: '100%',
	},
	box: {
		height: '3vh',
		borderRadius: '5px 5px 0 0',
	},
	container: {
    backgroundColor: '#000',
    borderRadius: '0 0 5px 5px',
	},
}))
export default function ContentBox(props) {
    const classes = useStyles()
    const { height, paddingRight, paddingLeft, listView, download } =  props
    return (
      <Grid container className={classes.root} style={{paddingRight: paddingRight, paddingLeft: paddingLeft}}>
       <Grid item md={12}>
         <Box className={classes.box} color="#252525" bgcolor="#252525">
          <Grid container>
            <Grid item md={2}></Grid>
            <Grid item md={9}></Grid>
            <Grid item md={1}></Grid>
          </Grid>
         </Box>
         <div className={classes.container} style={{height: height}}>
         </div>
       </Grid>
     </Grid>
    )
}
