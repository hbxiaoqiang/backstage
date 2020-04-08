import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCommon ,actions as appActions} from '../../redux/modules/app';
import Login from '../Login'
import Home from '../Home'
import Order from '../Order'
import Hall from '../Hall';
import Player from '../Player';
import Loading from '../../component/Loading';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Toptips } from 'react-weui';

class App extends Component {
    render() {
        return <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/home' component={Home} />
                    <Route path='/hall' component={Hall} />
                    <Route path='/order' component={Order} />
                    <Route path='/player' component={Player} />
                </Switch>
            </BrowserRouter>
            {
                this.props.common.loading?(<Loading />):null
            }
            {
                this.props.common.topTips?(
                <Toptips type="warn" show={true}>{this.props.common.topTips}</Toptips>
                ):null
            }
        </>
    }

}

const mapStateToProps = (state)=>({
    common:getCommon(state)
})

const mapDispatchToProps = (dispatch)=>({
    clearTips:dispatch(appActions.clearTopTips)
})

export default connect(mapStateToProps,mapDispatchToProps)(App);