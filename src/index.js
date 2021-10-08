import React from "react";
import ReactDOM from "react-dom"

class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button onClick={() => {}}>X</button>
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
     return this.props.squares.map((arrayElements, index) => {
       return <Square key={index} />
     });
    }
  }

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }
  render() {
    return <> 
    <Board squares={this.state.squares} 
    />
    </>
  }
}
ReactDOM.render(<Game />,document.getElementById("root"))