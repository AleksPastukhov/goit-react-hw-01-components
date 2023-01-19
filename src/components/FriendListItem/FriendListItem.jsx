import PropTypes from 'prop-types';
import {
  Friend,
  FriendStatus,
  Avatar,
  FriendName,
} from './FriendListItem.styled';

function FriendListItem({ friends = [] }) {
  return (
    <>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id}>
          <FriendStatus isOnline>{isOnline}</FriendStatus>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <FriendName>{name}</FriendName>
        </Friend>
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
