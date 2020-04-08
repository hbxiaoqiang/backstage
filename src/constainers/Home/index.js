import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo, actions as appActions } from '../../redux/modules/app';
import config from '../../config';
import { locationMethod } from '../../until/tools';
import Header from './component/header';
import Footer from '../../component/Footer';
import LineTitle from '../../component/LineTit';
import Program from './component/program';
import { HomeStyle } from './style';

class Home extends Component{
    render(){
        return (
            <HomeStyle className='Home'>
                {
                    this.props.userInfo.UserId?(
                        <Header 
                            appName={config.appName[config.partnerId]}
                            exitLogin={ this.onExit }
                            imgUrl={
                                config.serverIp+config.imgPath+this.props.userInfo.UserId+".jpg"
                            }
                            nickName={this.props.userInfo.NickName}
                            typeName={config.userTypeName[this.props.userInfo.TypeId]}
                        />
                    ):null
                }
                <LineTitle titleTxt='类目'/>
                <Program typeId={this.props.userInfo.TypeId} />
                <Footer index='0' />
            </HomeStyle>
        )
    }

    componentDidMount(){
        this.props.getFristOrDefaul();
    }

    onExit=()=>{
        this.props.onExit();
        locationMethod.href('/');
    }
}

const mapStateToProps=(state)=>({
    userInfo:getUserInfo(state)
})

const mapDispatchToProps=(dispatch)=>({
    getFristOrDefaul:bindActionCreators(appActions.fristOrDefaul,dispatch),
    onExit:bindActionCreators(appActions.exitLogin,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);