/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';
import bannerBackgroundImg from '../../assets/images/initialPage/bannerBlur.png';

const linearGradient = ' linear-gradient(90deg, rgba(228, 56, 180, 0.3) 0%, rgba(245, 157, 42, 0.3) 32.29%, rgba(17, 129, 233, 0.3) 63.54%, rgba(20, 215, 104, 0.3) 100%);';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    // QHD/WQHD (2560×1440) QUADHD - 4K UHD (3840×2160) 4K ULTRA HD
    '@media (min-width: 2300px)': {
      height: '100vh',
      width: '100vw',
    },
    backgroundColor: theme.palette.primary.main,
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    width: 'auto',
    backgroundColor: theme.palette.primary.main,
    height: '100%',
  },
  boxHeader: {

  },
  boxContent: {
    flex: '1 ',
    display: 'flex',
    flexFlow: 'column',
  },
  bannerBox: {
    width: '100%',
    display: 'flex',
    height: '250px',
    '@media (min-width: 2200px)': {
      height: '400px',
    },
    '@media (max-width: 600px)': {
      height: '200px',
    },
    backgroundImage: `url(${bannerBackgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  bannerBoxText: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    paddingLeft: '2vh',
    '@media (min-width: 1100px)': {
      paddingLeft: '10vh',
    },
  },
  bannerBoxParticipaLogo: {
    width: '10%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '40vh',
    '@media (max-width: 2200px)': {
      marginRight: '20vh',
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
  typographyCaption: {
    fontSize: '1.5rem',
    fontWeight: 'regular',
    paddingTop: '15px',
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
  textBox: {
    paddingLeft: '2vh',
    paddingTop: '3vh',
    '@media (min-width: 1100px)': {
      paddingLeft: '10vh',
    },
  },
  typographyBoxText: {
    fontFamily: 'Open Sans',
    fontSize: '2.4rem',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },
  typographyBoxTextTitle: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
    fontWeight: 'bold',
    fontSize: '2.938rem',
    '@media (max-width: 600px)': {
      fontSize: '1.4rem',
    },
  },
  typographyHighLightedText: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },
  typographyParagraphBox: {
    paddingTop: '50px',
    '@media (max-width: 960px)': {
      paddingTop: '10px',
    },
  },
  boxGridContainer: {
    flex: '1 ',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5vh',
    paddingBottom: '10vh',
  },
  gridContainer: {
    width: '100%',
    height: '100%',
  },
  caroulselBox: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 900px)': {
      paddingTop: '30px',
      paddingBottom: '20px',
    },
  },
  caroulselInsideBox: {
    width: '100%',
    '@media (min-width: 1300px)': {
      width: '70%',
    },
  },
  iconStyle: {
    color: 'white',
  },
}));
