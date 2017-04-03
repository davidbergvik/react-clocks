'use strict';

import React from 'react';
import Clock from './ClockComponent';
import Checkbox from './CheckboxComponent';
require('styles//Alarm.css');

class AlarmComponent extends React.Component {
  constructor(props) {
   super(props);
 }
  onTimeIsUp(){
    this.props.onAlarmTrigger();
  }
  checkAlarmTrigger(currentDate,targetDate){
    if(((currentDate.getTime() - targetDate.getTime() ) >= 0) && !this.props.timeIsUp && this.props.isArmed){
      this.onTimeIsUp();
      return true;
    }else{
      return false;
    }
  }
  //handles blinking animation for a triggered alarm
  getBlinkStatus(currentDate,alarmHasTriggered){
    if(alarmHasTriggered){
      return (((currentDate.getSeconds() % 2) == 0) ? ' blink-active' : '');
    }
    return '';
  }
  renderDateOrTime(alarmHasTriggered,currentDate,targetDate){
    const dayDivider = 1000 * 60 * 60 * 24;
    const currentDays = Math.floor(currentDate.getTime()/dayDivider);
    const targetDays = Math.floor(targetDate.getTime()/dayDivider);
    if(targetDays-currentDays < 1){
      return (<Clock className={'' + this.getBlinkStatus(this.props.currentDate,(alarmHasTriggered || this.props.timeIsUp))} date={this.props.targetDate}/>)
    }else{
      return (<div className="number-of-days">{(targetDays - currentDays) + " Days"}</div>)
    }
  }
  render(){
    const alarmHasTriggered = this.checkAlarmTrigger(this.props.currentDate,this.props.targetDate);
    return(
      <div className={'alarm-component' + (this.props.timeIsUp ? " time-is-up" :"") + (this.props.isArmed ? " armed" : "")}>

        <p>{this.props.title}</p>
        {this.renderDateOrTime(alarmHasTriggered,this.props.currentDate,this.props.targetDate)}

        <div className='armed-toggle'>
            <Checkbox handleCheckboxChange={()=>this.props.onArmedToggle()} label='' />
        </div>
      </div>
    )
  }
}



AlarmComponent.displayName = 'AlarmComponent';

// Uncomment properties you need
// AlarmComponent.propTypes = {};
// AlarmComponent.defaultthis.props = {};

export default AlarmComponent;
