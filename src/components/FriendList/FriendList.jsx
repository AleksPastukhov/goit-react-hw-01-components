import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList(friends) {
  return <ul className="friend-list">{<FriendListItem {...friends} />}</ul>;
}

export default FriendList;
