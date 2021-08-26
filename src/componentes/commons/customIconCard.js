import { makeStyles } from '@material-ui/core';
import React from 'react'
import { iconsType } from '../../utils/constantes';


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

const CustomIconCard = ({ Img, tipo}) => {
  const classes = useStyles()
  let content = <Img/>
  switch (tipo) {
    case iconsType.infinito:
        content = (<Img className={classes.infinitoLogo}/>)
        break;
      case iconsType.mayorMenor:
        content = (<Img className={classes.mayorMenor}/>);
        break;
      case iconsType.gitHub:
        content = (<Img className={classes.gitHub}/>);
        break;
      case iconsType.could:
        content =  (<Img className={classes.could}/>);
        break;
      case iconsType.clasesEnVivo:
        content = (<Img className={classes.clasesEnVivo}/>);
        break;
      case iconsType.sinCosto:
        content = (<Img className={classes.sinCosto}/>);
        break;   
      default:
          return null
          
  }
  return content
}
export default CustomIconCard
