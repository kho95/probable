import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';

interface SectionProps {
  desktop?: string;
  tablet?: string;
  mobileLarge?: string;
  mobile?: string;
  column?: boolean;
  align?: string;
  justify?: string;
}

export const StyleLayout = styled.div<SectionProps>`
  display: flex;
  flex-wrap: wrap;

  ${(props): SimpleInterpolation =>
    css && props.align &&
    `
    align-items: ${props.align};
  `}

    ${(props): SimpleInterpolation =>
    css && props.justify &&
    `
    justify-content: ${props.justify};
  `}

  ${(props): SimpleInterpolation =>
    css && props.desktop &&
    `
    flex: 1 0 ${props.desktop};
  `}

  ${(props): SimpleInterpolation =>
    css && props.column &&
    `
    flex-direction: column;
  `}

  ${Media.Below.tablet`
    ${(props: { tablet: any; }): SimpleInterpolation =>
      css && props.tablet &&
      `
      flex: 1 0 ${props.tablet};
    `}
  `}

  ${Media.Below.mobileLarge`
    flex: 1 0 100%;

    ${(props: { mobileLarge: any; }): SimpleInterpolation =>
      css && props.mobileLarge &&
      `
      flex: 1 0 ${props.mobileLarge};
    `}
  `}

  ${Media.Below.mobile`
    flex: 1 0 100%;

    ${(props: { mobile: any; }): SimpleInterpolation =>
      css && props.mobile &&
      `
      flex: 1 0 ${props.mobile};
    `}
  `}
`;