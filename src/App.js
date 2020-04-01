import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleOnClick = event => {
    this.props.increaseCount();
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}
//creating prop for App
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
//creating prop for App
const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({ type: "INCREASE_COUNT" })
  };
};
//access store and create props for App
export default connect(mapStateToProps, mapDispatchToProps)(App);
