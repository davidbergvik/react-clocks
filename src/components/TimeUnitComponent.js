'use strict';

import React from 'react';
import Digit from './DigitComponent';

require('styles//TimeUnit.css');

class TimeUnitComponent extends React.Component {
  getDigitValues(number){
      const digitStrings = (''+number).split('')
      let digitValues = [];
      if(this.props.minDigits > digitStrings.length){
        for(let i = 0;i<( this.props.minDigits - digitStrings.length);i++){
          digitValues.push(0);
        }
      }
       digitStrings.map(function(digitString){
        digitValues.push(parseInt(digitString));
      });
      return digitValues;
  }
  renderDigits(digitValues){
    let digits = [];
    let powerOf = 0;
    digitValues.forEach(function(digitValue){
      digits.push(<Digit key={digitValue + 10*powerOf} value={digitValue}/>)
      powerOf ++;
    });
    return digits;
  }
  render() {
    return (
      <div className="timeunit-component">
        {this.renderDigits(this.getDigitValues(this.props.timeValue))}
      </div>
    );
  }
}

TimeUnitComponent.displayName = 'TimeUnitComponent';

// Uncomment properties you need
// TimeUnitComponent.propTypes = {};
// TimeUnitComponent.defaultProps = {};

export default TimeUnitComponent;
