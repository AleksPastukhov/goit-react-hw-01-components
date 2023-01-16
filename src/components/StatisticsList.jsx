import PropTypes from 'prop-types';

function StatisticsList({ items = [] }) {
  return (
    <ul className="stat-list">
      {items.map(({ id, label, percentage }) => (
        <li key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsList;
