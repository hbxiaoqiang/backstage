import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCommon, actions as appActions } from '../../redux/modules/app';
import Login from '../Login';
import Home from '../Home';
import Player from '../Player';
import Gold from '../Gold';
import Notice from '../Notice';
import Group from '../Group';
import BindMobile from '../BindMobile';
import GameDetail from '../GameDetail';
import GameRecord from '../GameRecord';
import Gather from '../Gather';
import Packet from '../Packet';
import Password from '../Password';
import AdminCash from '../AdminCash';
import Consume from '../Consume';
import Loading from '../../component/Loading';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Toptips, Dialog } from 'react-weui';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ANIMATION_MAP = {
    PUSH: 'forward',
    POP: 'back'
}

const outRouter = props => {
    return <Fragment>
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
                    <Route path='/notice' component={Notice} />
                    <Route path='/group' component={Group} />
                    <Route path='/bindMobile' component={BindMobile} />
                    <Route path='/gameDetail' component={GameDetail} />
                    <Route path='/gameRecord' component={GameRecord} />
                    <Route path='/gather' component={Gather} />
                    <Route path='/packet' component={Packet} />
                    <Route path='/password' component={Password} />
                    <Route path='/adminCash' component={AdminCash} />
                    <Route path='/consume/:consume' component={Consume} />
                </Switch>

            </CSSTransition>
        </TransitionGroup>
    </Fragment>
}

const Alert = (tip, fn) => {
    return (<Dialog type="ios"
        title='提示'
        buttons={
            [
                {
                    label: '确定',
                    onClick: fn
                }
            ]
        }
        show={true}>
        {tip}
    </Dialog>)
}

const Confirm = (tip, sure, cancel) => {
    return (<Dialog type="ios"
        title='提示'
        buttons={
            [
                {
                    type: 'default',
                    label: '取消',
                    onClick: cancel
                },
                {
                    type: 'primary',
                    label: '确定',
                    onClick: sure
                },
            ]
        }
        show={true}>
        {tip}
    </Dialog>)
}

class App extends Component {
    render() {
        return <Fragment>
            <BrowserRouter>
                <Route render={props => outRouter(props)}
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
                    Alert(this.props.common.alert, this.props.clearAlert) : null
            }
            {
                this.props.common.confirm.tip ?
                    Confirm(this.props.common.confirm.tip,
                        this.props.common.confirm.sureCall,
                        this.props.clearConfirm) : null
            }

        </Fragment>
    }

}

const mapStateToProps = (state) => ({
    common: getCommon(state)
})

const mapDispatchToProps = (dispatch) => ({
    clearTips: () => dispatch(appActions.clearTopTips()),
    clearAlert: () => dispatch(appActions.clearAlert()),
    clearConfirm: () => dispatch(appActions.clearConfirm())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);