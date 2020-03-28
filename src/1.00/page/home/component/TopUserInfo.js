import React,{ Component ,Fragment } from 'react';
import { UserInfo } from '../style'

class TopUserInfo extends Component{
    render(){
        return (
            <Fragment>
                <UserInfo>
                    <div className="welcome">浦江棋牌</div>
                    <span className="exit-login">退出</span>
                </UserInfo>
            </Fragment>
            
        )
    }
}

export default TopUserInfo;