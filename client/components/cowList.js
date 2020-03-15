import React from 'react';

var CowList = (props) => {
  return (
    <ul onClick={() => props.handleClick(props.cow)} >
      <li>
        {props.cow.name}
      </li>
    </ul>

  );
};

export default CowList;
