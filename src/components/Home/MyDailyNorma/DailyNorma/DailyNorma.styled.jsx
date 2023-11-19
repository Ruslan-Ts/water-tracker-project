import styled from 'styled-components';
import theme from '../../../../CommonStyle/theme';

import tabImg from '../../../../img/home/img-tablet.png';
import deskImg from '../../../../img/home/img-desktop.png';

export const DailyNormaContainer = styled.div`
  border-radius: 10px;
  border: 1px solid ${theme.colors.secondaryLight};
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  width: 164px;
  padding: 8px 20px;
  /* @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
  } */
`;
export const Title = styled.h2`
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  line-height: calc(24 / 18);
  margin-bottom: 12px;
`;

export const Norma = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  color: ${theme.colors.primaryAccent};

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const NormaContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const NormaBtn = styled.button`
  font-size: ${theme.fontSizes.small};
  line-height: calc(20 / 16);
  background-color: transparent;
  color: ${theme.colors.secondaryBlue};
`;
export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const Container = styled.div`
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    background-image: url(${tabImg});
    height: 386px;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media only screen and (min-width: 1440px) {
    background-image: url(${deskImg});
    height: 548px;
    background-repeat: no-repeat;
  }
`;
