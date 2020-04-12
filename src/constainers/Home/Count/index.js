import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    getTotalData, getDateTimer, getGameRecords, getDiyTime,
    actions as countActions
} from '../../../redux/modules/count';
import Header from '../../../component/Header';
import DateTab from '../../../component/DateTab';
import DateSelect from '../../../component/DateSelect';
import TotalCount from './component/totalCount';
import GameCount from './component/gameCout';
import LineTit from '../../../component/LineTit';
import { dateTxt } from '../../../until/tools';
import { CountStyle } from './style';

import { withRouter } from 'react-router-dom';

class Count extends Component {
    render() {
        const { diyTime, countActions,
            dateTimes: { startTime, endTime },
            gameRecords, totalData
        } = this.props
        return (
            <CountStyle>
                <Header title='我的统计' />
                <DateTab
                    getData={countActions.userSta}
                    diy={countActions.diyTime}
                />
                <DateSelect
                    active={diyTime}
                    getData={countActions.userSta}
                />
                <LineTit titleTxt={
                    dateTxt(startTime, endTime)
                } />
                <TotalCount
                    register={totalData.registCount}
                    totalCount={totalData.totalCount}
                    goToPlayers = { this.goToPlayers }
                />
                <GameCount
                    records={gameRecords}
                />
            </CountStyle>

        )
    }

    componentDidMount() {
        const { countActions,
            dateTimes: { startTime, endTime }
        } = this.props
        countActions.userSta(startTime, endTime)
    }

    goToPlayers = () => {
        const { 
            dateTimes: { startTime, endTime }
        } = this.props
        this.props.history.push(`/player?sd=${startTime}&ed=${endTime}`)
    }
}

const mapStateToProps = (state) => ({
    totalData: getTotalData(state),
    dateTimes: getDateTimer(state),
    gameRecords: getGameRecords(state),
    diyTime: getDiyTime(state),
})

const mapDispatchToProps = (dispatch) => ({
    countActions: bindActionCreators(countActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Count));