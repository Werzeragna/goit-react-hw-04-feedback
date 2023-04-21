import PropTypes from 'prop-types';
import {
  StyledStatCounter,
  StyledStatItem,
  StyledStatList,
  StyledStatTitle,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StyledStatList>
      <StyledStatItem>
        <StyledStatTitle>Good:</StyledStatTitle>
        <StyledStatCounter>{good}</StyledStatCounter>
      </StyledStatItem>
      <StyledStatItem>
        <StyledStatTitle>Neutral:</StyledStatTitle>
        <StyledStatCounter>{neutral}</StyledStatCounter>
      </StyledStatItem>
      <StyledStatItem>
        <StyledStatTitle>Bad:</StyledStatTitle>
        <StyledStatCounter>{bad}</StyledStatCounter>
      </StyledStatItem>
      <StyledStatItem>
        <StyledStatTitle>Total:</StyledStatTitle>
        <StyledStatCounter>{total}</StyledStatCounter>
      </StyledStatItem>
      <StyledStatItem>
        <StyledStatTitle>Positive Feedback:</StyledStatTitle>
        <StyledStatCounter>{positivePercentage} %</StyledStatCounter>
      </StyledStatItem>
    </StyledStatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
