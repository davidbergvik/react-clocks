require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Clock from './ClockComponent';
import Timer from './TimerComponent';
import CircularClock from './CircularClockComponent';

class AppComponent extends React.Component {
    render() {
      const targetDate = new Date('April 12, 2017 22:00:00');
      //<Timer targetDate = {targetDate}/>
      return (
        <div className="index">

          <Clock/>
          <CircularClock/>
        </div>
      )
  }
}
AppComponent.defaultProps = {
};

export default AppComponent;
