import React , { Component } from 'react';
import { CheckStyle } from './style';
import { MaskStyle } from '../../../../component/CommonStyle';
class CheckPup extends Component {
    render(){
        return(
            <CheckStyle>
                <MaskStyle onClick={this.props.close}></MaskStyle>
                <div className='content'>
                    <p>
                        请确认信息
                    </p>
                    <p className='img'>
                        <img
                        src={this.props.headimg}
                        alt='' width='50' height='50' />
                    </p>
                    <p className='userInfo'>
                        <span>玩家昵称：</span>
                        {
                            this.props.nickname
                        }
                    </p>
                    <p className='gold'>
                        <span>当前房卡：</span>
                        {
                            this.props.gold
                        }
                    </p>
                </div>
            </CheckStyle>
        )
    }
}

export default CheckPup