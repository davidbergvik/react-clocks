'use strict';

import React from 'react';
import TimeUnit from './TimeUnitComponent'

require('styles//Clock.css');

class ClockComponent extends React.Component {
  constructor(props) {
   super(props);
   this.state = {date: new Date()};
 }
 componentDidMount() {
   this.timerID = setInterval(
     () => this.tick(),
     1000
   );
 }

 componentWillUnmount() {
   clearInterval(this.timerID);
 }

 tick() {
   this.setState({
     date: new Date()
   });

 }
  render() {
    const currentDate = this.state.date;
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours()
    return (
      <div className="clock-component">
        <TimeUnit minDigits="2" timeValue={hours}/>
        <TimeUnit minDigits="2" timeValue={minutes}/>
        <TimeUnit minDigits="2" timeValue={seconds}/>
      </div>
    );
  }

}

ClockComponent.displayName = 'ClockComponent';

// Uncomment properties you need
// ClockComponent.propTypes = {};
// ClockComponent.defaultProps = {};

export default ClockComponent;
