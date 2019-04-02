import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Kirjautuminen from "./components/kirjautuminen";
import Valikko from "./components/valikko";
import Kirjahylly from "./components/kirjahylly";
import KirjanTiedot from "./components/KirjanTiedot";
import classNames from "classnames";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import Footer from "./components/footer";
import Niteet from "./components/niteet";
import UusiKirja from "./components/uusikirja";
import Rekkaus from "./components/rekkaushelppo";
import Lainaa from "./components/LainaaKirja";
import PalautaLaina from "./components/PalautaLaina";



export default class Root extends Component {
    render() {
        return (
            <BrowserRouter>

                <Valikko/>
                <Route path="/" exact component={Kirjahylly} />
                <Route path="/kirja/:id" component={KirjanTiedot} />
                <Route path="/rekkaus" component={Rekkaus} />
                <Route path="/niteet" component={Niteet} />
                <Route path="/UusiKirja" component={UusiKirja} />
                <Route path="/lainaa/:id" component={Lainaa} />
                <Route path="/palauta" component={PalautaLaina} />
                <Footer/>
            </BrowserRouter>

            );
    }
}


if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
