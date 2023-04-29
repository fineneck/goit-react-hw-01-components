import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  min-width: ${props => props.theme.spacing(80)};
  max-width: ${props => props.theme.spacing(160)};
  padding: ${props => props.theme.spacing(3)};
`;
