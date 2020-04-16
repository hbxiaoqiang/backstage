import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BindMobileStyle } from './style';
import Header from '../../component/Header';

class BindMobile extends Component {
    render() {
        return (
            <BindMobileStyle>
                <Header 
                 title = '绑定手机'
                 backBtn = '返回'
                 backHandle={this.props.history.goBack}
                />
            </BindMobileStyle>
        );
    }
}

const mapStateToProps = state =>({})
const mapDispatchToProps = dispatch =>({})

export default connect(
    mapStateToProps,mapDispatchToProps
)(BindMobile);