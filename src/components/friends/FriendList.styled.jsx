import styled from '@emotion/styled';

export const FrList = styled.ul`
  padding: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(4)};

  background-color: ${props => `${props.theme.colors.white}`};
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
`;
