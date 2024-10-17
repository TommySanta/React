import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class BuscadorCustomer extends Component {
    urlApi = Global.urlApiCustomers;
    cajaId = React.createRef();
    state = {
        customer : null
    }
    buscadorCustomer = (e) => {
        e.preventDefault(); 
        let idCustomer = this.cajaId.current.value;
        let request = "customers/"+idCustomer+".json";
        axios.get(this.urlApi + request)
            .then(response => {
                console.log("Leyendo servicio");
                this.setState({
                    customer: response.data.customer
                });
            })
            .catch(error => {
                console.error("Error al buscar customer:", error);
                this.setState({ customer: null });
            });
    }
    
    render() {
        return (
            <div>
                <h1>Buscador Api customer</h1>
                <form onSubmit={this.buscadorCustomer}>
                    <label>ID Customer:</label>
                    <input type='text' ref={this.cajaId}/>
                    <button type="submit">Buscar Customer</button>
                </form>
                {
                    this.state.customer && (
                        <ul>
                            <li>{this.state.customer.contactName}</li>
                            <li>Empresa: {this.state.customer.companyName}</li>
                            <li>Puesto: {this.state.customer.contactTitle}</li>
                            <li>Ciudad: {this.state.customer.city}</li>
                        </ul>
                    )
                }
            </div>
        )
    }
}
