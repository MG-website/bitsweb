import { Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import InicioAcademy from '../../componentes/inicio/inicioAcademy'
import InicioProyect from '../../componentes/inicio/inicioProyect'
import { SwichContext } from '../../context/swichContext'
import Footer from '../../componentes/footer/footer'
const Inicio = () => {
    const context = useContext(SwichContext)
    if(context.isAcademy){
        return <Grid> 
                    <InicioAcademy/>
                    <Footer/>

               </Grid> 
    }else{
        return <Grid container>    
                    <InicioProyect/>
                    <Footer/>
                </Grid> 
    }

}

export default Inicio
