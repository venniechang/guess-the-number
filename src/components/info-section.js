import React from 'react';

import './info-section.css';

export default function InfoSection(props) {
  return (
    <section id="what" tabIndex="-1">
      <h2>How to play</h2>
      <p>This is a Number Guessing Game. The game goes like this:</p>
      <ol>
        <li>I picked a secret number that you'll need to guess correctly.</li>
        <li>Keep guessing and the game will let you know if you're getting colder or warmer.</li>
        <li>Good luck!</li>
      </ol>
    </section>
  );
}