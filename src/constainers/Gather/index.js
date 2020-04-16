import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GatherStyle } from './style';

class Gather extends Component {
    render() {
        return (
            <GatherStyle>
                
            </GatherStyle>
        );
    }
}

const mapStateToProps = state =>({})
const mapDispatchToProps = dispatch =>({})

export default connect(
    mapStateToProps,mapDispatchToProps
)(Gather);