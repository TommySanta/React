import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/collatz/6">Collatz numero 6</a>
                    </li>
                    <li>
                        <a href="/*">Not found</a>
                    </li>
                </ul>
            </div>
        )
    }
}
