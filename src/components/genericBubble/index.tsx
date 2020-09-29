import React from 'react';
import { BubbleCtn, BubbleLetter, BubbleText } from './index.style';

interface StatusBubbleProps {
  letter?: string;
  text?: string;
}

const GenericBubble: React.FC<StatusBubbleProps> = ({ letter, text }): React.ReactElement => {
  return (
    <BubbleCtn>
      <BubbleLetter>{letter}</BubbleLetter>
      <BubbleText>{text}</BubbleText>
    </BubbleCtn>
  );
};

export default GenericBubble;
