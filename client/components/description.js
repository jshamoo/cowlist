var Description = (props) => {

  if (props.cow === null) {
    return (
      <div>
      </div>
    );
  } else {
    return (
      <div className={'description'}>
        {props.cow.description}
      </div>
    );;
  }

};

export default Description;
