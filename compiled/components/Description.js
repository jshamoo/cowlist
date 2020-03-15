import React from 'react';

var Description = props => {
  if (props.cow === null) {
    return React.createElement("div", null);
  } else {
    return React.createElement("div", {
      className: 'description'
    }, props.cow.description);
    ;
  }
};

export default Description;