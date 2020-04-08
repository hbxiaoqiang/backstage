import React, { Component } from 'react';
import { Flex, FlexItem } from 'react-weui';
import { DateTabStyle } from './style';
import { getDateStr } from '../../until/tools';
class DateTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1,
            diy:false,
            nav: [
                {
                    id: 1,
                    text: '今日'
                },
                {
                    id: 2,
                    text: '昨日'
                },
                {
                    id: 3,
                    text: '本周'
                },
                {
                    id: 4,
                    text: '本月'
                },
                {
                    id: 5,
                    text: '上月'
                },
                {
                    id: 6,
                    text: '自定义'
                }
            ]
        }
    }
    render() {
        const { nav, selected } = this.state;
        return (
            <DateTabStyle>
                <Flex>
                    {
                        nav.map((value, index) => {
                            return (
                                <FlexItem
                                    key={value.id}
                                    onClick={() => { this.clickEvent(value.id) }}
                                >
                                    <div className={'item ' + (selected === value.id?'nav-on':'')}>
                                        { value.text }
                                    </div>
                                </FlexItem>
                            )
                        })
                    }
                </Flex>
            </DateTabStyle>
        )
    }

    clickEvent = (id) => {
        
        switch (id) {
            case 1:
                let curDate = getDateStr.CurDate();
                this.props.getData(curDate, curDate);
                break;
            case 2:
                let yesDay = getDateStr.AddDay(-1);
                this.props.getData(yesDay, yesDay)
                break;
            case 3:
                this.props.getData(getDateStr.getWeekOnDay(), getDateStr.CurDate())
                break;
            case 4:
                this.props.getData(getDateStr.getMothOnDay(), getDateStr.CurDate())
                break;
            case 5:
                let month = getDateStr.getPreMonth()
                this.props.getData(month[0], month[1])
                break;
            default:
                this.setState((preState)=>{
                    this.props.diy(!preState.diy)
                    return {
                        diy:!preState.diy
                    }
                })
               
        }
        if(this.state.selected !== id){
            this.setState({
                selected:id,
                diy:false
            })
        }
    }
}

export default DateTab;