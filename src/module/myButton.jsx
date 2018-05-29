import React from 'react';
import {render} from 'react-dom';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      value: 'event test'
    };
  }

  render() {
    return (<div>
      <p>{this.state.value}{this.props.count}</p>
      <button onClick={this.onClick}>Click Me</button>
    </div>);
  }

  onClick() {
    this.setState({
      value: 'work well'
    });
  }
}

export default MyButton;