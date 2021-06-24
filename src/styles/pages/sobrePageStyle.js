/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
  },
  container: {
    width: 'auto',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
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
      fontSize: '2.2rem',
    },
  },
  typograhyH2: {
    fontSize: '2.5rem',
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
    justifyContent: 'space-evenly',
    height: '370px',
    '@media (max-width: 600px)': {
      height: '250px',
    },
    background: ' linear-gradient(90deg, rgba(228, 56, 180, 0.3) 0%, rgba(245, 157, 42, 0.3) 32.29%, rgba(17, 129, 233, 0.3) 63.54%, rgba(20, 215, 104, 0.3) 100%);',
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
    width: '7%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '30vh',
  },
  bannerBoxLogos: {
    width: '200px',
    height: '200px',
    '@media (max-width: 600px)': {
      width: '80px',
      height: '80px',
    },
  },
  toolSectionHeader: {
    display: 'flex',
    marginTop: '5vh',
    marginBottom: '3vh',
  },
}));
