import React ,{ Component } from 'react';
import { LineTit } from './style'

class LineTitle extends Component {
    render(){
        return (
            <LineTit>
                {
                    this.props.titleTxt
                }
            </LineTit>
        )
    }
}

export default LineTitle