import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GameRecordStyle } from './style';
import Header from '../../component/Header';

class GameRecord extends Component {
    render() {
        return (
            <GameRecordStyle>
                 <Header 
                 title = '游戏记录'
                 backBtn = '返回'
                 backHandle={this.props.history.goBack}
                />
            </GameRecordStyle>
        );
    }
}

const mapStateToProps = state =>({})
const mapDispatchToProps = dispatch =>({})

export default connect(
    mapStateToProps,mapDispatchToProps
)(GameRecord);