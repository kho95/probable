import styled from 'styled-components';

import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

export const TabCtn = styled.button`
  display: flex;
  padding: 20px 0;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.5s ease-in-out;

  :hover, :active  {
    >span{
      color: #FFFFFF;
    }
  }
  

  :focus {
    outline: 0px;
  }

  ${Media.Below.tablet`
    justify-content: center;
    width: 100%;
    padding: 2vh 0;

    :hover, :active  {
      >span{
        color: #B4ACA6;
      }
    }
  `}

  ${Media.Below.mobileLarge`
    padding: 0;
    margin: 0;
    flex 1 1 auto;
    align-items: center;
    height: 40px;
  `}
`;

export const TabText = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #B4ACA6;
  transition: color 0.3s ease-in-out;

  ${Media.Below.tablet`
    font-size: 16px;
    line-height: 16px;
    color: #14150F;
  `};
`;
