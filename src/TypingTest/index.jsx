import React, { useState, useEffect } from 'react';
import options from './options';
import Timer from './Timer';
import Controls from './Controls';
import TextBox from './TextBox';

const TypingTest = () => {
  const [isTimeOver, setOver] = useState(false);
  const [start, setStart] = useState(false);
  const seconds = 60;
  const [text, setText] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [userText, setUserText] = useState('');
  const [total, setTotal] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [wrong, setWrong] = useState(0);

  const calculateWPM = () => {
    const wpm = (characters/5) / (seconds/60);
    return wpm.toFixed(2);
  }

  useEffect(() => {
    // pick a random number from 1 to length of the text options
    const id = Math.floor(Math.random() * options.length + 1);
    // grab the text from the json array
    const text = options.find(i => i.id === id).text;
    setText(text);
    setAnswers(text.split(" "));
  }, [])

  useEffect(() => {
    let total = 0;
    let wrong = 0;
    let characters = 0;

    if (isTimeOver) {
      const userTextArray = userText.split(" ");
      for (let i=0; i<userTextArray.length; i += 1) {
        if (userTextArray[i] === answers[i]) {
          total = total + 1;
          characters = characters + userTextArray[i].length;
        } else {
          wrong =  wrong + 1;
        }
      }
      setTotal(total);
      setCharacters(characters);
      setWrong(wrong);
    }
  }, [isTimeOver, answers, userText])

  return (
    <div>
      {!start ? (
        <Controls
          setStart={setStart}
        />
      ) : (
        <div>
          <Timer
            seconds={seconds}
            setOver={setOver}
            isTimeOver={isTimeOver}
          />

          <div className="typeText">
            {text}
          </div>

          {isTimeOver &&
            <div className="gameover">
              <div>Time Over</div>
              <div className="bb" />
              <div>{wrong} word(s) typed wrong</div>
              <div>{total} word(s) typed right</div>
              <div>Gross WPM {calculateWPM()} in {seconds} seconds!</div>
            </div>
          }

          <TextBox
            isTimeOver={isTimeOver}
            setTyped={setUserText}
          />
        </div>
      )}

    </div>
  );
}

export default TypingTest;