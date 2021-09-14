import './App.css';
import Inicio from './vistas/inicio/inicio';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import themeLight from './theme/light';
import { Grid } from '@material-ui/core';
import SwichProvider from './context/swichContext';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <SwichProvider> 
      {/* <ThemeProvider theme={createTheme(themeLight)}> */}
      <BrowserRouter>
        <Grid container >
              <Inicio/>
        </Grid>
      {/* </ThemeProvider> */}
      </BrowserRouter>
      </SwichProvider>
    </div>
  );
}

export default App;
