import styled from 'styled-components';

export const Tracker = styled.div`
  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }
`;
