import React, { Component } from 'react';
import { TotalCountStyle } from './style';
import { Flex,FlexItem } from 'react-weui';

class TotalCount extends Component {
    render(){
        return (
            <TotalCountStyle>
                <Flex>
                    <FlexItem>
                        <i className='num'>
                            {this.props.register}
                        </i>
                        <p className=''>注册人数</p>
                    </FlexItem>
                    <FlexItem>
                        <i className='num'>{this.props.totalCount}</i>
                        <p className=''>创局总数</p>
                    </FlexItem>
                </Flex>
            </TotalCountStyle>
        )
    }
}
export default TotalCount;