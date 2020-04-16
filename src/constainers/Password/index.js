import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PasswordStyle } from './style';
import Header from '../../component/Header';

class Password extends Component {
    render() {
        return (
            <PasswordStyle>
                <Header 
                 title = '修改密码'
                 backBtn = '返回'
                 backHandle={this.props.history.goBack}
                />
            </PasswordStyle>
        );
    }
}

const mapStateToProps = state =>({})
const mapDispatchToProps = dispatch =>({})

export default connect(
    mapStateToProps,mapDispatchToProps
)(Password);