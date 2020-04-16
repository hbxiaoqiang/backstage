import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConsumeStyle } from './style';
import Header from '../../component/Header';
import LineTit from '../../component/LineTit';
import Body from './component/List';
import { selector,actions } from '../../redux/modules/consume';
import { withUrlParam,getDateStr } from '../../until/tools';
let param = {
}

class Consume extends Component {
    render() {
        return (
            <ConsumeStyle>
                 <Header 
                 title = '充值记录'
                 backBtn = '返回'
                 backHandle={this.props.history.goBack}
                />
                <LineTit 
                    titleTxt = { this.props.scdt + '至' + this.props.ecdt }
                />
                <Body 
                datas={ this.props.datas }
                />
            </ConsumeStyle>
        );
    }

    componentDidMount() {
        let scdt = "2018-06-01", ecdt = getDateStr.CurDate(),
        userId=-1,isPartner=null;
        let seachParam = withUrlParam(this.props.location.search);
        if(seachParam&&seachParam.scdt){
            scdt = seachParam.sd+'T00:00:00';
            ecdt = seachParam.ed+'T23:59:59';
        }
        if(seachParam&&seachParam.userId){
            userId=seachParam.userId
        }
        Object.assign(param,{
            page: 0,
            size: 40,
            scdt,
            ecdt,
            userId,
            isPartner
        })
        this.requestList();
        window.addEventListener('scroll', this.loadMoreEvent);
    }

    componentWillUnmount() {
        this.props.actions.clearData();
        
        window.removeEventListener('scroll', this.loadMoreEvent);
    }

    requestList(){
        if (this.props.loadMore) {
            Object.assign(param, { page: ++param.page })
            this.props.actions.getPageList(param);
        }
    }

    loadMoreEvent = () => {
        if (document.documentElement.scrollTop + 50 >=
            document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            this.requestList()
        }
    }

}

const mapStateToProps = state =>{
    const { getList,getScdt,getEcdt,getLoadmore } = selector;
    return {
        datas:getList(state),
        scdt:getScdt(state),
        ecdt:getEcdt(state),
        loadMore:getLoadmore(state)
    }
}
const mapDispatchToProps = dispatch =>({
    actions:bindActionCreators(actions,dispatch)
})

export default connect(
    mapStateToProps,mapDispatchToProps
)(Consume);