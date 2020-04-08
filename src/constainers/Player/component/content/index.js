import React, { Component } from 'react';
import { ContentStyle } from './style';
import List from './list';

export default class Content extends Component{
    render(){
        return (
            <ContentStyle>
                {
                    this.props.items.map((value,index)=>{
                       return <List 
                                key={index}
                            />
                    })
                }
            </ContentStyle>
        )
    }
}