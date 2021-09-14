import { createTheme, Fade, Slide } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { createContext, useState } from 'react'
import themeDark from '../theme/dark';
import themeLight from '../theme/light';

export const SwichContext = createContext();
const SwichProvider = (props) => {
    const [isAcademy, setIsAcademy] = useState(false)

    return (
        <SwichContext.Provider value={{isAcademy, setIsAcademy}}>
                  <ThemeProvider theme={isAcademy ? createTheme(themeLight) : createTheme(themeDark)}>
                      <Fade in={isAcademy} timeout={2000} >
                        {props.children}
                      </Fade>
                  </ThemeProvider>
        </SwichContext.Provider>
    )
}

export default SwichProvider
