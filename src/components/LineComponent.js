'use strict';

import React from 'react';

require('styles//Line.css');

let LineComponent = (props) => (
/*  const dirChars = ['-','|','/','//']
  const dirClasses = ['horizontal','vertical','diagonal-top-bottom','diagonal-bottom-top']
  let currentDirectionClass = dirClasses[dirChars.indexOf(direction)];*/

  <div className={'line-component ' +
    ((props.direction == '-') ? 'horizontal':'') +
    ((props.direction == '|') ? 'vertical':'') +
    ((props.direction == '!/') ? 'diagonal-top-bottom':'') +
    ((props.direction == '/') ? 'diagonal-bottom-top':'')
  }>
  </div>

);

LineComponent.displayName = 'LineComponent';

// Uncomment properties you need
// LineComponent.propTypes = {};
// LineComponent.defaultProps = {};

export default LineComponent;
