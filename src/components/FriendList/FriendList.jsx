import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList(friends) {
  return <ul className={css.friendList}>{<FriendListItem {...friends} />}</ul>;
}

export default FriendList;
