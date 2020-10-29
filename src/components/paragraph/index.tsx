import React from 'react';

import {
  StyledParagraph,
} from "./index.style";

interface ParagraphProps {
  children: any,
  align?: string,
  column?: boolean,
  small?: boolean,
}

const Paragraph: React.FC<ParagraphProps> = ({ children, column, align, small }): React.ReactElement => {
  return (
    <StyledParagraph align={align} column={column} small={small}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;