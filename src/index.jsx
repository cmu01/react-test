import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import {connect, Provider} from 'react-redux';
import $ from 'jquery';
import { createStore, applyMiddleware } from 'redux';
import counter from './reducers/reducers';
import MyButton from './module/myButton.jsx';
import MyInput from './module/myInput.jsx';
import Login from './module/login/login.jsx';
import Main from './module/main/main.jsx';
import renderDom from '../redux/index3.jsx';
import 'muicss/dist/css/mui.css';
import './style.css';

const store = createStore(counter);

// 建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
const mapStateToProps = (state) => {
  // return {
  //   userName: state.userName,
  //   passWord: state.passWord,
  //   saved: state.saved
  // }
  return state;
};

// 用来建立 UI 组件的参数到store.dispatch方法的映射
const mapDispatchToProps = (dispatch, getState) => {
  const that = this;

  return {
    onCheck: (userName, passWord, state = {}) => {
      state.serverRequest = $.get('/src/source/response.js', {userName, passWord}, function(result, status) {
        // if (status === 'success') {
        //   history.push('/main');
        // }
        dispatch({type: 'onCheck', status});
      });
      // state.serverRequest = $.get({
      //   url: '/src/source/response.js',//string类型的参数，发送请求的地址
      //   type: 'get',//请求方式（post or get）默认为get
      //   contenType: "application/json;charset-utf-8",//发送信息至服务器时内容编码类型
      //   dataType: 'text',//预期服务器返回的数据类型
      //   data: {},//发送的请求数据
      //   success: function (data, status) {
      //     console.log(data, status);
      //   }
      // });
    },
    onCancle: () => dispatch({type: 'cancle'}),
    updateName: (e) => dispatch({type: 'updateName', value: e.target.value}),
    updatePassWord: (e) => dispatch({type: 'updatePassWord', value: e.target.value})
  }
};

const preApp = (App) => {
  // connect方法，用于从 UI 组件生成容器组件
  // connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新
  return connect(mapStateToProps, mapDispatchToProps)(App);
}

const getApp = () => {
  // Provider组件，可以让容器组件拿到state
  // exact 完全匹配， 必须只是当前path才会执行， 否则只要包含当前路径就会执行
  return (
    <Provider store = {store}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={preApp(renderDom)}></Route>
          <Route path='/login' component={preApp(Login)} ></Route>
          <Route path='/main' component={preApp(Main)}></Route>
          <Route path='/input' component={preApp(MyInput)}></Route>
          <Route path='/button' component={preApp(MyButton)}></Route>
          <Route component={preApp(Login)}></Route>
        </Switch>
      </Router>
    </Provider>);
}

const renderApp = () => {
  const status = store.getState().status;

  if (!store.getState().isInit &&　status !== 'success') return;

  if (status === 'success') {
    history.push('/main');
  }
};

render((
  getApp()
 ), document.querySelector('#app'));

store.subscribe(renderApp);