import React,{ Component } from 'react';
import { Flex, FlexItem } from 'react-weui';
import { TabStyle } from './style'
import {  Link } from 'react-router-dom';

class Tab extends Component {
    render(){
        return (
            <TabStyle>
                <Flex>
                    <FlexItem>
                        <div href='!#' className='tab active'>
                            赠送房卡
                        </div>
                    </FlexItem>
                    <FlexItem>
                        <Link to='/goldRecord' className='tab'>
                            房卡记录
                        </Link>
                    </FlexItem>
                    <FlexItem>
                        <Link to='/consume'  className='tab'>
                            赠送记录
                        </Link>
                    </FlexItem>
                    <FlexItem>
                        <Link to='/consume'  className='tab'>
                            充值记录
                        </Link>
                    </FlexItem>
                </Flex>
            </TabStyle>
        )
    }
}

export default Tab;