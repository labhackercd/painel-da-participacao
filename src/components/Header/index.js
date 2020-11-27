import React, {useState} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button,
         FormControl, InputBase, InputLabel, MenuItem, Select } from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 6,
    position: 'relative',
    backgroundColor: theme.palette.lightGrey.main,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: theme.palette.white.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    color: '#FFF',
    textTransform: 'capitalize',
  },
  inputOptions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  margin: {
    margin: theme.spacing(1)
  },
  filter: {
    color: '#B9B9B9',
    display: 'flex',
    alignSelf: 'center',
  }
}));

const typography = {color: '#FFF', textTransform: 'capitalize'}

export default function Header() {
  const classes = useStyles()
  const [year, setYear] = useState(0);
  const [semester, setSemester] = useState(0);
  const [month, setMonth] = useState(0);
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };
  const handleChangeSemester = (event) => {
    setSemester(event.target.value);
  }
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  }
  return (
    <>
      <Grid container>
        <Grid item md={2}>
          <Typography variant="h3" style={{color: '#FFF'}}>
            Painel Geral
          </Typography>
        </Grid>
        <Grid item md={5}></Grid>
        <Grid item md={5} className={classes.inputOptions}>
          <Button variant="contained" color="secondary">
            <Typography style={typography}>
              Dados totais
            </Typography>
          </Button>
          <div className={classes.filter}>
            <Typography variant="h5">
              Filtros
            </Typography>
          </div>
          {/* year select */}
          <FormControl id="form-control-year">
           <InputLabel id="year-label">Ano</InputLabel>
           <Select
             id="select-year"
             value={year}
             native={true}
             onChange={handleChangeYear}
             input={<BootstrapInput />}
           >
           <option value="0">Ano</option>
           <option value="1">2020</option>
           <option value="2">2019</option>
           <option value="3">2018</option>
           </Select>
         </FormControl>
         {/* Semester select */}
         <FormControl>
          <InputLabel id="semester-label">Semestre</InputLabel>
          <Select
            id="select-semester"
            value={semester}
            onChange={handleChangeSemester}
            input={<BootstrapInput />}
          >
            <MenuItem value={0}>
              Semestre
            </MenuItem>
            <MenuItem value={1}>1/2020</MenuItem>
            <MenuItem value={2}>2/2019</MenuItem>
            <MenuItem value={3}>1/2019</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
         <InputLabel id="month-label">Mês</InputLabel>
         <Select
           id="select-month"
           value={month}
           onChange={handleChangeMonth}
           input={<BootstrapInput />}
         >
           <MenuItem value={0}>
             Mês
           </MenuItem>
           <MenuItem value={1}>Janeiro</MenuItem>
           <MenuItem value={2}>Fevereiro</MenuItem>
           <MenuItem value={3}>Março</MenuItem>
         </Select>
       </FormControl>
        </Grid>
      </Grid>
    </>
  )
}
