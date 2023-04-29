import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: ${props => props.theme.spacing(2)};
  width: 100%;

  :not(:last-child) {
    border-right: 1px;
  };
`;

export const StatLabel = styled.span`
  font-size: ${props => props.theme.spacing(3)};
  color: ${props => `${props.theme.colors.white}`}
`;

export const StatPercentage = styled.span`
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => `${props.theme.colors.white}`}
`;
