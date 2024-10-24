import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'

export default class MenuApuestas extends Component {
  state={
    equipos:[]
  }
  loadEquipos=()=>{
    let request ="api/Equipos"
    let url = Global.apiApuestas+request
    axios.get(url).then(response =>{
      console.log("leyendo equipos")
      this.setState({
        equipos:response.data
      })
    })
  
  }
  componentDidMount=()=>{
    this.loadEquipos();
  }
  render() {
    return (
      <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/apuestas/">Apuestos</a>
              </li>
              {
                this.state.equipos.map((equipo,index)=>{
                  return(
                    <li key={index}><NavLink className="nav-link" to={"/detalles/"+ equipo.idEquipo}>{equipo.nombre} </NavLink></li>
                  )
                })
              }

            </ul>
          </div>
          </nav>
      </div>
    )
  }
}