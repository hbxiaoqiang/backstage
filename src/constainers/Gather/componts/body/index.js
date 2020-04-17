import React from 'react'
import { BodyStyle } from './style'
import { Cells, Cell, CellBody, CellFooter } from 'react-weui'

export default function index(props) {
    return (
        <BodyStyle>
            <Cells>
                <Cell>
                    <CellBody>广告费总额：</CellBody>
                    <CellFooter>
                        {props.totalData.adCount}
                    </CellFooter>
                </Cell>
                <Cell>
                    <CellBody>充值总额：</CellBody>
                    <CellFooter>
                        {props.totalData.recharge}
                    </CellFooter>
                </Cell>
            </Cells>
        </BodyStyle>
    )
}

