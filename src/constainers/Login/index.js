import React, { Component } from "react";
import { Form,FormCell,CellHeader,Label,CellBody,Input,ButtonArea ,Button,Dialog } from 'react-weui';
import { Page } from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as loginActions, getUserName, getPassWord, getTipInfo } from '../../redux/modules/login';


class Login extends Component{
    render(){
        return (
            <>
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
                        <Button href="#!" onClick={ this.submit }>登录</Button>
                    </ButtonArea>
                </div>
            </Page>
            {
                this.props.tipInfo?(
                    <Dialog type='ios' title='提示' buttons={[
                        {
                            label: '确定',
                            onClick: this.props.loginActions.clearTip
                        }
                    ]} show={true}>
                        {this.props.tipInfo}
                    </Dialog>
                ):null
            }
            </>
        )
    }

    submit=()=>{
        this.props.loginActions.submitData()
    }
}

const mapStateToProps= (state,props)=>({
    userName:getUserName(state),
    passWord:getPassWord(state),
    tipInfo:getTipInfo(state)
})

const mapDispatchToProps = (dispatch) => ({
    loginActions:bindActionCreators(loginActions,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);