import { Box, Grid, Typography,makeStyles } from '@material-ui/core'
import React from 'react'
import MenuNav from '../../componentes/menu/menu'
import Tarjeta from '../../componentes/tajetas/tarjeta'
import section1 from '../../imagenes/section1.png'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import CodeIcon from '@material-ui/icons/Code';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import GitHubIcon from '@material-ui/icons/GitHub'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
const useStyles = makeStyles({
back:{
  backgroundImage:section1
},
font:{
  color:'#F1F1F1'
}
})
const Inicio = () => {
  const classes = useStyles()
  return (
    <>
      <MenuNav/>
      <Grid container direction='row' className='backSection'>
        <Grid item sm={2}/>
        <Grid xs={12} item sm={5}>
            <Box pt={5} alignContent='center'>
                <Typography variant='h2' align='left' className={classes.font}>Invirtiendo en los lideres del mañana.</Typography>
            </Box>
            <Box mt={3}>
                <Typography variant='h5' align='left' className={classes.font}>Estudia con nosotros y se parte de esta revolucion..</Typography>
            </Box>
        </Grid>
        <Grid item sm={5}>
          {/* <Hidden item smDown>
              <img src={section1}></img>
          </Hidden> */}
        </Grid>
      </Grid>
      <Grid container direction='row'>
        <Grid item xs={12} sm={4}>
          <Tarjeta 
            titulo='Constante soporte' 
            contenido='Una vez finalizado el curso puedes repetirlo. Sin costo'
            Img={AllInclusiveIcon}
            tipo='infinito'
          ></Tarjeta>
        </Grid>
        <Grid item  xs={12} sm={4}>
          <Tarjeta 
            titulo='Trabajo en equipo' 
            contenido='Te acompañamos en tu proceso de aprendizaje. Ganamos si tu ganas!'
            Img={CodeIcon}
            tipo='mayorMenor'
          ></Tarjeta>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Tarjeta 
            titulo='Sin costo inicial' 
            contenido='Abonas el curso una vez que consigas tu primer trabajo en IT!'
            Img={MoneyOffIcon}
            tipo='sinCosto'
          ></Tarjeta>
        </Grid>
      </Grid>
        <br/>
        <br/>
         <Grid container direction='row'>
         <Grid item xs={12} sm={4}>
            <Tarjeta 
              titulo='gitHub' 
              contenido='Te enseñamos Git & GitHub para versionar tu codigo y poder trabajar en un verdadero entorno cooperativo.'
              Img={GitHubIcon}
              tipo='gitHub'
            ></Tarjeta>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Tarjeta 
              titulo='Cloud' 
              contenido='Las clases seran grabadas y almacenadas en la nube para que las puedas repasarlas cuando lo necesites. Por lo que no te preocupes si faltaste a alguna clase.'
              Img={CloudUploadIcon}
              tipo='Cloud'
            ></Tarjeta>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Tarjeta 
              titulo='Clases en vivo' 
              contenido='Clases 100% online. Estudi'
              Img={QueuePlayNextIcon}
              tipo='ClasesEnVivo'
            ></Tarjeta>
        </Grid>
         </Grid>
        <br/>
    </>
  )
}

export default Inicio
