import './App.css';
import React from "react";
import Family from './components/Family';
import MyProvider from './components/MyProvider';

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
