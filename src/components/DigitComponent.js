'use strict';

import React from 'react';
import LineQuadrant from './LineQuadrantComponent'

require('styles//Digit.css');

class DigitComponent extends React.Component {

  render() {
    const quadLines = this.getQuadrantLines(this.props.value)
    return (
      <div className="digit-component">
        <div className="quad">
          <LineQuadrant lineVisibility={quadLines.topQuad}/>
        </div>
        <div className="quad">
        <LineQuadrant lineVisibility={quadLines.bottomQuad}/>
        </div>
      </div>
    );
  }
  getQuadrantLines(value){
    const quadLines = [
      {
        topQuad:{top:true,left:true,right:true,bottom:false},
        bottomQuad:{top:false,left:true,right:true,bottom:true}
      },
      {
        topQuad:{top:false,left:false,right:true,bottom:false},
        bottomQuad:{top:false,left:false,right:true,bottom:false}
      },
      {
        //2
        topQuad:{top:true,left:false,right:true,bottom:true},
        bottomQuad:{top:true,left:true,right:false,bottom:true}
      },
      {
        //3
        topQuad:{top:true,left:false,right:true,bottom:true},
        bottomQuad:{top:true,left:false,right:true,bottom:true}

      },
      {
        //4

        topQuad:{top:false,left:true,right:true,bottom:true},
        bottomQuad:{top:true,left:false,right:true,bottom:false}

      },
      {
        //5
        topQuad:{top:true,left:true,right:false,bottom:true},
        bottomQuad:{top:true,left:false,right:true,bottom:true}

      },
      {
        //6
        topQuad:{top:true,left:true,right:false,bottom:true},
        bottomQuad:{top:true,left:true,right:true,bottom:true}

      },
      {
        //7
        topQuad:{top:true,left:false,right:true,bottom:false},
        bottomQuad:{top:false,left:false,right:true,bottom:false}

      },
      {
        topQuad:{top:true,left:true,right:true,bottom:true},
        bottomQuad:{top:true,left:true,right:true,bottom:true}
      },
      {
        //9
        topQuad:{top:true,left:true,right:true,bottom:true},
        bottomQuad:{top:true,left:false,right:true,bottom:true}

      }

    ]
    return quadLines[value];
  }
}

DigitComponent.displayName = 'DigitComponent';

// Uncomment properties you need
// DigitComponent.propTypes = {};
// DigitComponent.defaultProps = {};

export default DigitComponent;
