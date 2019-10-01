var Description = props => {
  let descriptionBox = React.createElement("div", {
    className: 'description'
  }, props.cow.description);

  if (props.cow === '') {
    return React.createElement("div", null);
  } else {
    return descriptionBox;
  }
};

export default Description;