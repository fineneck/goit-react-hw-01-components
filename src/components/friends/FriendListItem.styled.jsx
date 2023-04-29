import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';

export const FrItem = styled.li`
  display: flex;
  align-items: center;

  padding: ${props => props.theme.spacing(3)};

  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }

  background-color: ${props => `${props.theme.colors.white}`};
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
`;

export const Status = styled.span`
  width: ${props => props.theme.spacing(3)};
  height: ${props => props.theme.spacing(3)};
  margin-right: ${props => props.theme.spacing(4)};

  border-radius: 50%;
  background-color: ${props =>
    props.isOnline
      ? props.theme.colors.isOnline
      : props.theme.colors.isOffline};
`;

export const FrImg = styled.img`
  margin: 0;
  margin-right: ${props => props.theme.spacing(4)};
`;

export const FrName = styled.p`
  font-weight: 500;
`;

Status.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};
