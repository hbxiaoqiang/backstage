import React, { Component } from 'react'
import Login from '../Login'
import Home from '../Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/home' component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    }
}

export default App;