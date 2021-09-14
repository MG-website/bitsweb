import { Box, Grid, Typography,makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import Tarjeta from '../tajetas/tarjeta'
import section1 from '../../imagenes/section1.png'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Menu from '../../vistas/menu/menu'
import { infoCardAcademy } from '../../utils/textos'


const useStyles = makeStyles({
back:{
  backgroundImage:section1
},
font:{
  color:'#F1F1F1'
}
})

const InicioAcademy = () => {
  const classes = useStyles()
  return (
    <>
      <Menu/>
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
        {infoCardAcademy.map(data => {
          return (
                <Grid item xs={12} sm={4}>
                <Tarjeta tipo={data.tipo} titulo={data.titulo} contenido={data.contenido} Img={data.Img}/>
                </Grid>
               )
        })}
         </Grid>
        <br id='carrera'/>
    </>
  )
}

export default InicioAcademy
