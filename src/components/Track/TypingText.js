/* eslint-disable */
import React, { useEffect } from "react";
import virus from "./images/viruspng.png";
import $ from "jquery";

const TypingText = () => {
  // make a words array
  const words = [
    " > 40 Million Cases Worldwide",
    "Over a Million Global Deaths",
    "Almost 8 Million cases in India",
  ];

  // start typing effect
  useEffect(() => {
    setTyper(words);
    function setTyper(words) {
      const LETTER_TYPE_DELAY = 105;
      const WORD_STAY_DELAY = 2000;

      const DIRECTION_FORWARDS = 0;
      const DIRECTION_BACKWARDS = 1;

      var direction = DIRECTION_FORWARDS;
      var wordIndex = 0;
      var letterIndex = 0;

      var wordTypeInterval;

      document.querySelector(".typing-text") !== null ? startTyping() : null;

      function startTyping() {
        wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
      }

      function typeLetter() {
        const word = words[wordIndex];

        if (direction == DIRECTION_FORWARDS) {
          letterIndex++;

          if (letterIndex == word.length) {
            direction = DIRECTION_BACKWARDS;
            clearInterval(wordTypeInterval);
            setTimeout(startTyping, WORD_STAY_DELAY);
          }
        } else if (direction == DIRECTION_BACKWARDS) {
          letterIndex--;

          if (letterIndex == 0) {
            nextWord();
          }
        }

        const textToType = word.substring(0, letterIndex);

        document.querySelector(".typing-text") !== null
          ? (document.querySelector(".typing-text").textContent = textToType)
          : null;
      }

      function nextWord() {
        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;

        if (wordIndex == words.length) {
          wordIndex = 0;
        }
      }
    }
  }, []);

  return (
    <div class="container test">
      <div>
        <img className="virus" src={virus} alt="" />
      </div>
      <div className="pandemic">Pandemic hasn't been easy</div>
      <h1 class="typing-text">.</h1>
      <div className="pandemic">Stay Home, Stay Safe</div>
      <section>Hover the Map to get Statewise data {">>"}</section>
    </div>
  );
};

export default TypingText;
