import React, { useContext, useEffect } from 'react'
import MenuNavAcademy from '../../componentes/menu/MenuNavAcademy'
import MenuNavProyect from '../../componentes/menu/MenuNavProyect'
import { SwichContext } from '../../context/swichContext'
import { Fade, Grow } from '@material-ui/core';

const Menu = () => {
    const context = useContext(SwichContext)
   console.log('??',context)
   if(context.isAcademy){
       return (
                <MenuNavAcademy setIsAcademy={context.setIsAcademy} isAcademy={context.isAcademy} />
       )
   }else{
       return (
                 <MenuNavProyect setIsAcademy={context.setIsAcademy} isAcademy={context.isAcademy} />
       )
   }

}

export default Menu
