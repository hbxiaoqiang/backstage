import React, { Component } from 'react';
import { ListStyle } from './style';
import { Flex, FlexItem } from 'react-weui';
export default class List extends Component {
    render() {
        return (
            <ListStyle>
                <Flex>
                    <FlexItem>
                        <img src={this.props.url} alt='' />
                        <p className="abs">{this.props.gameName}</p>
                    </FlexItem>
                    <FlexItem>
                        <div className='txt'>
                            <i>
                                {this.props.onlineNum}
                            </i>
                            <p>在线人数</p>
                        </div>
                    </FlexItem>
                    <FlexItem>
                        <div className='txt'>
                            <i>
                                {this.props.tableNum}
                            </i>
                            <p>桌数</p>
                        </div>
                    </FlexItem>
                    <FlexItem>
                        <div className='txt'>
                            <i>
                                {this.props.createNum}
                            </i>
                            <p>创局</p>
                        </div>
                    </FlexItem>
                </Flex>
            </ListStyle>
        )
    }
}