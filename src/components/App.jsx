import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import css from './app.module.css';

class App extends Component {
  static voteOptions = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  makeFirstLetterToUpperCase = value => {
    return value.toUpperCase().slice(0, 1) + value.slice(1);
  };

  addVote = keyName => {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const { good } = this.state;
    return Number(((good / total) * 100).toFixed(0));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalVotes = this.countTotalFeedback();
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={App.voteOptions}
            addVote={this.addVote}
            makeFirstLetterToUpperCase={this.makeFirstLetterToUpperCase}
          />
        </Section>
        <Section title="Statistics">
          {totalVotes > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalVotes}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
