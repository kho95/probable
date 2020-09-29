import React, { useEffect, useState } from 'react';
import { BubbleCtn, BubbleText, SvgCtn } from './index.style';

import ICONS from '../../assets/icons';

interface StatusBubbleProps {
  status?: string;
}

const StatusBubble: React.FC<StatusBubbleProps> = ({ status }): React.ReactElement => {
  const [svgIcon, setSvgIcon] = useState(<ICONS.loader />);
  const [bubbleText, setBubbleText] = useState('In Progress');

  useEffect(() => {
    if (status === 'new') {
      setBubbleText('New');
      setSvgIcon(<ICONS.star />);
    } else if (status === 'onHold') {
      setBubbleText('On Hold');
      setSvgIcon(<ICONS.pauseCircle />);
    } else if (status === 'workCompleted') {
      setBubbleText('Work Completed');
      setSvgIcon(<ICONS.check />);
    } else if (status === 'finished') {
      setBubbleText('Finished');
      setSvgIcon(<ICONS.checkCircle />);
    } else if (status === 'cancelled') {
      setBubbleText('Cancelled');
      setSvgIcon(<ICONS.xCircle />);
    } else if (status === 'inProgress') {
      setBubbleText('In Progress');
      setSvgIcon(<ICONS.zap />);
    } else if (status === 'allocated') {
      setBubbleText('Allocated');
      setSvgIcon(<ICONS.user />);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <BubbleCtn>
      <SvgCtn>{svgIcon}</SvgCtn>
      <BubbleText>{bubbleText}</BubbleText>
    </BubbleCtn>
  );
};

export default StatusBubble;
