import React, { Component } from 'react';
import { HeaderStyle } from './style';
class Header extends Component {
    render() {
        return (
            <HeaderStyle>
               {
                   this.props.backBtn?(
                    <span onClick={this.props.backHandle} className="back-top">{this.props.backBtn}</span>
                   ):null
               }
                <p>{this.props.title}</p>
                {
                    this.props.otherBtn?
                    <span onClick={this.props.otherHandle} className="other-btn">{
                        this.props.otherBtn
                    }</span>:null
                }
            </HeaderStyle>
        )
    }

    // backHandle=()=>{
    //     historyMethod.back();
    // }
}

export default Header;