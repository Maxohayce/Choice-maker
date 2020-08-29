import React from "react";
// import LinkButton from "../linkButton/linkbutton";
import Button from "../button/button";
import "../input/input.css";
import ChoiceList from "../choices";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      firstOption: "",
      secondOption: "",
      thirdOption: "",
      fourthOption: "",
    };
  }

  myChangeHandler = (event) => {
    const quest = event.target.question;
    // const [option1, option2, option3, option4] = [
    //   event.target.firstOption,
    //   event.target.secondOption,
    //   event.target.thirdOption,
    //   event.target.fourthOption, ];

    let option1 = "";
    let option2 = "";
    let option3 = "";
    let option4 = "";

    const options = [option1, option2, option3, option4] || [
      event.target.firstOption,
      event.target.secondOption,
      event.target.thirdOption,
      event.target.fourthOption,
    ];

    let val = event.target.value;

    this.setState({
      [quest]: val,
      options,

      // [option1]: val,
      // [option2]: val,
      // [option3]: val,
      // [option4]: val
    });
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1> Welcome to our choice-maker</h1>
          <p>Enter your question and options in the input placeholder below</p>
        </header>

        <section className="section">
          <form action="href" className="choice-container">
            <input
              onChange={this.myChangeHandler}
              value={this.state.quest}
              name="question"
              type="text"
              placeholder="What's your question?"
            ></input>
            <input
              onChange={this.myChangeHandler}
              value={this.state.option1}
              name="firstOption"
              type="text"
              placeholder="first option"
            ></input>
            <input
              onChange={this.myChangeHandler}
              value={this.state.option2}
              name="secondOption"
              type="text"
              placeholder="Second option"
            ></input>
            <input
              onChange={this.myChangeHandler}
              value={this.state.option3}
              name="thirdOption"
              type="text"
              placeholder="third option"
            ></input>
            <input
              onChange={this.myChangeHandler}
              value={this.state.option4}
              name="fourthOption"
              type="text"
              placeholder="fourth option"
            ></input>
          </form>
          {/* <LinkButton 
              to='/path/to/choiceList'
              onClick={(event) => {
                console.log('custom event here!', event)
              }}
          ></LinkButton> */}
        </section>
        <Button onClick={this.myChangeHandler.bind(this)} />
        <ChoiceList
          quest={this.state.question}
          option1={this.state.firstOption}
          option2={this.state.secondOption}
          option3={this.state.thirdOption}
          option4={this.state.fourthOption}
        ></ChoiceList>
      </div>
    );
  }
}
// ReactDOM.render(<Input/>, document.getElementById('root'));

export default Input;
