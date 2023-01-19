import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';

function FriendList(friends) {
  return <Friends>{<FriendListItem {...friends} />}</Friends>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        })
      ),
    })
  ),
};

export default FriendList;
