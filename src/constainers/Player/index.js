import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../component/Header';
import { PlayerStyle } from './style';
import LineTitle from '../../component/LineTit';
import Search from '../../component/Search';
import Content from './component/content';
import Fortune from './component/fortune';
import Spread from './component/spread';
import StatusCtr from './component/statusCtr';
import TypeSelect from './component/typeSelect';


class Player extends Component {
    render() {
        return (
            <PlayerStyle>
                <Header
                    title='玩家'
                    backBtn='返回'
                    backHandle={this.props.history.goBack} />
                <LineTitle titleTxt='玩家'/>
                <Search 
                    onSubmit = { null }
                />
                <Content />
                
                <Fortune />
                <Spread />
                <StatusCtr />
                <TypeSelect />
            </PlayerStyle>

        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Player);