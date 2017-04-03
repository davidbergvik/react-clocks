'use strict';

import React from 'react';
import Line from './LineComponent';

require('styles//CircularClock.css');

class CircularClockComponent extends React.Component {

 calcLineAngleStyle(time,maxTime){
   let angle =  (360 * (time/maxTime));
   let css = {
          transform: 'rotate('+angle+'deg)'
       }
   return css;
 }
  render() {
    const currentDate = this.props.time;
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    const secAngle = this.calcLineAngleStyle(seconds,60);
    const minAngle = this.calcLineAngleStyle(minutes,60);
    const hourAngle = this.calcLineAngleStyle(hours,12);
    return (
      <div className="circularclock-component">
        <div className="clock-edge"></div>
        <div className="clock-background"></div>

        <div className="sec-indicator" style={secAngle}>
            <Line direction="|" visible="true" />
            <Line direction="|" visible="true" />
        </div>
        <div className="min-indicator" style={minAngle}>
            <Line direction="|" visible="true" />
            <Line direction="|" visible="true" />
        </div>
        <div className="hour-indicator" style={hourAngle}>
            <Line direction="|" visible="true" />
        </div>
      </div>
    );
  }
}

CircularClockComponent.displayName = 'CircularClockComponent';

// Uncomment properties you need
// CircularClockComponent.propTypes = {};
// CircularClockComponent.defaultProps = {};

export default CircularClockComponent;
