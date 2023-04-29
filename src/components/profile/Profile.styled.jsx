import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  text-align: center;
  // border-radius: ${props => props.theme.spacing(2)};
`;

export const PrUser = styled.div`
  padding: ${props => props.theme.spacing(5)};
  border-top-left-radius: ${props => props.theme.spacing(1)};
  border-top-right-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => `${props.theme.colors.white}`};
`;

export const PrAvatar = styled.img`
  border-radius: 50%;
`;

export const PrName = styled.p`
  padding: 16px 0 4px 0;
  font-weight: 700;
`;

export const PrTag = styled.p`
  padding-bottom: ${props => props.theme.spacing(1)};
  color: ${props => `${props.theme.colors.secondaryText}`};
`;

export const PrLocation = styled.p`
  color: ${props => `${props.theme.colors.secondaryText}`};
`;

export const PrStats = styled.ul`
  display: flex;
  justify-content: center;

  border-bottom-left-radius: ${props => props.theme.spacing(1)};
  border-bottom-right-radius: ${props => props.theme.spacing(1)};
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
