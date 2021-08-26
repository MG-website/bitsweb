import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box, Grid, Hidden, IconButton, Link, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../imagenes/logoPng2.png'
import { useState } from 'react';
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
    backgroundColor:'#ffffff'
},
flexContent:{
  display:'flex'
}
  
}));

export default function MenuNav() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleClose = ()=>{
    setOpen(false)
  }
  
  const handleMenu = (event) => {
    setOpen(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color='secondary' >
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
                    <MenuItem  onClick={handleClose}>Carrera</MenuItem>
                    <MenuItem onClick={handleClose}>Sobre nosotros</MenuItem>
                    <MenuItem onClick={handleClose}>Aplicar</MenuItem>

                </Menu>
              </Grid>
            </Grid>
            
   
          </Hidden>
          <Hidden smDown>
            <Grid container direction='row'  alignItems='center'>
                  <Grid item sm className={classes.flexContent} >
                      <Box pl={8}>
                           <img src={logo} className={classes.img} alt='tu vieja' ></img>
                      </Box>
                  </Grid>
                  <Grid item sm={1}>
                    <Typography className={classes.font} variant='h6' component={Link}>Home</Typography>
                  </Grid>
                  <Grid item sm={1}>
                    <Typography className={classes.font} variant='h6' component={Link}>Carrera</Typography>
                  </Grid>
                  <Grid item sm={2}>
                      <Typography className={classes.font} variant='h6' component={Link}>Sobre nosotros</Typography>
                  </Grid>
                  <Grid item sm={1}>
                  {/* <Typography className={classes.font} color='primary' component={Button} variant='h6'>Aplicar</Typography> */}
                       <Button className={classes.font} color='primary'>Aplicar</Button> 
                  </Grid>
                  <Grid item sm={1}/>
              </Grid>
          </Hidden>  
            

        </Toolbar>
      </AppBar>
    </div>
  );
}
