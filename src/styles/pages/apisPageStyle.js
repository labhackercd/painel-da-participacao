/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';
import bannerLinear from '../../assets/banner_background.svg';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
  },
  box: {
    display: 'flex',
    height: '100%',
    width: 'auto',
    flexFlow: 'column',
    backgroundColor: theme.palette.primary.main,
  },
  boxHeader: {
    flex: '0 1 auto',
  },
  boxContent: {
    flex: '1 1 auto',
  },
  textBoxMargin: {
    margin: '5vh',
    '@media (min-width: 1100px)': {
      /* topo | direita | inferior | esquerda */
      margin: '7vh 30vh 7vh 30vh',
    },
    '@media (max-width: 600px)': {
      paddingBottom: '3vh',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typograhyTitle: {
    fontSize: '2.938rem',
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: '2rem',
    },
  },
  typograhyH2: {
    fontSize: '2.438rem',
    fontWeight: 'bold',
    paddingTop: '15px',
    paddingBottom: '10px',
    '@media (max-width: 600px)': {
      fontSize: '1.9rem',
    },
  },
  typograhyH3: {
    fontSize: '2rem',
    fontWeight: '600',
    paddingTop: '5px',
    paddingBottom: '10px',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  typographyParagraph: {
    fontSize: '1.1rem',
    paddingBottom: '10px',
    textAlign: 'justify',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
    },
  },
  bannerBox: {
    width: '100%',
    display: 'flex',
    height: '370px',
    '@media (max-width: 600px)': {
      height: '250px',
    },
    backgroundImage: `url(${bannerLinear})`,
  },
  bannerBoxText: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    paddingLeft: '2vh',
    '@media (min-width: 1100px)': {
      paddingLeft: '30vh',
    },
  },
  bannerBoxParticipaLogo: {
    width: '10%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '30vh',
  },
  apiCard: {
    height: '329px',
    width: '100%',
    backgroundColor: '#0D0D0D',
    borderRadius: '15px',
  },
  apiCardHead: {
    height: '25px',
    /* topo | direita | inferior | esquerda */
    borderRadius: '15px 15px 0 0',
  },
  apiCardBody: {
    height: '100%',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  apiCardBodyTypographyTitle: {
    fontFamily: 'Open Sans',
    fontSize: '1.563rem',
    letterSpacing: '0.05rem',
    '@media (max-width: 1100px)': {
      fontSize: '1.2rem',
    },
  },
  apiCardBodyTypographyParagraph: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    letterSpacing: '0.1rem',
    paddingTop: '10px',
    color: '#BFBFBF',
    '@media (max-width: 1100px)': {
      fontSize: '1rem',
    },
  },
  apiCardText: {
    margin: '0px 5px 0px 5px',
  },
  apiCardButtons: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingBottom: '15px',
  },
  cardsContainer: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  anchorLink: {
    marginLeft: '10px',
    marginRight: '10px',
  },
}));
