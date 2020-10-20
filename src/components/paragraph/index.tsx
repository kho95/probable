import React from 'react';

import {
  StyledParagraph,
} from "./index.style";

interface ParagraphProps {
  children: any,
  align?: string,
  column?: boolean,
}

const Paragraph: React.FC<ParagraphProps> = ({ children, column, align }): React.ReactElement => {
  return (
    <StyledParagraph align={align} column={column}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;