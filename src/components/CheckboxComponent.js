'use strict';

import React, { Component, PropTypes } from 'react';

require('styles//Checkbox.css');

class CheckboxComponent extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox-component">
        <input
                          type="checkbox"
                          value={label}
                          checked={isChecked}
                          onChange={this.toggleCheckboxChange}
                      />

        <label>

          {label}
        </label>
      </div>
    );
  }
}

CheckboxComponent.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

CheckboxComponent.displayName = 'CheckboxComponent';

// Uncomment properties you need
// CheckboxComponent.propTypes = {};
// CheckboxComponent.defaultProps = {};

export default CheckboxComponent;
