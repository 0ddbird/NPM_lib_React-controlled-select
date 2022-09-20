import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Select = ({
  options,
  selected,
  setSelected
}) => {
  function handleOptionSelection(event) {
    const newSelection = options.find(object => object.value.toString() === event.target.value);
    setSelected(newSelection);
  }

  return /*#__PURE__*/React.createElement("select", {
    className: "controlled-select",
    value: `${selected.value}`,
    onChange: event => handleOptionSelection(event)
  }, options.map(option => {
    return /*#__PURE__*/React.createElement("option", {
      key: uuidv4(),
      value: `${option.value}`
    }, option.name);
  }));
};

Select.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.object,
  setSelected: PropTypes.func
};
export default Select;