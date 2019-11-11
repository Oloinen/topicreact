import React, { Component } from 'react'
import Lomake from './lomake.jsx'
import Merkintalista from './Merkintalista.jsx'

export default class oppikirja extends Component {

    render() {
        return (
            <div>
                <Lomake/>
                <Merkintalista/>
            </div>
        )
    }
}
