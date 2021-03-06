import React, { Component } from 'react';
import { ContentStyle } from './style';
import List from './list';
import config from '../../../../config';

const headImgPath = id => {
    return config.serverIp + config.imgPath + id + '.jpg';
}

export default class Content extends Component{
    render(){
        return (
            <ContentStyle>
                {
                    this.props.items.map((value)=>{
                       return <List 
                                key={value.Id}
                                registDate={ value.RegistDate }
                                typeName = {config.userTypeName[value.TypeId]}
                                nickName = { value.NickName }
                                id = {value.Id}
                                imgUrl = { headImgPath(value.Id) }
                                spreadName = { value.SpreadName }
                                fangka = { value.Gold }
                                fandian = {
                                     value.TypeId < config.userType.Gamer && value.TypeId > config.userType.Programer
                                     ? (value.Per ? value.Per*100 +'%':0):-1
                                    }
                                jifen = { value.SumScore }
                                lastDate = { value.LastGameTime?value.LastGameTime.replace("T", " ").split(".")[0]:'' }
                                fortune = { 
                                    value.Fortune === null || value.Fortune ===100 ?
                                    '正常':(value.Fortune - 100) + '%'
                                }
                                eidtFortune= {
                                     ()=>{ this.props.eidtFortune(value.Id) } 
                                    }
                                delete = {
                                     ()=>{ this.props.deleteUser(value.Id) } 
                                }
                                eidtSpread = {
                                     () => { this.props.eidtSpread(value.Id) } 
                                    }
                            />
                    })
                }
            </ContentStyle>
        )
    }
}