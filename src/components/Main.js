require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Clock from './ClockComponent';
import Timer from './TimerComponent';


class AppComponent extends React.Component {
    render() {
      const targetDate = new Date('April 12, 2017 22:00:00');
      //<Clock/>
      return (
        <div>
          <Timer targetDate = {targetDate}/>
        </div>
      )
  }
}
AppComponent.defaultProps = {
};

export default AppComponent;
