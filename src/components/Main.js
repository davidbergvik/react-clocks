require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Clock from './ClockComponent';
import Timer from './TimerComponent';
import CircularClock from './CircularClockComponent';
import AlarmClock from './AlarmClockComponent';

class AppComponent extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     currentDate: new Date(),
     alarms: [{
       title:"Leave for airport",
       date:new Date('April 7, 2017 10:00:00'),
       isArmed: false,
       timeIsUp:false
     },
     {
         title:"Leave for flight back to Stockholm",
       date:new Date('April 18, 2017 09:00:00'),
       isArmed: false,
       timeIsUp:false
     },
     {
         title:"Egg Alarm",
       date:new Date('April 1, 2017 00:23:30'),
       isArmed: false,
       timeIsUp:false
     }
     ]


   };
 }

 handleAlarmToggle(index){
   let newAlarms = this.state.alarms;
   let alarm = newAlarms[index];
   alarm.isArmed = !alarm.isArmed;
   alarm.timeIsUp = false;
   newAlarms[index] = alarm;
   this.setState({
     alarms: newAlarms
   })

 }
handleAlarmTrigger(index){
  let newAlarms = this.state.alarms;
  let alarm = newAlarms[index];
  alarm.timeIsUp = true;
  newAlarms[index] = alarm;
  this.setState({
    alarms: newAlarms
  })
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
    });
  }
  render() {
    const alarmData = this.state.alarms;
    const currentDate = this.state.currentDate;

    //Render a circular clock with current time
    //Render a old-school digital clock
    //Render all alarms
    return (
      <div className="index">
        <div className="current-time">
          <CircularClock time={currentDate}/>
          <Clock date={currentDate}/>
        </div>
        <h1>Alarms</h1>
        <AlarmClock currentDate={currentDate} onAlarmTrigger={(index) => this.handleAlarmTrigger(index)} onAlarmToggle={(index) => this.handleAlarmToggle(index)} alarmData = {alarmData}/>
      </div>
    )
  }
}
AppComponent.defaultProps = {
};

export default AppComponent;
