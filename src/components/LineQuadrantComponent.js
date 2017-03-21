'use strict';

import React from 'react';
import Line from './LineComponent';

require('styles//LineQuadrant.css');

let LineQuadrantComponent = (props) => (
  <div className="linequadrant-component">
    <div className="top-part">
      <Line direction="-" visible={props.lineVisibility.top}/>
    </div>
    <div className="center-part">
      <Line direction="|" visible={props.lineVisibility.left}/>
      <Line direction="|" visible={props.lineVisibility.right}/>
    </div>
    <div className="bottom-part">
      <Line direction="-" visible={props.lineVisibility.bottom}/>
    </div>
  </div>
);

LineQuadrantComponent.displayName = 'LineQuadrantComponent';

// Uncomment properties you need
// LineQuadrantComponent.propTypes = {};
// LineQuadrantComponent.defaultProps = {};

export default LineQuadrantComponent;
