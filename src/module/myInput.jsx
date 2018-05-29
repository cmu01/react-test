import React from 'react';
import {render} from 'react-dom';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      value: 'event test'
    };
  }

  render() {
    return (<div>
      <form action='/action_page.php'>
        <input type='checkbox' name='vehicle1' value='Bike'/> I have a bike
        First name: <input type='url' name='fname' placeholder='URL'/>
        Last name: <input type='email' name='lname'/>
        <input type='submit' value='Submit'/>
      </form>
    </div>);
  }

  onClick() {
    this.setState({
      value: 'work well'
    });
  }
}

export default MyInput;