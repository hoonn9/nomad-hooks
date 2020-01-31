import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>{item}Hello CodeSandbdasdsox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem} />
      <button onClick={decrementItem} />
    </div>
  );
};

class AppUgly extends React.Component {
  state = {
    item: 1
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>{item}Hello CodeSandbdasdsox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem} />
        <button onClick={this.decrementItem} />
      </div>
    );
  }
  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      };
    });
  };
  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      };
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppUgly />, rootElement);
