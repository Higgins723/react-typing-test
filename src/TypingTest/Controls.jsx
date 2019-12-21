import React from 'react';

const Controls = (props) => {
  const { setStart } = props;

  return (
    <div className="controls">
      <button className="btn" onClick={() => setStart(true)}>Start</button>
    </div>
  );
}

export default Controls;