import styled from '@emotion/styled';

export const Box = styled.div`
  margin-bottom: ${props => props.theme.spacing(4)};
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.spacing(80)};

  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h2`
  padding: ${props => props.theme.spacing(4)};
  text-align: center;

  font-size: ${props => props.theme.spacing(4)};
  text-transform: uppercase;
  color: ${props => `${props.theme.colors.title}`};

  background-color: ${props => `${props.theme.colors.white}`};
`;
