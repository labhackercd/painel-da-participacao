import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import axios from 'axios';
import ChartDataFrame from '../../components/ChartDataFrame/index';
import Header from '../../components/Header/index';
import RankingTable from '../../components/RankingTable/index';
import {
  getWikilegisParticipationChartDataByDay,
  getWikilegisParticipationChartDataByMonth,
  getWikilegisParticipationChartDataByYear,
} from '../../services/functions/auxFunctions/index';

import { handleUpdatePeriodSearchQuery } from '../../services/functions/handlers/index';

import TotalFrame from '../../components/Frames/TotalFrame/index';
import Sectionheader from '../../components/Headers/SectionHeader/index';
import SubSectionHeader from '../../components/Headers/SubSectionHeader/index';
import NoDataForSelectedPeriod from '../../components/Informations/NoDataForSelectedPeriod/index';
import ChartAndReport from '../../components/ChartAndReport/index';

import {
  wikilegisParticipantsToolTip, wikilegisOpinionsToolTip, wikilegisVotesToolTip,
  wikilegisRankingToolTip, wikilegisLegislativeProposesToolTip,
} from '../../services/texts/tooltips';

import {
  MONTHS_LIST, MONTHS_ABBREVIATED_LIST, DEFAULT_YEAR, DEFAULT_SELECTED_PERIOD_TYPE,
  DEFAULT_MONTH_PERIOD, DEFAULT_SEARCH_QUERY, DAILY_KEY_WORD, MONTHLY_KEY_WORD,
  WIKILEGIS_INITIAL_YEAR,
} from '../../services/constants/constants';

import { rankingWikilegisColumns, rankingWikilegisHeaders, filterRankingWikilegis } from './settings';

import customTheme from '../../../styles/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  headerBox: {
    backgroundColor: theme.palette.primary.main,
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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  spacingContainer: {
    marginTop: theme.spacing(3),
  },
  positionStats: {
    display: 'flex',
  },
  divider: {
    borderColor: theme.palette.wikilegis.jade,
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const defaultYear = DEFAULT_YEAR;
const defaultSelectedPeriodType = DEFAULT_SELECTED_PERIOD_TYPE; // Get all months of the year
const defaultMonthPeriod = DEFAULT_MONTH_PERIOD; // All months
const defaultSearchQuery = DEFAULT_SEARCH_QUERY;
const dailyKeyWord = DAILY_KEY_WORD;
const monthlyKeyWord = MONTHLY_KEY_WORD;
const monthNamesList = MONTHS_ABBREVIATED_LIST;

function Wikilegis(props) {
  const { responseDataRanking } = props;
  const headerColors = {
    borderColor: '#00C354',
    button: {
      main: '#14D768',
      hover: '#00612A',
    },
  };
  const classes = useStyles();
  const [wikilegisTotalsData, setWikilegisTotalsData] = useState('');
  const [newUsersChartData, setNewUsersChartData] = useState([]);
  const [totalUsersChartData, setTotalUsersChartData] = useState([]);
  const [roomsRankingData, setRoomsRankingData] = useState(responseDataRanking.data);
  const [participantionChartData, setParticipantionChartData] = useState([]);
  const [totalsAreLoaded, setTotalsAreLoaded] = useState(false);
  const [newUsersChartDataLoaded, setNewUsersChartDataLoaded] = useState(false);
  const [totalUsersChartDataLoaded, setTotalUsersChartDataLoaded] = useState(false);
  const [periodSubTitle, setPeriodSubTitle] = useState(new Date().getFullYear().toString());
  const [participantionChartDataLastUpdate, setParticipantionChartDataLastUpdate] = useState('Carregando');
  const roomsRankingDataLastUpdate = responseDataRanking.lastUpdate;
  const [totalUsersChartDataLastUpdate, setTotalUsersChartDataLastUpdate] = useState('Carregando');
  const [newUsersChartDataLastUpdate, setNewUsersChartDataLastUpdate] = useState('Carregando');

  const audiencesChartsUsersSettings = {
    chartType: 'LineChart',
    options: {
      legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
      lineWidth: 5,
      pointSize: 15,
      colors: [
        customTheme.palette.wikilegis.salem,
        customTheme.palette.wikilegis.jade,
        customTheme.palette.wikilegis.camarone,
      ],
      hAxis: {
        textStyle: { color: '#FFFFFF' },
        gridlines: { color: 'transparent' },
        titleTextStyle: { color: 'white' },
      },
      vAxis: { gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' }, format: '##.##' },
      series: {
        1: { curveType: 'function' },
      },
      backgroundColor: '#000000',
    },
  };

  const audiencesWithMoreParticipation = {
    chartType: 'ColumnChart',
    options: {
      bars: 'vertical',
      legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
      isStacked: 'true',
      colors: [
        customTheme.palette.wikilegis.salem,
        customTheme.palette.wikilegis.jade,
        customTheme.palette.wikilegis.camarone,
      ],
      bar: { groupWidth: '80%' },
      hAxis: { textStyle: { color: 'white' }, titleTextStyle: { color: 'white' } },
      vAxis: {
        minValue: 0,
        gridlines: { color: 'transparent' },
        textStyle: { color: '#FFFFFF' },
        format: '###.##',
      },
      backgroundColor: '#000000',
    },
  };

  function computeTotalOfUsersByPeriod(values, period) {
    const computedArray = [];
    let collumPeriodTitle = [];

    try {
      if (values !== null) {
        switch (period) {
          case dailyKeyWord:
            computedArray.push([values[0].start_date.match(/\d+/g)[2], values[0].new_users]);
            for (let i = 1; i < values.length; i += 1) {
              computedArray.push(
                [values[i].start_date.match(/\d+/g)[2],
                  values[i].new_users + computedArray[i - 1][1]],
              );
            }
            collumPeriodTitle = [['Dia', 'Total de Usuários Cadastrados']];
            break;
          case monthlyKeyWord:
            computedArray.push(
              [monthNamesList[(new Date(values[0].end_date)).getMonth()], values[0].new_users],
            );
            for (let i = 1; i < values.length; i += 1) {
              computedArray.push(
                [monthNamesList[(new Date(values[i].end_date)).getMonth()],
                  values[i].new_users + computedArray[i - 1][1]],
              );
            }
            collumPeriodTitle = [['Mês', 'Total de Usuários Cadastrados']];
            break;
          default:
            computedArray.push(
              [new Date(values[0].end_date).getFullYear().toString(), values[0].new_users],
            );
            for (let i = 1; i < values.length; i += 1) {
              computedArray.push(
                [new Date(values[i].end_date).getFullYear().toString(),
                  values[i].new_users + computedArray[i - 1][1]],
              );
            }
            collumPeriodTitle = [['Ano', 'Total de Usuários Cadastrados']];
            break;
        }

        setTotalUsersChartDataLastUpdate(values[0].modified);
      } else {
        collumPeriodTitle = [];
      }
    } catch (e) {
    // eslint-disable-next-line no-console
      console.error(e);
    }
    setTotalUsersChartData(collumPeriodTitle.concat(computedArray));
    setTotalUsersChartDataLoaded(true);
  }

  async function fetchAndSetWikilegisTotalsData(query) {
    const participantsUsersTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${query}`);
    const legislativeProposalsTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${query}`);
    const opinionsTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${query}`);
    const votesTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${query}`);

    function numberWithDots(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
    }
    const dataJson = {
      participants_total: numberWithDots(participantsUsersTotalResponse.data.sum_total_results),
      legis_propo_total: numberWithDots(legislativeProposalsTotalResponse.data.sum_total_results),
      opinions_total: numberWithDots(opinionsTotalResponse.data.sum_total_results),
      votes_total: numberWithDots(votesTotalResponse.data.sum_total_results),
    };

    await setWikilegisTotalsData(dataJson);
    await setTotalsAreLoaded(true);
  }

  async function fetchAndSetNewUsersChartData(query, period) {
    const url = `${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${query}`;
    const newUsersTotalResponse = await axios.get(url);
    const values = newUsersTotalResponse.data.results;
    let arrayData = [];
    let collumPeriodTitle = [];

    switch (period) {
      case dailyKeyWord:
        arrayData = values.map(
          (value) => [value.start_date.match(/\d+/g)[2], value.new_users],
        );
        collumPeriodTitle = ['Dia', 'Novos Usuários'];
        break;
      case monthlyKeyWord:
        arrayData = values.map(
          (value) => [monthNamesList[(new Date(value.end_date)).getMonth()], value.new_users],
        );
        collumPeriodTitle = ['Mês', 'Novos Usuários'];
        break;
      default:
        arrayData = values.map(
          (value) => [new Date(value.end_date).getFullYear().toString(), value.new_users],
        );
        collumPeriodTitle = ['Ano', 'Novos Usuários'];
        break;
    }

    if (arrayData.length > 0) {
      setNewUsersChartDataLastUpdate(values[0].modified);
      setNewUsersChartData([collumPeriodTitle].concat(arrayData));
    } else {
      setNewUsersChartData(arrayData);
    }

    setNewUsersChartDataLoaded(true);

    if (Array.isArray(values) && values.length) {
      computeTotalOfUsersByPeriod(values, period);
    } else {
      computeTotalOfUsersByPeriod(null, period);
    }
  }

  function getApiLastUpdateDateAndHour(opinionsData, voteData) {
    let lastUpdate = '';

    if (opinionsData.length > 0) {
      lastUpdate = opinionsData[0].modified;
    } else if (voteData.length > 0) {
      lastUpdate = voteData[0].modified;
    } else {
      lastUpdate = '-';
    }

    return lastUpdate;
  }

  async function fetchAndSetParticipationChartData(query, period, month, year) {
    const opinionsResponse = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${query}`);
    const votesResponse = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${query}`);

    const opinionsData = opinionsResponse.data.results;
    const voteData = votesResponse.data.results;

    let arrayData = [];
    const collumPeriodTitle = ['Data', 'Opiniões', 'Votos'];

    switch (period) {
      case dailyKeyWord:
        arrayData = await getWikilegisParticipationChartDataByDay(
          month, year, opinionsData, voteData,
        );
        break;
      case monthlyKeyWord:
        arrayData = await getWikilegisParticipationChartDataByMonth(
          month, year, opinionsData, voteData,
        );
        break;
      default: // yearly -> Total period
        arrayData = await getWikilegisParticipationChartDataByYear(
          opinionsData, voteData, WIKILEGIS_INITIAL_YEAR,
        );
        break;
    }

    if (arrayData.length > 0) {
      setParticipantionChartData([collumPeriodTitle].concat(arrayData));
      setParticipantionChartDataLastUpdate(
        getApiLastUpdateDateAndHour(opinionsData, voteData),
      );
    } else {
      setParticipantionChartData(arrayData);
    }
  }

  async function filterAndSetDocumentsRankingData(period, month, year) {
    // to be implemented
    let resultArray = [];
    const allRooms = props.responseDataRanking.data;

    switch (period) {
      case dailyKeyWord:
        resultArray = await allRooms.filter((value) => {
          const [valueYear, valueMonth] = value.closing_date.split('-'); // Or, var month = e.date.split('-')[1];
          return (
            (parseInt(month, 10) === parseInt(valueMonth, 10))
            && (parseInt(year, 10) === parseInt(valueYear, 10))
          );
        });
        break;
      case monthlyKeyWord:
        resultArray = await allRooms.filter((value) => {
          const [valueYear] = value.closing_date.split('-'); // Or, var month = e.date.split('-')[1];
          return (parseInt(year, 10) === parseInt(valueYear, 10));
        });
        break;
      default: // yearly -> Total period
        resultArray = allRooms;
        break;
    }

    await setRoomsRankingData(resultArray);
  }

  async function updateChartsAndTableSubTitle(period, month, year) {
    const todayDate = new Date();

    switch (period) {
      case dailyKeyWord:
        setPeriodSubTitle(`${MONTHS_LIST[month - 1]}/${year}`);
        break;
      case monthlyKeyWord:
        setPeriodSubTitle(`${year}`);
        break;
      default: // yearly -> Total period
        setPeriodSubTitle(
          `${WIKILEGIS_INITIAL_YEAR} a ${(todayDate.getFullYear())}`,
        );
        break;
    }
  }

  async function loadData(query, period, month, year) {
    updateChartsAndTableSubTitle(period, month, year);
    fetchAndSetWikilegisTotalsData(query);
    fetchAndSetNewUsersChartData(query, period);
    fetchAndSetParticipationChartData(query, period, month, year);
    filterAndSetDocumentsRankingData(period, month, year);
  }

  async function handlePeriodChange(month, year) {
    const { query, period } = await handleUpdatePeriodSearchQuery(month, year);
    await loadData(query, period, month, year); // Reload page data
  }

  useEffect(() => {
    // Load Initial page year with current year informations
    loadData(defaultSearchQuery, defaultSelectedPeriodType, 0, defaultYear);
  }, []);

  return (
    <div className={classes.root}>
      <Header
        title="Wikilegis"
        handlePeriodChange={handlePeriodChange}
        year={defaultYear}
        monthPeriod={defaultMonthPeriod}
        headerColors={headerColors}
        initialYear={WIKILEGIS_INITIAL_YEAR}
      />
      <Grid container spacing={1} className={classes.spacingContainer}>
        <Grid item xs={12}>
          <Sectionheader classes={classes} toolTipText={null} title="Totais no período" />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${wikilegisTotalsData.participants_total}`}
            title="Participantes"
            toolTipText={wikilegisParticipantsToolTip}
            toolTipAriaLabel="Informação sobre o termo participantes"
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${wikilegisTotalsData.legis_propo_total}`}
            title="Propostas Legislativas"
            toolTipText={wikilegisLegislativeProposesToolTip}
            toolTipAriaLabel="Informação sobre o termo propostas legislativas"
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${wikilegisTotalsData.opinions_total}`}
            title="Opiniões"
            toolTipAriaLabel="Informação sobre o termo opiniões"
            toolTipText={wikilegisOpinionsToolTip}
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={wikilegisTotalsData.votes_total}
            title="Votos nas opiniões"
            toolTipAriaLabel="Informação sobre o termo votos na Wikilegis"
            toolTipText={wikilegisVotesToolTip}
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <Sectionheader classes={classes} toolTipText={null} title="Distribuição da participação no período" />
          {(participantionChartData !== undefined && participantionChartData.length > 0) ? (
            <ChartAndReport
              height="60vh"
              download
              exportData={participantionChartData}
              title={periodSubTitle}
              classes={classes}
              data={participantionChartData}
              chartType={audiencesWithMoreParticipation.chartType}
              chartOptions={audiencesWithMoreParticipation.options}
              apiLastUpdate={participantionChartDataLastUpdate}
              apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
              tool="Wikilegis"
              isLoaded
            />
          ) : (
            <NoDataForSelectedPeriod
              title={periodSubTitle}
              tool="Wikilegis"
              apiLastUpdate={totalUsersChartDataLastUpdate}
              toolColor={headerColors.borderColor}
              apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
            />
          )}
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <Sectionheader classes={classes} title="Ranking das propostas legislativas" toolTipText={wikilegisRankingToolTip} toolTipColor={customTheme.palette.wikilegis.jade} />
          {(roomsRankingData !== undefined && roomsRankingData.length > 0) ? (
            <ChartDataFrame
              height="30vh"
              title={periodSubTitle}
              listView
              align="center"
              apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
              apiLastUpdate={roomsRankingDataLastUpdate}
              tool="Wikilegis"
              section="Report"
              exportData={roomsRankingData}
              download
              downloadHeaders={rankingWikilegisHeaders}
            >
              <Box width="100%" height="90%">
                <RankingTable
                  data={roomsRankingData}
                  columns={rankingWikilegisColumns}
                  filterRanking={filterRankingWikilegis}
                />
              </Box>
            </ChartDataFrame>
          ) : (
            <NoDataForSelectedPeriod
              title={periodSubTitle}
              tool="Wikilegis"
              apiLastUpdate={totalUsersChartDataLastUpdate}
              toolColor={headerColors.borderColor}
              apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
            />
          )}
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <Sectionheader classes={classes} toolTipText={null} title="Usuários" />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SubSectionHeader title="Novos cadastros de usuários" />
          {(newUsersChartData !== undefined && newUsersChartData.length > 0) ? (
            <div className={classes.contentBox}>
              <ChartAndReport
                isLoaded={newUsersChartDataLoaded}
                title={periodSubTitle}
                classes={classes}
                data={newUsersChartData}
                chartType={audiencesChartsUsersSettings.chartType}
                chartOptions={audiencesChartsUsersSettings.options}
                exportData={newUsersChartData}
                download
                apiLastUpdate={newUsersChartDataLastUpdate}
                tool="Wikilegis"
              />
            </div>
          ) : (
            <NoDataForSelectedPeriod
              title={periodSubTitle}
              tool="Wikilegis"
              apiLastUpdate={totalUsersChartDataLastUpdate}
              toolColor={headerColors.borderColor}
              apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
            />
          )}
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SubSectionHeader title="Total de Usuários Cadastrados" />
          {(totalUsersChartData !== undefined && totalUsersChartData.length > 0) ? (
            <div className={classes.contentBox}>
              <ChartAndReport
                download={false}
                exportData={totalUsersChartData}
                isLoaded={totalUsersChartDataLoaded}
                title={periodSubTitle}
                classes={classes}
                data={totalUsersChartData}
                chartType={audiencesChartsUsersSettings.chartType}
                chartOptions={audiencesChartsUsersSettings.options}
                apiLastUpdate={totalUsersChartDataLastUpdate}
                tool="Wikilegis"
              />
            </div>
          ) : (
            <NoDataForSelectedPeriod
              title={periodSubTitle}
              tool="Wikilegis"
              apiLastUpdate={totalUsersChartDataLastUpdate}
              toolColor={headerColors.borderColor}
              apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

Wikilegis.propTypes = {
  responseDataRanking: PropTypes.object,
};

Wikilegis.defaultProps = {
  responseDataRanking: { data: [], lastUpdate: new Date() },
};

export default Wikilegis;
