import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import css from './app.module.css';

export default function App() {
  const voteOptions = ['good', 'neutral', 'bad'];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const makeFirstLetterToUpperCase = value => {
    return value.toUpperCase().slice(0, 1) + value.slice(1);
  };

  const addVote = keyName => {
    switch (keyName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalVotes = good + neutral + bad;

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={voteOptions}
          addVote={addVote}
          makeFirstLetterToUpperCase={makeFirstLetterToUpperCase}
        />
      </Section>
      <Section title="Statistics">
        {totalVotes > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalVotes}
            positivePercentage={Number(((good / totalVotes) * 100).toFixed(0))}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
