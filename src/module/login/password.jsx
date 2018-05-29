import React from 'react';
import {render} from 'react-dom';
import Input from 'muicss/lib/react/input';

export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.handlePwd = this.handlePwd.bind(this);
  }

  getStyle() {
    return {
      flex: 1,
      height: '30px',
      marginLeft: '5px',
      marginRight: '5px'
    };
  }

  handlePwd(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (<Input label = 'Password' type = 'password' floatingLabel={true}
     onChange={this.handlePwd} style={this.getStyle()} required/>);
  }
}