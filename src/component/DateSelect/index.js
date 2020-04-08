import React, { Component } from 'react';
import { Form, FormCell, CellHeader, Label, CellBody, Input, ButtonArea, Button, Dialog } from 'react-weui';
import { DateSelectStyle } from './style';

class DateSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: '',
            endTime: '',
            errMsg: ''
        }
    }
    render() {
        return (
            <DateSelectStyle>
                <div className={'from ' + (this.props.active ? 'active' : '')}>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>开始日期</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type='date'
                                    value={this.state.startTime}
                                    onChange={this.stHandle}
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>结束日期</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type='date'
                                    value={this.state.endTime}
                                    onChange={this.edHandle}
                                />
                            </CellBody>
                        </FormCell>
                    </Form>
                    <ButtonArea>
                        <Button href="#!" onClick={this.clickHandle}>确定</Button>
                    </ButtonArea>
                </div>
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
            </DateSelectStyle>
        )
    }

    alertClick = () => {
        this.setState((prevState, props) => ({
            errMsg: ''
        }))
    }

    clickHandle = () => {
        let errMsg = '';
        if (!this.state.startTime || !this.state.endTime) {
            errMsg = "请完整选择日期";
        }
        else if (this.state.startTime > this.state.endTime) {
            errMsg = "开始日期不能大于结束日期";
        }
        if (errMsg) {
            this.setState(() => ({
                errMsg: errMsg
            }))
        } else {
            this.props.getData(this.state.startTime, this.state.endTime)
        }
    }
    stHandle = (e) => {
        this.setState({
            startTime: e.target.value
        })
    }
    edHandle = (e) => {
        this.setState({
            endTime: e.target.value
        })
    }
}

export default DateSelect;