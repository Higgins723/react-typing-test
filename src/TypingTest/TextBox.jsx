import React, { useEffect, useState } from 'react';

const TextBox = (props) => {
  const [userText, setUserText] = useState('');
  const { isTimeOver, setTyped } = props;

  useEffect(() => {
    if (isTimeOver) {
      setTyped(userText);
    }
  })

  return (
    <div className="textBox">
      <textarea
        placeholder="Type here..."
        rows="10"
        cols="60"
        disabled={isTimeOver}
        onChange={(e) => setUserText(e.target.value)}
      />
    </div>
  )
}

export default TextBox;