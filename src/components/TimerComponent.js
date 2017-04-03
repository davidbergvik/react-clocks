'use strict';

import React from 'react';
import TimeUnit from './TimeUnitComponent'

require('styles//Timer.css');

class TimerComponent extends React.Component {
    constructor(props) {
     super(props);

   }


   calcTimeLeft(currentDate,targetDate){
     let timeLeft = {};
     timeLeft.difference = {};
     timeLeft.timeIsUp = {
       timeIsUp: false
     };
     let timeDiff = targetDate.getTime() - currentDate.getTime();
     if(timeDiff > 0){
       //difference.timeIsUp = false;
       let timeUnitMultiplier = 1000 * 60 * 60 * 24;
       timeLeft.difference.days = this.calcTimeUnitValue(timeDiff,timeUnitMultiplier);
       timeDiff = timeDiff - timeLeft.difference.days*timeUnitMultiplier;
       timeUnitMultiplier = timeUnitMultiplier / 24;
       timeLeft.difference.hours =  this.calcTimeUnitValue(timeDiff,timeUnitMultiplier);
       timeDiff = timeDiff - timeLeft.difference.hours*timeUnitMultiplier;
       timeUnitMultiplier = timeUnitMultiplier / 60;
       timeLeft.difference.minutes =  this.calcTimeUnitValue(timeDiff,timeUnitMultiplier);
       timeDiff = timeDiff - timeLeft.difference.minutes*timeUnitMultiplier;
       timeUnitMultiplier = timeUnitMultiplier / 60;
       timeLeft.difference.seconds =  this.calcTimeUnitValue(timeDiff,timeUnitMultiplier);
     }else{
       onTimeIsUp();
     }

     return timeLeft;
   }
   onTimeIsUp(){
     this.props.onTimeIsUp();
     this.this.props.timeIsUp = true;
   }
   calcTimeUnitValue(timeInMillis,timeUnitMaxValue){
     return Math.floor(( timeInMillis ) / timeUnitMaxValue);
   }
    render() {
      const calculatedTime = this.calcTimeLeft(this.props.currentDate,this.props.targetDate);
      return (
        <div className={"timer-component"+ (this.props.timeIsUp ? " time-is-up" : "")}>
          <div style={{visibility:(calculatedTime.timeIsUp == true) ? (((this.props.currentDate.getSeconds() % 2) == 0) ? 'hidden' : 'visible') : 'visible' }}>
            <TimeUnit minDigits="2" timeValue={calculatedTime.timeIsUp == true ? 0 : calculatedTime.difference.days}/>
            <TimeUnit minDigits="2" timeValue={calculatedTime.timeIsUp == true ? 0 : calculatedTime.difference.hours}/>
            <TimeUnit minDigits="2" timeValue={calculatedTime.timeIsUp == true ? 0 : calculatedTime.difference.minutes}/>
            <TimeUnit minDigits="2" timeValue={calculatedTime.timeIsUp == true ? 0 : calculatedTime.difference.seconds}/>
          </div>
        </div>
      );
    }



}

TimerComponent.displayName = 'TimerComponent';

// Uncomment properties you need
// TimerComponent.propTypes = {};
// TimerComponent.defaultProps = {};

export default TimerComponent;
