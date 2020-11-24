import React from 'react';
import './App.css';
import {ThemeProvider as SCThemeProvider} from '@material-ui/core/styles';
import AppRouter from './router'
import {customTheme} from './theme'
import { StylesProvider, ThemeProvider} from '@material-ui/core';
/*import { StylesProvider } from '@material-ui/core/styles';*/
/*const generateClassName = (rule, styleSheet) => `${styleSheet.options.classNamePrefix}-${rule.key}`;*/

function App() {
  return (
    <div className="App">
      {/*<StylesProvider generateClassName={generateClassName}>*/}
      <StylesProvider injectFirst>
        <ThemeProvider theme={customTheme}>
          <SCThemeProvider theme={customTheme}>
            <AppRouter theme={customTheme}></AppRouter>
          </SCThemeProvider>
        </ThemeProvider>
      </StylesProvider>
      {/*</StylesProvider>*/}
    </div>
  );
}

export default App;
