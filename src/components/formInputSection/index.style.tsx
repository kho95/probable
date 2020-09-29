import styled from "styled-components";
import Media from "../../assets/styles/media";
import THEME from "../../assets/styles/config";

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 34px;
  margin-bottom: 50px;
  background-color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 130, 189, 0.2);
  position: relative; 
  
  ${Media.Below.tablet`
    width: 100%;
  `}
`;

export const FormNumber = styled.span`
  -webkit-text-stroke: 1px #0082bd;
  color: white;
  font-size: 101px;
  opacity: 0.3;
  font-family: Arial;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  width: 56px;
  height: 112px;
  text-align: center;
  position: absolute;
  right: 32px;
  top: 0;
`;

export const FormSectionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${THEME.colors.primaryColor};
  padding-bottom: 50px;
`;
