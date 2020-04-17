import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BindMobileStyle } from './style';
import Header from '../../component/Header';
import From from './component/Form';
import CheckPup from '../../component/CheckPup';
import config from '../../config';
import { actions,selector } from '../../redux/modules/bindMObile'

class BindMobile extends Component {
    render() {
        return (
            <BindMobileStyle>
                <Header 
                 title = '绑定手机'
                 backHandle={this.props.history.goBack}
                />
                <From 
                bindMobile = { this.props.actions.updateMobile }
                checkUserInfo = { this.props.actions.getUserInfo }
                />

                {
                    this.props.playerInfo.NickName?
                    <CheckPup 
                    headimg={config.serverIp+config.imgPath+this.props.playerInfo.UserId+".jpg"}
                    nickname={this.props.playerInfo.NickName}
                    close = { this.props.actions.closeChcekPup }
                    />:
                    null
                }
            </BindMobileStyle>
        );
    }
}

const mapStateToProps = state =>({
    playerInfo:selector.getPlayerInfo(state)
})
const mapDispatchToProps = dispatch =>({
    actions:bindActionCreators(actions,dispatch)
})

export default connect(
    mapStateToProps,mapDispatchToProps
)(BindMobile);