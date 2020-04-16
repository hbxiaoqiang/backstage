import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selector } from '../../redux/modules/group';
import { GroupStyle } from './style';
import Header from '../../component/Header';
import {
    SearchBar, Button, ButtonArea, Form, CellHeader,
    FormCell, CellBody, Input, Label
} from 'react-weui'

class Group extends Component {
    render() {
        return (
            <GroupStyle>
                <Header 
                 title = '工会配置'
                 backBtn = '返回'
                 backHandle={this.props.history.goBack}
                />
                <SearchBar
                    onChange={this.changeGroupId}
                    defaultValue={this.props.groupId}
                    placeholder={'搜索'}
                    lang={
                        {
                            cancel: '取消'
                        }
                    }
                    onSubmit={this.props.actions.searchGroup}
                />
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>时间：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type='text'
                                value={this.props.days}
                                onChange={this.changeDays}
                            />
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>胜利：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type='text'
                                value={this.props.winMult}
                                onChange={this.changeWinMult}
                                placeholder='请输入倍数'
                            />
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>失败：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type='text'
                                value={this.props.loseMult}
                                onChange={this.changeLoseMult}
                                placeholder='请输入倍数'
                            />
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button
                     onClick={ this.props.actions.updateControl }
                    >确定</Button>
                </ButtonArea>
                <p className='des'>注：在设置的时间内，输赢倍数不能超过底分*倍数</p>
            </GroupStyle>
        );
    }

    changeGroupId = value => {
        this.props.actions.changeGroupId(value)
    }

    changeDays = e => {
        this.props.actions.changeDays(e.target.value)
    }

    changeWinMult = e => {
        this.props.actions.changeWinMult(e.target.value)
    }

    changeLoseMult = e => {
        this.props.actions.changeLoseMult(e.target.value)
    }
}

const mapStateToProps = state => ({
    groupId: selector.getGoupId(state),
    days: selector.days(state),
    winMult: selector.winMult(state),
    loseMult: selector.loseMult(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Group);