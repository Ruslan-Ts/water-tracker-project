import styled from 'styled-components';
import theme from '../../../CommonStyle/themeJSX';

export const ContainerMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CommandPhoto = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 240px;
  object-fit: cover;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 290px;
    height: 330px;
  }
`;

export const CommandHeader = styled.header`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
`;

export const CommandText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const CommandLink = styled.a`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const SocialIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.primaryAccent};
  transition: transform 0.3s ease, width 0.3s ease;
  &:hover {
    fill: ${theme.colors.secondaryYellow};
    transform: scale(1.15);
  }
`;
