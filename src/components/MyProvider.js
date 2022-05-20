import React, { Component } from 'react';
import MyContext from './MyContext';

// Then create a provider Component
class MyProvider extends Component {
  state = {
    name: 'Wess',
    age: 1000,
    cool: true
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;
