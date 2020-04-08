import React,{ Component } from 'react';
import { Flex, FlexItem } from 'react-weui';
import { Footer as FooterTab } from './style';
import { footerNav } from '../../config';
import { Link } from 'react-router-dom'
class Footer extends Component{
    render(){
        return(
            <FooterTab>
                <Flex>
                    {
                        Object.values(footerNav).map((value,index)=>{
                            return (
                        <FlexItem key={index}>
                            <Link to={value.href} className={Number.parseInt(this.props.index)===index?'active':null}>
                                <i className={value.ico}></i>
                                <p>{value.name}</p>
                            </Link>
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