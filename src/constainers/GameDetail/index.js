import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GameDetailStyle } from './style';
import Header from '../../component/Header';

class GameDetail extends Component {
    render() {
        return (
            <GameDetailStyle>
                <Header 
                title = '游戏详情'
                backBtn = '返回'
                backHandle={this.props.history.goBack}
                />
            </GameDetailStyle>
        );
    }
}

const mapStateToProps = state =>({})
const mapDispatchToProps = dispatch =>({})

export default connect(
    mapStateToProps,mapDispatchToProps
)(GameDetail);