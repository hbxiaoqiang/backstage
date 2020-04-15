import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCommon, actions as appActions } from '../../redux/modules/app';
import Login from '../Login';
import Home from '../Home';
import Player from '../Player';
import Gold from '../Gold';
import Loading from '../../component/Loading';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Toptips,Dialog } from 'react-weui';
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
                                        <Route path='/gold' component={Gold} />
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
            {
                this.props.common.alert ? 
                (<Dialog type="ios" 
                title='提示'
                buttons={
                    [
                        {
                            label: '确定',
                            onClick: this.props.clearAlert
                        }
                    ]
                }
                show={true}>
                    {this.props.common.alert}
                </Dialog>) : null
            }
            {
                this.props.common.confirm.tip ? 
                (<Dialog type="ios" 
                title='提示'
                buttons={
                    [
                        {
                            type: 'default',
                            label: '取消',
                            onClick: this.props.clearConfirm
                        },
                        {
                            type: 'primary',
                            label: '确定',
                            onClick: this.props.common.confirm.sureCall
                        },
                    ]
                }
                show={true}>
                    {this.props.common.confirm.tip}
                </Dialog>) : null
            }
            
        </>
    }

}

const mapStateToProps = (state) => ({
    common: getCommon(state)
})

const mapDispatchToProps = (dispatch) => ({
    clearTips: ()=>dispatch(appActions.clearTopTips()),
    clearAlert: ()=>dispatch(appActions.clearAlert()),
    clearConfirm:()=>dispatch(appActions.clearConfirm())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);