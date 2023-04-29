import PropTypes from 'prop-types';
import { Box, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box>
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
