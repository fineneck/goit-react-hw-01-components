import styled from '@emotion/styled';

export const ThTable = styled.table`
  margin-bottom: ${props => props.theme.spacing(4)};
  width: 100%;

  background-color: ${props => `${props.theme.colors.thTable}`};
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
`;

export const ThHead = styled.thead`
  background-color: ${props => `${props.theme.colors.thHead}`};
`;

export const ThList = styled.tr`
  color: ${props => `${props.theme.colors.secondaryText}`};

  :nth-of-type(2n) {
    background-color: white;
  }
`;

export const ThHeadItem = styled.th`
  padding: ${props => props.theme.spacing(2)};
  text-align: center;
  font-weight: 500;

  color: ${props => `${props.theme.colors.white}`};
`;

export const ThBodyItem = styled.td`
  padding: ${props => props.theme.spacing(2)};
  text-align: center;
  font-weight: 300;
`;
