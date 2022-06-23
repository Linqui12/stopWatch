import React, { Component } from "react";
import styles from "./StopWatch.module.css";
class StopWatchTimeOut extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(0, 0, 0, 0, 0, 0) };
    this.idTimeout = null;
    this.additional = true;
  }
  tick = () => {
    this.setState((state) => {
      const { time } = state;
      const newTime = new Date(time.getTime() + 1000);
      return { time: newTime };
    });
  };
  start = () => {
    //this.stop();
    this.idTimeout = setTimeout(this.tick, 1000);
    this.additional = true;
  };
  stop = () => {
    clearTimeout(this.idTimeout);
    this.idTimeout = null;
    this.additional = false;
  };
  reset = () => {
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
    this.stop();
  };

  componentDidMount() {
    this.start();
  }
  componentDidUpdate() {
    if (this.additional) {
      this.idTimeout = setTimeout(this.tick, 1000);
    }
  }
  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <article className={styles.container}>
        <h2>{time.toLocaleTimeString("it-IT")}</h2>
        <button onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
      </article>
    );
  }
}

export default StopWatchTimeOut;
