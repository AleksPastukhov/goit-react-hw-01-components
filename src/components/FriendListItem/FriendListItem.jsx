import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

function FriendListItem({ friends = [] }) {
  return (
    <>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
          <span
            className={css.status}
            style={{ backgroundColor: isOnline ? 'red' : 'green' }}
          >
            {isOnline}
          </span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendListItem;
