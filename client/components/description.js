var Description = (props) => {
  let descriptionBox = (
    <div className={'description'}>
      {props.cow.description}
    </div>
  );

  if (props.cow === '') {
    return (
      <div>
      </div>
    );
  } else {
    return descriptionBox;
  }

};

export default Description;
