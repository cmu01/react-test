import React from 'react';
import {render} from 'react-dom';
import Input from 'muicss/lib/react/input';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.handleName = this.handleName.bind(this);
  }

  getStyle() {
    return {
      flex: 1,
      height: '30px',
      marginLeft: '5px',
      marginRight: '5px'
    };
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (<Input label='Email' type = 'email' floatingLabel={true}
     style={this.getStyle()} onChange={this.handleName}
     required/>);
  }

}