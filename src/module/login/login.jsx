import React from 'react';
import {render} from 'react-dom';
// import User from './user.jsx';
// import Password from './password.jsx';
// import Submit from './submit.jsx';
// import Cancle from './cancle.jsx';
import Checkbox from 'muicss/lib/react/checkbox';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.props = props || {};
    this.handleName = this.handleName.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    const node = document.querySelector('#app');

    node.style.top = 'calc(50% - 150px)';
    node.style.width = '100%';
    node.style.position = 'absolute';
  }

  componentDidMount() {
    console.log('component did mount');
  }

  getStyle() {
    return {
      transform: 'translate(calc(50% - 210px), 0)',
      width: '300px',
      height: '300px',
      margin: 'auto',
      border: '2px solid green',
      fontFamily: 'roboto-regular',
      padding: '20px'
    };
  }

  getTitleStyle() {
    return {
      width:  '100%',
      height: '50px',
      fontSize: '25px',
      color: 'rgb(0,85,183)',
      textAlign: 'center',
      margin: '0 0 20px'
    }
  }

  getInputStyle() {
    return {
      flex: 1,
      height: '30px',
      marginLeft: '5px',
      marginRight: '5px'
    };
  }

  onClick(e) {
    this.props.onCheck(this.userName, this.passWord);
  }

  handleName(e) {
    this.userName = e.target.value;
  }

  handlePwd(e) {
    this.passWord = e.target.value;
  }

  render() {
    return (<div style={this.getStyle()}>
      <div style={this.getTitleStyle()}>Sign In Movie Discover</div>
      <Input label='Email' type = 'email' floatingLabel={true}
        style={this.getInputStyle()} 
        onChange={(e) => this.handleName(e)} required/>
      <Input label = 'Password' type = 'password' 
        floatingLabel={true} onChange={(e) => this.handlePwd(e)} 
        style={this.getInputStyle()} required/>
      <div>
        <Button style={{width: '100%'}} color='primary' onClick={this.onClick}>Sign In</Button>
        <Checkbox name='Remember' label='Remember me' defaultChecked={false} />
        <a>Create an account</a>
        <a style={{float: 'right'}}>Forgot password</a>
      </div>
    </div>);
  }
}