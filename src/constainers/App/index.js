import React, {Component} from 'react'
import Login from '../Login'
import Home from '../Home'
import { BrowserRouter,Switch,Route } from 'react-router-dom'

class App extends Component{
    render(){
        return <>
            <Login />
        </>
    }
}

export default App;