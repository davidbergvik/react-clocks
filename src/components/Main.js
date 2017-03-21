require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TimeUnit from './TimeUnitComponent'


class AppComponent extends React.Component {
  render() {
    const currentDate = new Date();
    const currentTimeSeconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours()
    return (
      <div className="index">
        <TimeUnit minDigits="2" timeValue={hours}/>
        <TimeUnit minDigits="2" timeValue={minutes}/>
        <TimeUnit minDigits="2" timeValue={currentTimeSeconds}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
