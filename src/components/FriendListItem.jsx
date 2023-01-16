import PropTypes from 'prop-types';

function FriendListItem({ friends = [] }) {
  return (
    <div>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className="item" key={id}>
          <span className="status">{isOnline ? 'Online' : 'Ofline'}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </div>
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
