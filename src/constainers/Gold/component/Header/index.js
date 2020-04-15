import React , { Component } from 'react';
import { HeaderStyle } from './style';
class Header extends Component {
    render(){
        return(
            <HeaderStyle>
                <div className='info'>
                    当前房卡数：<span>
                        {this.props.gold}
                    </span>
                </div>
            </HeaderStyle>
        )
    }
}

export default Header;