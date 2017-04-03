/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import AlarmClockComponent from 'components//AlarmClockComponent.js';

describe('AlarmClockComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(AlarmClockComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('alarmclock-component');
  });
});
