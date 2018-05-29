import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import { createStore } from 'redux';
import counter from './reducers/reducers';
import MyButton from './module/myButton.jsx';
import MyInput from './module/myInput.jsx';
import Login from './module/login/login.jsx';
import renderDom from '../redux/index3.jsx';
import 'muicss/dist/css/mui.css';
import './style.css';

const store = createStore(counter);

const mapStateToProps = (state) => {
  // return {
  //   userName: state.userName,
  //   passWord: state.passWord,
  //   saved: state.saved
  // }
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaved: () => dispatch({type: 'saved'}),
    onCancle: () => dispatch({type: 'cancle'}),
    updateName: (e) => dispatch({type: 'updateName', value: e.target.value}),
    updatePassWord: (e) => dispatch({type: 'updatePassWord', value: e.target.value})
  }
};

const getApp = (App) => {
  return connect(mapStateToProps, mapDispatchToProps)(App);
}

render((
  <Provider store = {store}>
    <Router>
        <Switch>
          <Route path='/' exact component={getApp(renderDom)}></Route>
          <Route path='/login' component={getApp(Login)}></Route>
          <Route path='/input' component={getApp(MyInput)}></Route>
          <Route path='/button' component={getApp(MyButton)}></Route>
        </Switch>
      </Router>
  </Provider>
), document.querySelector('#app'));