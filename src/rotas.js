import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/login" component={Login} />
                <Route component={NaoEncontrado} />
            </Switch>
        </BrowserRouter>
    )
}