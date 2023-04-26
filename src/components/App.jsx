import React, { useState } from 'react';

import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedback = e => {
    switch (e) {
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
  const positivePercentage = Math.round((good / totalVotes) * 100);

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={updateFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!totalVotes ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalVotes}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};
