import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box, Grid, Hidden, IconButton, Link, Menu, MenuItem, Slide } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../imagenes/logoPng2.png'
import { useState } from 'react';
import { SwichContext } from '../../context/swichContext';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  img:{
      width:'6rem'
  },
  font:{
    // fontFamily: 'acumin-pro, BlinkMacSystemFont, sans-serif, Monserrat, sans-serif',
    fontSize:' 1rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    textDecoration: 'none',
    transition: 'opacity 0.25s ease-in 0s',
    cursor: 'pointer', 
    fontFamily: theme.typography.fontFamily
    // color:'#e92727'
},
menu:{
    backgroundColor:'#ffffff',
    transitionDuration:'2s',

},
flexContent:{
  display:'flex'
}
  
}));

export default function MenuNavAcademy({setIsAcademy, isAcademy}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const context = useContext(SwichContext)
  const history = useHistory()
  const handleClose = ()=>{
    setOpen(false)
  }
  
  const handleMenu = (event) => {
    setOpen(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <Slide in={context.isAcademy}  direction="right" 
      style={{ transformOrigin: '0 0 0' }}
      {...(context.isAcademy ? { timeout: 2000 } : {})}  mountOnEnter unmountOnExit>
      <AppBar position="fixed" color='secondary' className={classes.menu} >
        <Toolbar>
          <Hidden  smUp>
            <Grid container direction='row' justifyContent='space-between' >
              <Grid item sm={8}>
                   <img src={logo} className={classes.img} alt='tu vieja'></img>
              </Grid>
              <Grid item sm={4}>
                <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="primary"
                    >
                      <MenuIcon/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={open}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem  onClick={ ()=> {handleClose(); history.push('/home') }}>Home</MenuItem>
                    <MenuItem onClick={()=> {handleClose(); history.push('/carreras')}}>Carreras</MenuItem>
                    <MenuItem onClick={()=> {handleClose(); history.push('/sobre-nosotros')}}>Sobre nosotros</MenuItem>
                    <MenuItem onClick={()=> {handleClose(); history.push('/contacto')}}>Contacto</MenuItem>
                    <MenuItem onClick={()=> {context.setIsAcademy(!context.isAcademy)}}>Cambiar</MenuItem>

                </Menu>
              </Grid>
            </Grid>
            
   
          </Hidden>
          <Hidden  xsDown>

            <Grid container direction='row'  alignItems='center'>
                  <Grid item sm className={classes.flexContent} >
                      <Box pl={8}>
                           <img src={logo} className={classes.img} alt='logo bits' ></img>
                           <Typography variant={'body1'}> {`<Academia/>`} </Typography>
                      </Box>
                  </Grid>
                  <Grid item sm={1}>
                    <Typography className={classes.font} variant='h6' component={Link} onClick={()=> history.push('/home')} >Home</Typography>
                  </Grid>
                  <Grid item sm={1}>
                    <Typography className={classes.font} variant='h6' component={Link}  onClick={()=> history.push('/carreras')}  >Carreras</Typography>
                  </Grid>
                  <Grid item sm={2}>
                      <Typography className={classes.font} variant='h6' component={Link} onClick={()=> history.push('/sobre-nosotros')} >Sobre nosotros</Typography>
                  </Grid>
                  <Grid item sm={1}>
                      <Typography className={classes.font} variant='h6' component={Link} onClick={()=> history.push('/contacto')} >Contacto</Typography>
                  </Grid>
                  <Grid item sm={1}>
                       <Button className={classes.font} color='primary' onClick={()=> {setIsAcademy(!isAcademy); history.push('/home')}}>Empresa</Button> 
                  </Grid>
                  <Grid item sm={1}/>
              </Grid>
          </Hidden>  
            

        </Toolbar>
      </AppBar>
              </Slide>
    </div>
  );
}
