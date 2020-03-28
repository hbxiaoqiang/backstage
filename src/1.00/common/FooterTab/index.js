import React, { Component } from 'react';
import {Footer} from './style';
import { Flex ,FlexItem } from 'react-weui';

class FooterTab extends Component{
    render(){
        return (
            <Footer>
                <Flex>
                    <FlexItem>
                        <a href="/">
                            <i className="iconfont icon-shouye1"></i>
                            <p>首页</p>
                        </a>
                    </FlexItem>
                    <FlexItem>
                    <a href="/">
                            <i className="iconfont icon-tongji2"></i>
                            <p>游戏统计</p>
                        </a>
                    </FlexItem>
                    <FlexItem>
                    <a href="/">
                            <i className="iconfont icon-qianbao"></i>
                            <p>充值统计</p>
                        </a>
                    </FlexItem>
                </Flex>
            </Footer>
        )
    }
}

export default FooterTab;