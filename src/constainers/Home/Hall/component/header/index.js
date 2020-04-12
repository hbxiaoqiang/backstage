import React , { Component } from 'react';
import { Header as HeaderStyle } from './style';

class Header extends Component{
    render(){
        return (
            <HeaderStyle>
                <div className="welcome">{this.props.appName}</div>
                <span className="exit-login" onClick={this.props.exitLogin}>退出</span>
                <div className="userInfo">
                    <p className="img">
                        <img src={this.props.imgUrl} alt=""/>
                    </p>
                    <p className='nickName'>{this.props.nickName}</p>
                    <p className='type'>
                        <span>{this.props.typeName}</span>
                    </p>
                </div>
            </HeaderStyle>
        )
    }
}

export default Header;