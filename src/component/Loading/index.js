import React , { Component } from 'react';
import { LoadingStyle } from './sytle';
class Loading extends Component{
    render(){
        return (
            <LoadingStyle>
                <div className="loader-inner ball-clip-rotate">
                    <div></div>
                </div>
            </LoadingStyle>
        )
    }
}

export default Loading;