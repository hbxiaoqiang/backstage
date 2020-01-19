import React,{ Component } from 'react';
import { Top } from './style';
class Topbar extends Component{
    render(){
        return (
           <Top>
                <span className="back-top">返回</span>
                <p>标题</p>
                <span className="other-btn">操作</span>
           </Top>
        );
    }
}

export default Topbar;