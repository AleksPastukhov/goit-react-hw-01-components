import PropTypes from 'prop-types';
import { FriendStatus, Avatar, FriendName } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <>
        <FriendStatus isOnline>{isOnline}</FriendStatus>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
