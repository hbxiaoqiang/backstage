import React, { Component } from 'react';
import { TotalCountStyle } from './style';
import { Flex,FlexItem } from 'react-weui';

class TotalCount extends Component{
    render(){
        return (
            <TotalCountStyle>
                <Flex>
                    <FlexItem>
                        <i>
                            {
                                this.props.fangkaCost
                            }
                        </i>
                        <p>房卡消耗</p>
                    </FlexItem>
                    <FlexItem>
                        <i>
                            {
                                this.props.playerRech
                            }
                        </i>
                        <p>玩家充值</p>
                    </FlexItem>
                </Flex>
            </TotalCountStyle>
        )
    }
}

export default TotalCount;