'use strict';

import React from 'react';
import TimeUnit from './TimeUnitComponent'

require('styles//Timer.css');

class TimerComponent extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       currentDate: new Date(),
       targetDate: props.targetDate,
       timeLeft: {
         days:0,
         hours:0,
         minutes:0,
         seconds:0
       }
     };
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
       currentDate: new Date()
     })
     const updatedTimeLeft = this.calcTimeLeft();
     this.setState({
       timeLeft: updatedTimeLeft
     });

   }
   calcTimeLeft(){
     let timeDiff = this.state.targetDate.getTime() - this.state.currentDate.getTime();
     let timeUnitMultiplier = 1000 * 60 * 60 * 24;
     let difference = this.state.timeLeft;
     difference.days = this.calcTimeUnitValue(timeDiff,timeUnitMultiplier);
     timeDiff = timeDiff - difference.days*timeUnitMultiplier;
     timeUnitMultiplier = timeUnitMultiplier / 24;
     difference.hours =  this.calcTimeUnitValue(timeDiff,timeUnitMultiplier);
     timeDiff = timeDiff - difference.hours*timeUnitMultiplier;
     timeUnitMultiplier = timeUnitMultiplier / 60;
     difference.minutes =  this.calcTimeUnitValue(timeDiff,timeUnitMultiplier);
     timeDiff = timeDiff - difference.minutes*timeUnitMultiplier;
     timeUnitMultiplier = timeUnitMultiplier / 60;
     difference.seconds =  this.calcTimeUnitValue(timeDiff,timeUnitMultiplier);

     return difference;
   }
   calcTimeUnitValue(timeInMillis,timeUnitMaxValue){
     return Math.floor(( timeInMillis ) / timeUnitMaxValue);
   }
    render() {
      const timeLeft = this.state.timeLeft == null ? new Date() : this.state.timeLeft;
      return (
        <div className="index">
          <TimeUnit minDigits="2" timeValue={timeLeft.days}/>
          <TimeUnit minDigits="2" timeValue={timeLeft.hours}/>
          <TimeUnit minDigits="2" timeValue={timeLeft.minutes}/>
          <TimeUnit minDigits="2" timeValue={timeLeft.seconds}/>
        </div>
      );
    }



}

TimerComponent.displayName = 'TimerComponent';

// Uncomment properties you need
// TimerComponent.propTypes = {};
// TimerComponent.defaultProps = {};

export default TimerComponent;
