import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Info,
  Photo,
  Username,
  Stats,
  Container,
  ListStats,
  Label,
  Quantity,
} from './Profile.styled';
export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <Card>
      <Description>
        <Photo src={avatar} alt={username} />
        <Username>{username}</Username>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Container>
        <Stats>
          <ListStats>
            <Label>Followers </Label>
            <Quantity>{stats.followers} </Quantity>
          </ListStats>
          <ListStats>
            <Label>Views </Label>
            <Quantity>{stats.views} </Quantity>
          </ListStats>
          <ListStats>
            <Label>Likes </Label>
            <Quantity>{stats.likes} </Quantity>
          </ListStats>
        </Stats>
      </Container>
    </Card>
  );
};

Profile.prototype = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};
