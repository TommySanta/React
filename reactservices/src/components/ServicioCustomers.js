import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
export default class ServicioCustomers extends Component {
    urlCustomers = Global.urlApiCustomers;
    state = {
        customers : []
    }

    loadCustomers = ()=>{
        console.log("Antes del servicio");
        var request = "customers.json";
        axios.get(this.urlCustomers + request).then(response => {
            console.log("Leyendo servivio")
            console.log(response.data.results)
            this.setState({
                customers : response.data.results
            })
        })
        
        console.log("Despues del servicio")
    }

    componentDidMount(){
        console.log("Creando component");
        this.loadCustomers();
    }
    render() {
        return (
            <div>
                <h1>Servicio Api customers</h1>
                <button onClick={this.loadCustomers}>Cargar clientes aqui</button>
                {
                    this.state.customers.map((customer, index)=>{
                        return(
                            <h3 style={{color : "blue"}} key={index}>{customer.contactName}</h3>
                        )
                    })
                }
            </div>
        )
    }
}
