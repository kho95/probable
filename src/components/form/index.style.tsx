import styled from 'styled-components';
import DefaultTheme from '../../assets/styles/config';

const LayoutContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled(LayoutContainer)``;

StyledForm.defaultProps = {
  theme: DefaultTheme,
};

export const temp = 'temp';
