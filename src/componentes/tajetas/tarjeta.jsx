import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  infinitoLogo:{
    fontSize:'50px',
    color:'#0760F6'
  },
  mayorMenor:{
    fontSize:'50px',
    color:'#EE7719'
  },
  sinCosto:{
    fontSize:'50px',
    color:'#28FE1D'
  },
  gitHub:{
    fontSize:'50px',
    color:'#000000'
  },
  could:{
    fontSize:'50px',
    color:'#00bcd4ab'
  },
  clasesEnVivo:{
    fontSize:'50px',
    color:'#EA6ECC'
  }
});

export default function Tarjeta({titulo, contenido, Img, tipo}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
            <Grid sm={12}>
                <Img className={ tipo === 'infinito' ? 
                                classes.infinitoLogo
                                : tipo === 'mayorMenor' ?
                                classes.mayorMenor :
                                tipo === 'gitHub' ?
                                classes.gitHub :
                                tipo === 'Cloud' ?
                                classes.could :
                                tipo === 'ClasesEnVivo' ?
                                classes.clasesEnVivo :
                                classes.sinCosto
                                }/>
            </Grid>
          <Typography gutterBottom variant="h5" component="h2">
           {titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {contenido}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
