import React, { Component } from 'react'
import  { BrowserRouter,Routes,Route, useParams} from 'react-router-dom'
import HomeApuestas from './HomeApuestas'
import MenuApuestas from './MenuApuestas'
import Detalles from './Detalles'


export default class Router extends Component {
  render() {
    function DetallesElement(){
            let {idEquipo} = useParams();
            return(<Detalles id={idEquipo}/>)
        }
    return (
      <div>
        <BrowserRouter>
        <MenuApuestas/>
        <Routes>
          <Route path='/' element={<HomeApuestas/>}></Route>
          <Route path='/detalles/:idEquipo' element={<DetallesElement/>}></Route>
          <Route path='/apuestas/' element={<HomeApuestas/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}
