'use strict';

import React from 'react';
import TimeUnit from './TimeUnitComponent'

require('styles//Clock.css');

class ClockComponent extends React.Component {

   render() {
    const currentDate = this.props.date;
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours()
    return (
      <div className={"clock-component " + (this.props.className ? this.props.className: '')}>
        <div className="digits">
          <TimeUnit minDigits="2" timeValue={hours}/>
          <TimeUnit minDigits="2" timeValue={minutes}/>
          <TimeUnit minDigits="2" timeValue={seconds}/>
        </div>
      </div>
    );
  }

}

ClockComponent.displayName = 'ClockComponent';

// Uncomment properties you need
// ClockComponent.propTypes = {};
// ClockComponent.defaultProps = {};

export default ClockComponent;
