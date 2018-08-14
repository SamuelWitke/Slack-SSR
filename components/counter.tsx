import * as React from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount, resetCount } from "../store/example";
import { Dispatch } from "redux";

interface Props {
  dispatch: Dispatch;
  count: number;
}

class Counter extends React.Component<Props> {
  increment = () => {
    const { dispatch } = this.props;
    dispatch<any>(incrementCount());
  };

  decrement = () => {
    const { dispatch } = this.props;
    dispatch<any>(decrementCount());
  };

  reset = () => {
    const { dispatch } = this.props;
    dispatch<any>(resetCount());
  };

  render() {
    const { count } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { example } = state;
  const { count } = example;
  console.log(state);
  return { count };
}

export default connect(mapStateToProps)(Counter);
