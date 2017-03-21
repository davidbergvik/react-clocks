'use strict';

import React from 'react';
import Line from './LineComponent';

require('styles//LineQuadrant.css');

let LineQuadrantComponent = (props) => (
  <div className="linequadrant-component">
    <div className="top-part">
      <Line direction="-"/>
    </div>
    <div className="center-part">
      <Line direction="|"/>
      <Line direction="|"/>
    </div>
    <div className="bottom-part">
    <Line direction="-"/>
    </div>

  </div>
);

LineQuadrantComponent.displayName = 'LineQuadrantComponent';

// Uncomment properties you need
// LineQuadrantComponent.propTypes = {};
// LineQuadrantComponent.defaultProps = {};

export default LineQuadrantComponent;
