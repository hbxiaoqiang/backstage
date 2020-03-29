import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/modules/app'

class Home extends Component{
    render(){
        return (
            <div>#######这是首页
                {
                    JSON.stringify(this.props.userInfo)
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    userInfo:getUserInfo(state)
})

export default connect(mapStateToProps,null)(Home);