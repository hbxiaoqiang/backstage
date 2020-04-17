import React, { Component } from 'react';
import { Form as WeuiForm, FormCell, CellHeader, CellFooter, Label, CellBody, Input, ButtonArea, Button, Dialog } from 'react-weui';
import { FormStyle } from './style';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            mobile: '',
            errMsg: ''
        }
    }

    render() {
        return (
            <FormStyle>
                <WeuiForm>
                    <FormCell>
                        <CellHeader>
                            <Label>玩家Id</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type='text'
                                value={this.state.userId}
                                onChange={this.userIdHandle}
                            />
                        </CellBody>
                        <CellFooter>
                            <Button onClick={this.getUserInfo} type="vcode">核对用户</Button>
                        </CellFooter>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>玩家手机</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type='number'
                                value={this.state.mobile}
                                onChange={this.bindHandle}
                            />
                        </CellBody>
                    </FormCell>
                </WeuiForm>
                <ButtonArea>
                    <Button onClick={this.clickHandle}>确定</Button>
                </ButtonArea>

                {
                    this.state.errMsg ? (
                        <Dialog type='ios' title='提示' buttons={[
                            {
                                label: '确定',
                                onClick: this.alertClick
                            }
                        ]} show={true}>
                            {this.state.errMsg}
                        </Dialog>
                    ) : null
                }
            </FormStyle>
        )
    }

    userIdHandle = (e) => {
        const value = e.target.value;
        this.setState({
            userId: value
        })
    }

    bindHandle = (e) => {
        const value = e.target.value;
        this.setState({
            mobile: value
        })
    }

    clickHandle = () => {
        this.state.userId && this.state.mobile ?
            this.props.bindMobile(this.state.userId, this.state.mobile) :
            this.setState({
                errMsg: '用户ID和赠送数量必须填写'
            })
    }

    alertClick = () => {
        this.setState({
            errMsg: ''
        })
    }

    getUserInfo = () => {
        this.state.userId ? this.props.checkUserInfo(this.state.userId) :
            this.setState({
                errMsg: '请输入用户ID'
            })
    }


}

export default Form;