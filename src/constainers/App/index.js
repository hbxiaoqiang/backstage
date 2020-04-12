import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCommon, actions as appActions } from '../../redux/modules/app';
import Login from '../Login';
import Home from '../Home';
import Player from '../Player';
import Loading from '../../component/Loading';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Toptips } from 'react-weui';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ANIMATION_MAP = {
    PUSH: 'forward',
    POP: 'back'
}
class App extends Component {
    render() {
        return <>
            <BrowserRouter>
                <Route render={(props) => {
                    return (
                        <>
                            <Route exact path='/' component={Login} />
                            
                            <TransitionGroup
                                childFactory={child => React.cloneElement(
                                    child,
                                    { classNames: ANIMATION_MAP[props.history.action] }
                                )}
                            >
                                <CSSTransition
                                    key={props.location.key}
                                    timeout={500}
                                >
                                    <Switch location={props.location}>
                                        <Route path='/home' component={Home} />
                                        <Route path='/player' component={Player} />
                                    </Switch>

                                </CSSTransition>
                            </TransitionGroup>
                        </>
                    )
                }}
                />
            </BrowserRouter>
            {
                this.props.common.loading ? (<Loading />) : null
            }
            {
                this.props.common.topTips ? (
                    <Toptips type="warn" show={true}>{this.props.common.topTips}</Toptips>
                ) : null
            }
        </>
    }

}

const mapStateToProps = (state) => ({
    common: getCommon(state)
})

const mapDispatchToProps = (dispatch) => ({
    clearTips: ()=>dispatch(appActions.clearTopTips())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);