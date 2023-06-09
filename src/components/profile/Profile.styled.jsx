import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  text-align: center;

  margin-bottom: ${props => props.theme.spacing(4)};
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.spacing(80)};

  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
`;

export const PrUser = styled.div`
  padding: ${props => props.theme.spacing(5)};
  background-color: ${props => `${props.theme.colors.white}`};
`;

export const PrAvatar = styled.img`
  border-radius: 50%;
`;

export const PrName = styled.p`
  margin: 16px 0 4px 0;
  font-weight: 700;
`;

export const PrTag = styled.p`
  margin-bottom: ${props => props.theme.spacing(1)};
  color: ${props => `${props.theme.colors.secondaryText}`};
`;

export const PrLocation = styled.p`
  color: ${props => `${props.theme.colors.secondaryText}`};
`;

export const PrStats = styled.ul`
  display: flex;
  justify-content: center;

  background-color: ${props => `${props.theme.colors.bgProfile}`};
`;

export const PrStatsEl = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: ${props => props.theme.spacing(3)};
  width: 100%;

  :not(:last-child) {
    border-right: 1px solid ${props => `${props.theme.colors.border}`};
  }
`;

export const PrStatsLabel = styled.span`
  font-size: ${props => props.theme.spacing(3)};
  color: ${props => `${props.theme.colors.secondaryText}`};
`;

export const PrStatsQuantity = styled.span`
  font-size: ${props => props.theme.spacing(3)};
  font-weight: 700;
`;
