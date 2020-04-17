import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GatherStyle } from './style';
import { bindActionCreators } from 'redux';
import { getTotalData,getDateTimer,actions } from '../../redux/modules/gather';
import Header from '../../component/Header';
import LineTit from '../../component/LineTit';
import DateTab from '../../component/DateTab';
import DateSelect from '../../component/DateSelect';
import { dateTxt } from '../../until/tools';
import Body from './componts/body'

class Gather extends Component {
    render() {
        const { diyTime, actions,
            dateTimes: { startTime, endTime },
            totalData
        } = this.props
        return (
            <GatherStyle>
                <Header 
                    title= '数据汇总'
                    backHandle={this.props.history.goBack}
                />
                 <DateTab
                    getData={actions.userBigSta}
                    diy={actions.diyTime}
                />
                <DateSelect
                    active={diyTime}
                    getData={actions.userBigSta}
                />
                <LineTit titleTxt={
                    dateTxt(startTime, endTime)
                } />
                <Body 
                totalData = { totalData }
                />
            </GatherStyle>
        );
    }

    componentDidMount() {
        const { actions,
            dateTimes: { startTime, endTime }
        } = this.props
        actions.userBigSta(startTime, endTime)
    }
}

const mapStateToProps = state =>({
    totalData: getTotalData(state),
    dateTimes:getDateTimer(state)
})
const mapDispatchToProps = dispatch =>({
    actions:bindActionCreators(actions,dispatch)
})

export default connect(
    mapStateToProps,mapDispatchToProps
)(Gather);