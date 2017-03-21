require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import LineQuadrant from './LineQuadrantComponent';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <LineQuadrant/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
