import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Kirjautuminen from "./components/kirjautuminen"
import Valikko from "./components/valikko"
import Kirjahylly from "./components/kirjahylly"


export default class Root extends Component {
    render() {
        return (
            <React.Fragment>

            <Valikko/>

            <Kirjahylly/>
            </React.Fragment>



            );
    }
}


if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
