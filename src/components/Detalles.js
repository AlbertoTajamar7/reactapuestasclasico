import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { NavLink } from 'react-router-dom' 

export default class Detalles extends Component {
    state ={
        equipo: null
    }
    findEquipos=()=>{
        let id = this.props.id
        console.log(id)
        let request = "api/equipos/"+id;
        let url = Global.apiApuestas+request
        console.log(url)
        axios.get(url).then(response=>{
            console.log("equipo leido")
            this.setState({
                equipo: response.data
            })
            console.log(response.data)
            this.findEquipos()
        })
    }
    componentDidMount=()=>{
        this.findEquipos();
    }
  render() {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Champions</th>
                    <th>Web</th>
                    <th>Descripcion</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.equipo &&
                        (<tr>
                            <td>{this.state.equipo.nombre}</td>
                            <td><img src={this.state.equipo.imagen} style={{width:"90%"}}/></td>
                            <td>{this.state.equipo.champions}</td>
                            <td>{this.state.equipo.web}</td>
                            <td>{this.state.equipo.descripcion}</td>
                        </tr>)
                }
                    
                
            </tbody>
        </table>
    )
  }
}
