import React, { Component } from 'react';
import { ListStyle } from './style';
import { Flex, FlexItem } from 'react-weui';

class List extends Component {
    render() {
        return (
            <ListStyle>
                <Flex>
                    <div className='img'>
                        <img src=
                            {
                                this.props.url
                            }
                            alt='' />
                    </div>
                    <FlexItem>
                        <Flex>
                            <FlexItem>
                                <div>
                                    {
                                        `${this.props.nickName}（ID：${this.props.userId}）
                                        [${this.props.typeName}]
                                        `
                                    }
                                </div>
                            </FlexItem>
                            <FlexItem>
                                <div className='peopleNum right-aglin'>
                                    {this.props.gamerCount}人
                                </div>
                            </FlexItem>
                        </Flex>
                        <Flex>
                            <FlexItem>
                                <div>
                                    玩家充值：
                                    <span className='org'>
                                        {
                                            this.props.recharge
                                        }
                                    </span>
                                </div>
                            </FlexItem>
                            <FlexItem>
                                <div className='right-aglin'>
                                    推荐人：
                                    {
                                        this.props.spreadName
                                    }
                                </div>
                            </FlexItem>
                        </Flex>
                        
                        <Flex>
                            <FlexItem>
                                <div>
                                    房卡余额：
                                    {
                                            this.props.gold
                                        }
                                </div>
                            </FlexItem>
                            <FlexItem>
                                <div className='right-aglin'>
                                    房卡总消耗：
                                    <span className='org'>
                                    {
                                        this.props.cost
                                    }
                                    </span>
                                </div>
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                </Flex>
            </ListStyle>
        )
    }
}

export default List;