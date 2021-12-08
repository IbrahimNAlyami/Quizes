/*=================  Quiz05: React functional and class components methode =================== */

/* 1- create a react class component and do the following:
   a- create a state called message and initialize it as an empty string, then insert it inside the the returned component.
   b- when the component mounts, change the value of the message state the value to the string "welcome to the jungle"
   c- create a state called message2 and do the same steps as in a and b but change the message2 to "quiz are awesome :)" state when the component updates.
   d- notice what happens in when you run the component and explain it
   e- write a code to prevent this behavior, and explain it
*/
/*       write your code her      */
import React, { Component } from "react";
export default class Quiz05 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstMessage: "",
      SecondMessage: "",
    };
  }
  componentDidMount() {
    this.setState({
      firstMessage: "welcome to the jungle",
    });
  }
  componentDidUpdate(Props, State) {
    if(State.SecondMessage === this.state.SecondMessage) {
      this.setState({
        SecondMessage: "quiz are awesome :) very awesome",
      });
    }
  }
  render() {
    return (
      <div>
         <ul>
            <li>
            <p>{this.state.firstMessage}</p>
            </li>
         </ul>
      </div>
    );
  }
}

/* 2- create a functional react component that has a state "insideInput", a state "changeCounter", and a state "number". then add/do the following:
    a- add an input and make it change the "insideInput" state only when you press enter.
    b- add a button that (when clicked) will add 1 to changeCounter and have it rendered above the button
    c- generate a random number to be put inside the number and render it whenever changeCounter is changed
  */

/*       write your code her      */
import React, { useState } from "react";

export default function Q2() {
  const [insideInput, setInsideInput] = useState("");
  const [changeCounter, setChangeCounter] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <div>
      <input
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            setInsideInput("Welcome to quiz 5 :)");
          }
        }}
      >
      </input>
      <h4>{insideInput}</h4>
      <h4>{number}</h4>
      <h4>{changeCounter}</h4>
      <input
        type="button"
        value="onClick"
        onClick={() => {
          setChangeCounter(changeCounter + 1);
          setNumber(Math.floor(Math.random() * 100));
        }}
      ></input>
    </div>
  );
}







/* 3- connect the previous two components inside a react app, and add the following:
   a- create a state "crossingState" inside app.js.
   b- render the state inside the class component that you made
   c- have the state setter inside the functional component and make the change method using a dropdown list
   d- the dropdown list will have 5 choices, each choice will be a day of the week, and the state will change based on the day chosen
*/

/*       write your code her      */
