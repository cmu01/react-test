import React from 'react';
import {render} from 'react-dom';
import Button from 'muicss/lib/react/button';

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log(e, this.props);
  }

  render() {
    return (<Button style={{width: '100%'}} color='primary' onClick={this.onClick}>Sign In</Button>)
  }
}