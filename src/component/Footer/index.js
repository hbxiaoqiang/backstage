import React,{ Component } from 'react';
import { Flex, FlexItem } from 'react-weui';
import { Footer as FooterTab } from './style';
import { footerNav } from '../../config';
class Footer extends Component{
    render(){
        return(
            <FooterTab>
                <Flex>
                    {
                        Object.values(footerNav).map((value,index)=>{
                            return (
                        <FlexItem key={index}>
                            <a href='#!'
                             onClick={
                                (e)=>{
                                    e.preventDefault();
                                    this.props.page(value.page)
                                }
                            }
                             className={
                                this.props.curPage === value.page?'active':''
                            }>
                                <i className={value.ico}></i>
                                <p>{value.name}</p>
                            </a>
                        </FlexItem>
                            )
                        })
                    }
                </Flex>
            </FooterTab>
        )
    }
}

export default Footer;