import './App.css';
import Inicio from './vistas/inicio/inicio';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import themeLight from './theme/light';
import { Grid } from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={createTheme(themeLight)}>
        <Grid container >
            <Grid item sm/>
            <Grid item sm={8}>
              <Inicio/>
            </Grid>
            <Grid item sm/>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
