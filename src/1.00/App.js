import React ,{ Component,Fragment } from 'react';
import { GlobalStyle } from './style.js'
import 'weui';
import TopUserInfo from './page/home/index';

class App extends Component{
  render(){
    return (
      <Fragment>
        <GlobalStyle />
        <TopUserInfo />
      </Fragment>
    )
  }
}

export default App;
