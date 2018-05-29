import React from 'react';
import {render} from 'react-dom';
import Button from 'muicss/lib/react/button';

export default class Cancle extends React.Component {
  constructor(props) {
    super(props);
  }

  onClike(e) {
    console.log(e, this.props);
  }

  render() {
    return (<Button color='primary' onClick={this.onClick}>Cancle</Button>)
  }
}