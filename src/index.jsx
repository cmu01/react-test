import React from 'react';
import {render} from 'react-dom';
import App from './app.jsx';

class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (<div style={this.getStyle()}>
      <App count={0}/>
      <p>It's my test</p>
    </div>);
  }

  getStyle() {
    return {
      background: '#31b0e2'
    }
  }
}

render(<BaseComponent/>, document.getElementById('app'));