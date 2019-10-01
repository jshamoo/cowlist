var CowList = (props) => {
  console.log(props);
  return (
    <ul onClick={() => props.handleClick(props.cow)} >
      <li>
        {props.cow.name}
      </li>
    </ul>

  );
};

export default CowList;
