'use strict';

import React from 'react';
import Clock from './ClockComponent';
import Timer from './TimerComponent';
import Alarm from './AlarmComponent';
require('styles//AlarmClock.css');
class AlarmClockComponent extends React.Component {
  constructor(props) {
   super(props);
 }
renderAlarm(i,currentDate,alarmData){
  return <Alarm
    key={i}
    title={alarmData[i].title}
    isArmed={alarmData[i].isArmed}
    currentDate = {currentDate}
    targetDate={alarmData[i].date}
    onArmedToggle={() => this.props.onAlarmToggle(i)}
    timeIsUp={alarmData[i].timeIsUp}
    onAlarmTrigger={() => this.props.onAlarmTrigger(i)}
    />
}
  renderAlarms(currentDate,alarmData){
    let alarmBody = [];

    for(var i=0;i<alarmData.length;i++){
      alarmBody.push(
        this.renderAlarm(i,currentDate,alarmData)
      )
    }
    return alarmBody;
  }
  //
  render() {
    const currentDate = this.props.currentDate;
    const alarms = this.props.alarmData;
    return (
      <div className="alarmclock-component">
        {this.renderAlarms(currentDate,alarms)}
      </div>
    );
  }
}

AlarmClockComponent.displayName = 'AlarmClockComponent';

// Uncomment properties you need
// AlarmClockComponent.propTypes = {};
// AlarmClockComponent.defaultProps = {};

export default AlarmClockComponent;
