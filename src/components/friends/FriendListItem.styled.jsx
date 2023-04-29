import styled from '@emotion/styled';

export const FrItem = styled.li`
  display: flex;
  align-items: center;

  padding: ${props => props.theme.spacing(3)};
  margin-bottom: ${props => props.theme.spacing(3)};

  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
`;

export const StatusOn = styled.span`
  width: ${props => props.theme.spacing(3)};
  height: ${props => props.theme.spacing(3)};
  margin-right: ${props => props.theme.spacing(4)};

  background-color: ${props => `${props.theme.colors.isOnline}`};
  border-radius: 50%;
`;

export const FrImg = styled.img`
  margin: 0;
  margin-right: ${props => props.theme.spacing(4)};
`;

export const FrName = styled.p`
  font-weight: 500;
`;
