import PropTypes from 'prop-types';
import { Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
      {options.map(option => (
        <Button  key={option} type="button"  onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </>
  );

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};