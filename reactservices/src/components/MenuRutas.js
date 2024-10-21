import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/tabla/21">Tabla Multiplicar 21</a>
                    </li>
                    <li>
                        <a href="/tabla/5">Tabla Multiplicar 5</a>
                    </li>
                    <li>
                        <a href="/*">Not found</a>
                    </li>
                </ul>
            </div>
        )
    }
}
