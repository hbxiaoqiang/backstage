import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions, selecter } from '../../redux/modules/home';
import Footer from '../../component/Footer';
import Hall from './Hall';
import Count from './Count';
import Order from './Order';

class Home extends Component {
    render() {
        return (
            <div>
                {
                    this.props.hall ? <Hall 
                    history={this.props.history}
                    /> : null
                }
                {
                    this.props.count ? <Count /> : null
                }
                {
                    this.props.order ? <Order /> : null
                }
                <Footer 
                    page = { this.props.changePage }
                    curPage = { this.props.curPage }
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    hall: selecter.getHall(state),
    count: selecter.getCount(state),
    order: selecter.getOrder(state),
    curPage:selecter.getCurPage(state)
})

const mapDispatchToProps = dispatch => ({
    changePage:(page)=>dispatch(actions.changePage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)