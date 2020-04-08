import React, { Component } from 'react';
import { Flex, FlexItem } from 'react-weui';
import { ListStyle } from './style';

export default class List extends Component {
    render() {
        return (
            <ListStyle>
                <Flex>
                    <div className='img'>
                        <img src='' alt='' />
                    </div>
                    <FlexItem>
                        <Flex>
                            <FlexItem>
                                <span className='registDate'>
                                    注册时间:
                                    {this.props.registDate}
                                </span>
                            </FlexItem>
                            <FlexItem>
                                <span className='textRt blue'>
                                    {
                                        this.props.typeName
                                    }
                                </span>
                            </FlexItem>
                        </Flex>
                        <div className='nickName'>
                            {
                                ` ${this.props.nickName}（ID:${this.props.id}）`
                            }
                        </div>
                        <div className='spreadName'>
                            推荐人：{
                                this.props.spreadName
                            }
                        </div>
                        <Flex>
                            <FlexItem>
                                <span className='fkcost'>
                                    房卡：{
                                        this.props.fangka
                                    }
                                </span>
                            </FlexItem>
                            <FlexItem>
                                <span className='textRt'>
                                    {
                                        `${this.props.fandian ? ('返点：' + this.props.fandian) : ''}
                                         积分：${this.props.jifen}
                                        `
                                    }
                                </span>
                            </FlexItem>
                        </Flex>
                        <div className='lastDate'>
                            最后游戏时间：{this.props.lastDate}
                        </div>
                        <Flex>
                            <FlexItem>
                                <div onClick={null} className='fortune textCt blue'>
                                    {
                                        this.props.fortune
                                    }
                                </div>
                            </FlexItem>
                            <FlexItem>
                                <div onClick={null} className='status textCt blue'>
                                    {
                                        this.props.status
                                    }
                                </div>
                            </FlexItem>
                            <FlexItem>
                                <div onClick={null} className='textCt blue'>
                                    归属
                                </div>
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                </Flex>
            </ListStyle>
        )
    }
}