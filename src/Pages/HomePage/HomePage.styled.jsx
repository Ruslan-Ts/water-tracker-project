import styled from 'styled-components';

export const WrapperHomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (max-width: 1439px) {
    padding-bottom: 40px;
  }

  @media only screen and (min-width: 768px) {
    gap: 40px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;
