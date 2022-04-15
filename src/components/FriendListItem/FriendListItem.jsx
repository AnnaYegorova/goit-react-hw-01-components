import PropTypes from 'prop-types';
import {
  Item,
  Status,
  Avatar,
  Name,
} from '../FriendListItem/FriendListItem.styled';
export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.prototype = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
