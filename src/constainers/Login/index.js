import React, { Component } from "react";
import { Form,FormCell,CellHeader,Label,CellBody,Input,ButtonArea ,Button } from 'react-weui';
import { Page } from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Login extends Component{
    render(){
        return (
            <Page>
                <div className="page__hd">
                    <h1 className="page__title">登陆后台</h1>
                    <p className="page__desc">非管理员账号不可登陆</p>
                </div>
                <div className="page_bd">
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>账号</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="text" placeholder="请输入账号"/>
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>密码</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="password" placeholder="请输入密码"/>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <ButtonArea>
                        <Button>登录</Button>
                    </ButtonArea>
                </div>
            </Page>
        )
    }
}

const mapStateToProps= (state,props)=>({
    
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login);