import React from 'react';

const RandomButton = (props) => {

  return (
    <div>
      <button type="button" onClick={props.onClick}>Random Movie</button>
    </div>
  );
}

export default RandomButton;
