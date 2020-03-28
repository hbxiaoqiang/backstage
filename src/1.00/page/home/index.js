import React,{ Component,Fragment } from 'react';
import FooterTab from '../../common/FooterTab';
import TopUserInfo from './component/TopUserInfo'
class HomePage extends Component{
    render(){
        return (
            <Fragment>
                <TopUserInfo />
                <FooterTab />
            </Fragment>
        )
    }
}

export default HomePage;