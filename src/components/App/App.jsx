import { Component } from "react";
import { FeedbackOptions } from '../Feedback/Feedback.jsx';
import { Notification } from '../Notification/Notification.jsx';
import { Section } from "components/Section/Section.jsx";
import { Statistics } from '../Statistics/Statistics.jsx';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  addFeedback = property => {
    this.setState(prevState => ({
      [property]: prevState[property] + 1,
    })
    );
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round(100 / total * good) : 0;
  };
    
  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    )
  }
}