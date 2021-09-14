import React from "react"
import { Switch, Route, Redirect } from "react-router"
import Carreras from "../../vistas/carreras/carreras"
import Contacto from "../../vistas/contacto/contacto"
import Inicio from "../../vistas/inicio/inicio"
import Menu from "../../vistas/menu/menu"
import Servicios from "../../vistas/servicios/servicios"
import SobreNosotros from "../../vistas/sobreNosotros/sobreNosotros"
import Footer from "../footer/footer"

const Routes = () => {
    return (
        <>
            <Menu/>
          <Switch>
            <Route exact path='/home' component={Inicio} />
            <Route exact path='/servicios' component={Servicios} />
            <Route exact path='/sobre-nosotros' component={SobreNosotros} />
            <Route exact path='/contacto' component={Contacto} />
            <Route exact path='/carreras' component={Carreras} />
            <Redirect to='/home'/>
          </Switch>  
          <Footer/>
        </>
    )
}

export default Routes
