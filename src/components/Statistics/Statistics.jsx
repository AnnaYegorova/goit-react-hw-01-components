import PropTypes from 'prop-types';
import {
  CardStats,
  CardTitle,
  Container,
  StatList,
  Stat,
  Label,
  Percentage,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <CardStats>
      <Container>{title && <CardTitle>{title}</CardTitle>}</Container>
      <Container>
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <Stat key={id}>
              <Label>{label} </Label>
              <Percentage>{percentage}%</Percentage>
            </Stat>
          ))}
        </StatList>
      </Container>
    </CardStats>
  );
};

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
