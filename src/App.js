import React from "react";
import "./App.css";
// import Button from './button';
import Input from "./input/input";
// import Choicelist from './choices';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enterInput: "Input",
    };

    // handleChange = (event) => {
    //   const input = event.target.name;

    //   this.setState({
    //     enterInput: event.target.value
    //   });
    // }
  }

  render() {
    return (
      <div>
        <Input name="enterInput" />
      </div>
    );
  }
}

export default App;
