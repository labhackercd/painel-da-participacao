import React, {useState,useEffect} from 'react';
import { Grid, Typography,Box} from '@material-ui/core';
import ChartDataFrame from './../ChartDataFrame';
import { makeStyles } from '@material-ui/core/styles';
import fetchDataFromAPI from './../DataFetcher';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    overflow: 'auto',
    flexGrow: 1,
    padding: '2.5rem 0 0 0',
  },
  contentBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  spacing: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  positionStats: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

function StyledTotalNumber(props) {

  return (
      <Typography variant="h2" style={{color: '#FFF', alignSelf: 'center'}}>{props.number}</Typography>
  )
}

export default function Audiencias(props) {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [audienciasData, setAudienciasData] = useState({})

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await fetchDataFromAPI({year:  '', semester: '', month: ''});
    const audienciasData = response.general_analysis.audiencias.data;
    setData(response)
    setAudienciasData(audienciasData)
  }

  return (
        <Grid container>
          <Grid item md={3} className={classes.spacing}>
            <ChartDataFrame height="15vh"
                        paddingRight="0.5rem"
                        listView={false}
                        download={false}
                        title="Total usuários"
                        className={classes.positionStats}>
                        {data ? <StyledTotalNumber number={data.users_total}/> : ''}
            </ChartDataFrame>
          </Grid>
          <Grid item md={3} className={classes.spacing}>
            <ChartDataFrame height="15vh"
                        paddingLeft="0.5rem"
                        listView={false}
                        download={false}
                        title="Total Audiências">
                        {data ? <StyledTotalNumber number={data.audiencias_total}/> : ''}
            </ChartDataFrame>
          </Grid>
          <Grid item md={3} className={classes.spacing}>
            <ChartDataFrame height="15vh"
                        paddingLeft="0.5rem"
                        listView={false}
                        download={false}
                        title="Total mensagens">
                        {data ? <StyledTotalNumber number={data.messages_total}/> : ''}
                        </ChartDataFrame>
          </Grid>
          <Grid item md={3} className={classes.spacing}>
            <ChartDataFrame height="15vh"
                        paddingLeft="0.5rem"
                        title="Total perguntas"
                        listView={false}
                        download={false}>
                        {data ? <StyledTotalNumber number={data.questions_total}/> : ''}
                        </ChartDataFrame>
          </Grid>
        <Grid item md={12} className={classes.spacing}>
          <ChartDataFrame height="60vh"
                      title="Temas de audiências mais participativas"
                      listView={true}
                      export_data={data.treemap_chart_data}
                      download={true}>
            <div className={classes.contentBox}>
                {/*Plot* */}
            </div>
          </ChartDataFrame>
        </Grid>
        <Grid container>
          <Grid item md={6} className={classes.spacing}>
            <ChartDataFrame height="35vh" paddingRight="0.5rem" listView={true} download={true}>
            </ChartDataFrame>
          </Grid>
          <Grid item md={6} className={classes.spacing}>
            <ChartDataFrame height="35vh"
                        paddingLeft="0.5rem"
                        listView={true}
                        download={true}>

                        </ChartDataFrame>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6} className={classes.spacing}>
            <ChartDataFrame height="35vh"
                        paddingRight="0.5rem"
                        listView={true}
                        download={true}></ChartDataFrame>
          </Grid>
          <Grid item md={6} className={classes.spacing}>
            <ChartDataFrame height="35vh"
                        paddingLeft="0.5rem"
                        listView={true}
                        download={true}></ChartDataFrame>
          </Grid>
        </Grid>
        </Grid>
  )
}
