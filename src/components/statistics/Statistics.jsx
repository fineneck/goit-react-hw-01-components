import PropTypes from 'prop-types';
import {
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';
import { Section } from 'components/section/Section';
import { getRandomColor } from "utils";

export const Statistics = ({ stats }) => {
  return (
    <Section>
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id} style={getRandomColor()}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
