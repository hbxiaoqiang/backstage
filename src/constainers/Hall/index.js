import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    getTotalData, getDateTimer, getGameRecords, getDiyTime,
    actions as hallActions
} from '../../redux/modules/hall';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import DateTab from '../../component/DateTab';
import DateSelect from '../../component/DateSelect';
import TotalCount from './component/totalCount';
import GameCount from './component/gameCout';
import LineTit from '../../component/LineTit';
import { dateTxt } from '../../until/tools';
import { HallStyle } from './style';


class Hall extends Component {
    render() {
        const { diyTime, hallActions,
            dateTimes: { startTime, endTime },
            gameRecords, totalData
        } = this.props
        return (
            <HallStyle>
                <Header title='我的统计' />
                <DateTab 
                getData={hallActions.userSta}
                diy = {hallActions.diyTime}
                />
                <DateSelect
                    active={diyTime}
                    getData={hallActions.userSta}
                />
                <LineTit titleTxt={
                    dateTxt(startTime, endTime)
                } />
                <TotalCount 
                    register={totalData.registCount}
                    totalCount={totalData.totalCount}
                />
                <GameCount 
                    records ={gameRecords}
                />
                <Footer index="1" />
            </HallStyle>

        )
    }

    componentDidMount(){
        const {hallActions,
            dateTimes: { startTime, endTime }
        } = this.props
        hallActions.userSta(startTime,endTime)
    }
}

const mapStateToProps = (state) => ({
    totalData: getTotalData(state),
    dateTimes: getDateTimer(state),
    gameRecords: getGameRecords(state),
    diyTime: getDiyTime(state),
})

const mapDispatchToProps = (dispatch) => ({
    hallActions: bindActionCreators(hallActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Hall);