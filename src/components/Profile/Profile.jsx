import PropTypes from 'prop-types';
import {
  UserProfile,
  UserAvatar,
  UserName,
  UserTag,
  Location,
  UserStats,
  Label,
  Quantity,
} from './Profile.styled';

function Profile({ username, tag, location, avatar, followers, views, likes }) {
  return (
    <UserProfile>
      <div>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <Location>{location}</Location>
      </div>

      <UserStats>
        <li>
          <Label>Followers </Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views </Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes </Label>
          <Quantity>{likes}</Quantity>
        </li>
      </UserStats>
    </UserProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
