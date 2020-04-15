import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../component/Header';
import GoldHeader from './component/Header';
import Tab from './component/Tab';
import From from './component/Form';
import CheckPup from './component/CheckPup';
import { selecter,actions } from '../../redux/modules/gold';
import { getUserInfo,actions as appAction } from '../../redux/modules/app';
import config from '../../config';
import { GoldStyle } from './style'

class Gold extends Component {
    render(){
        return (
            <GoldStyle>
                <Header 
                title = '房卡'
                backBtn = '返回'
                backHandle={this.props.history.goBack}
                />
                <GoldHeader 
                gold = { this.props.gold }
                />
                <Tab />
                <From 
                giveGold = { this.props.actions.giving }
                checkUserInfo = { this.props.actions.getUserInfo }
                />

                {
                    this.props.playerInfo.NickName?
                    <CheckPup 
                    headimg={config.serverIp+config.imgPath+this.props.playerInfo.UserId+".jpg"}
                    nickname={this.props.playerInfo.NickName}
                    gold={this.props.playerInfo.Gold}
                    close = { this.props.actions.closeChcekPup }
                    />:
                    null
                }
            </GoldStyle>
        )
    }

    componentDidMount(){
        this.props.fristOrDefaul()
    }
}

const mapStateToProps = state => ({
    gold:getUserInfo(state).Gold,
    playerInfo:selecter.getPlayerInfo(state)
});

const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators(actions,dispatch),
    fristOrDefaul:bindActionCreators(appAction.fristOrDefaul,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Gold);