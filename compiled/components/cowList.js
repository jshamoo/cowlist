var CowList = props => {
  console.log(props);
  return React.createElement("ul", {
    onClick: () => props.handleClick(props.cow)
  }, React.createElement("li", null, props.cow.name));
};

export default CowList;