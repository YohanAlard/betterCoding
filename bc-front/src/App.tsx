import * as React from 'react';
import './App.scss';
import Brand from './common/brand/Brand';
import Header from './header/Header';
import { createMuiTheme, ThemeProvider, Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

/*#A2B33B- secondary dark
#EEFF87- secondary light
#7C29B3 - primary dark
#D594FF - primary light*/

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7C29B3',
    },
    secondary: {
      main: '#A2B33B',
    },
    grey: green,
    background: {
      paper: '#FFF',
      default: "#ff0000"
    },
  },
 
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
      
        <div>
          this is my content
          <Button color="primary" >test </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

