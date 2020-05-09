import React, { Component } from "react";
import moment, { duration } from "moment";
export default class componentName extends Component {
  state = {
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  };

  addZero(value){
      value = String(value);
      while(value.length <2){
          value = `0${value}`
      }
      return value
  }
  setCountdown() {
    console.log(this.props.futureDate);
    const futureDate = moment(this.props.futureDate);
    const today = moment();
    const clockDuration = duration(futureDate.diff(today));
    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const mins = clockDuration.minutes();
    const secs = clockDuration.seconds();
    this.setState({
      days,
      hours,
      mins,
      secs,
    });
  }
  componentDidMount() {
    this.setCountdown();
    this.interval = setInterval(() => {
      this.setCountdown();
    }, 1000);
  }
  componentWillMount() {
    clearInterval(this.interval);
    
  }
  render() {
    return (
      <div className="countdown">
        {Object.keys(this.state).map((key, i) => (
          <div key={i} className="countdown-segment">
            <span  className="countdown-segment-number">
                {this.addZero(this.state[key])}</span>
            <span className="countdown-segment-caption">
              {key.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
