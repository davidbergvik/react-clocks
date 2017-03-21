require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Digit from './DigitComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Digit value="0"/>
        <Digit value="1"/>
        <Digit value="8"/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
