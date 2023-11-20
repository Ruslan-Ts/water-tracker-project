import styled from 'styled-components';
import theme from '../../../../CommonStyle/theme';

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

export const Container = styled.div`
  margin-bottom: 16px;
`;

export const StatusContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const WaterStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 70%;
  p {
    color: ${theme.colors.primaryAccent};
    font-weight: 400;
    font-size: ${theme.fontSizes.medium};
    line-height: calc(24 / ${theme.fontSizes.medium});
  }
`;

export const WaterMeter = styled.div`
  position: relative;
  width: calc(100% - 30px);
  height: 8px;
  background-color: ${theme.colors.secondaryLightBlue};
  border-radius: 10px;
  margin: 0 auto;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${props => {
      if (props.$filled > 100) {
        return '100%';
      }
      return props.$filled + '%';
    }};
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-color: ${theme.colors.primaryLight};
    border: 1px solid ${theme.colors.primaryAccent};
    border-radius: 100%;
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => {
      if (props.$filled > 100) {
        return '100%';
      }
      return props.$filled + '%';
    }};
    height: 100%;
    background-color: ${theme.colors.secondaryBlue};
  }
`;

export const WaterInfo = styled.div`
  display: flex;
  position: relative;
  span {
    position: absolute;
    color: ${theme.colors.primaryAccent};
    font-size: ${theme.fontSizes.tiny};
    line-height: calc(16 / ${theme.fontSizes.tiny});
    &:first-child {
      left: 0;
    }
    &:nth-child(2) {
      left: 50%;
      transform: translateX(-50%);
      font-size: ${theme.fontSizes.small};
      line-height: calc(20 / ${theme.fontSizes.small});
      font-weight: 500;
    }
    &:last-child {
      right: 0;
    }
  }
`;
