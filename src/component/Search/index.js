import React ,{ Component } from 'react';
import { SearchBar } from 'react-weui';
import { SearchStyle } from './style';

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }
    render(){
        return (
            <SearchStyle>
                <SearchBar 
                 onChange = { this.changeHandle }
                 defaultValue={ this.state.value }
                 placeholder={ '搜索' }
                 lang = {
                     {
                         cancel:'取消'
                     }
                 }
                 onSubmit = { this.submitHandle }
                />
            </SearchStyle>
        )
    }

    changeHandle = (value,e) =>{
        this.setState((prev)=>({
            value:value
        }))
        if(value === ''){
            this.props.onSubmit();
        }
    }

    submitHandle = ()=>{
        this.props.onSubmit(this.state.value)
    }
}