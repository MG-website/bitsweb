import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import Carrusel from '../carousel/carousel';
import MenuNavProyect from '../menu/MenuNavProyect';
import { Slide } from '@material-ui/core';
import { SwichContext } from '../../context/swichContext';
import Tarjeta from '../tajetas/tarjeta'
import { infoCardProyet } from '../../utils/textos'
const InicioProyect = () => {
    const context = useContext(SwichContext)
    const styles = makeStyles((theme)=>({
        banner:{
            width:'',
            height:'200px',
             backgroundSize:'cover',
            backgroundImage:`url("https://static.vecteezy.com/system/resources/previews/001/736/119/non_2x/abstract-modern-shape-black-light-gradient-geometric-stripes-vector.jpg")`,
            transitionDuration:'2s',

            '&:hover':{
                backgroundPositionY:'10px',
                backgroundPositionX:'10px',

                transitionDuration:'2s',
                fontSize:'40px'
            }
        },
        container:{
            backgroundColor:theme.palette.background.default
        }
    }))
    
    const classes = styles()
    return (
            <Grid container className={classes.container} >
                <MenuNavProyect/>
                {/* <img height='500px' width='100%' src="https://picsum.photos/800/301/?random" alt="1" /> */}
                <Grid container>
                    <Grid sm/>
                    <Grid item xs={12} sm={10}>
                        <Typography variant={'h2'}> Aca va a ir el contenido</Typography>
                    </Grid>
                    <Grid sm/>

                </Grid>
                <Grid container> 
                    <Grid item xs={12} className={classes.banner}>
                        <Grid container style={{height:'100%'}} direction='column' justifyContent='center' alignItems='center'>
                                <Typography variant={'h4'} component={'h4'} color={'primary'}> texto de presentacion </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid sm/>
                    <Grid item xs={12} sm={10}>
                        <Typography variant={'h2'}> Aca va a ir el  mas contenido</Typography>
                    </Grid>
                    <Grid sm/>

                </Grid>
                <Grid container>
                    { infoCardProyet.map( item => {
                        return  <Grid item xs={12} sm={4}>
                                    <Tarjeta titulo={item.titulo} contenido={item.contenido} tipo={item.tipo} Img={item.Img} />
                                </Grid>
                    })}
                </Grid>
            </Grid>
           
    )
}

export default InicioProyect
