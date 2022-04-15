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
  const { followers, views, likes } = stats;
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
            <Quantity>{followers} </Quantity>
          </ListStats>
          <ListStats>
            <Label>Views </Label>
            <Quantity>{views} </Quantity>
          </ListStats>
          <ListStats>
            <Label>Likes </Label>
            <Quantity>{likes} </Quantity>
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
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
