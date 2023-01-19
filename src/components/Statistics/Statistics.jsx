import PropTypes from 'prop-types';
import {
  UserStatistics,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

function Statistics({ title, stats = [] }) {
  return (
    <UserStatistics>
      <Title>{title}</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </UserStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
