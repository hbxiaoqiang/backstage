import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AdminCashStyle } from './style';
import Header from '../../component/Header';
import Body from './componet/Body';
import { getDatas,getLoadMore,actions } from '../../redux/modules/adminCash';

let param = {
}

class AdminCash extends Component {
    render() {
        return (
            <AdminCashStyle>
                 <Header 
                 title = '提现审批'
                 backBtn = '返回'
                 backHandle={this.props.history.goBack}
                />
                <Body 
                datas = {this.props.datas}
                updateFn={ this.props.actions.updateStatus }
                />
            </AdminCashStyle>
        );
    }

    componentDidMount(){
        Object.assign(param,{
            page: 0,
            size: 40,
            status:1,
            type:3
        })
        this.requestDatas();
        window.addEventListener('scroll', this.loadMoreEvent);
    }

    componentWillUnmount() {
        this.props.actions.clearData();    
        window.removeEventListener('scroll', this.loadMoreEvent);
    }

    requestDatas = () => {
        if(this.props.loadMore){
            Object.assign(param, { page: ++param.page })
            this.props.actions.getPageList(param);
        }
    }

    loadMoreEvent = () => {
        if (document.documentElement.scrollTop + 50 >=
            document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            this.requestDatas()
        }
    }
}

const mapStateToProps = state => ({
    datas:getDatas(state),
    loadMore:getLoadMore(state)
});

const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators(actions,dispatch)
});

export default connect(
    mapStateToProps,mapDispatchToProps
)(AdminCash);