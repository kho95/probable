import React from 'react';

import {
  StyledParagraph,
} from "./index.style";

interface ParagraphProps {
  children: any;
  align?: string,
}

const Paragraph: React.FC<ParagraphProps> = ({ children, align }): React.ReactElement => {
  return (
    <StyledParagraph align={align}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;