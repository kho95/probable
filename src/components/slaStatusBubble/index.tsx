import React, { useState, useEffect } from 'react';
import { StatusBackground, StatusCtn, StatusText, SvgCtn } from './index.style';

import ICONS from '../../assets/icons';
import COLORS from '../../assets/styles/config/colors';

interface SlaProps {
  slaStatus: 'upcomingToday' | 'missedDeadline' | 'doneOnTime' | 'urgentlyUpcoming' | 'upcoming';
}

const SlaStatusBubble: React.FC<SlaProps> = ({ slaStatus }): React.ReactElement => {
  const [svgIcon, setSvgIcon] = useState(<div />);
  const [slaStatusText, setSlaStatusText] = useState('');

  const slaStatusColor = COLORS.slaPrimary[slaStatus];
  const slaBgStatusColor = COLORS.slaBackground[slaStatus];


  useEffect(() => {
    if (slaStatus === 'upcomingToday') {
      setSlaStatusText('Upcoming Today');
      setSvgIcon(<ICONS.disc />);
    } else if (slaStatus === 'urgentlyUpcoming') {
      setSlaStatusText('Urgently Upcoming');
      setSvgIcon(<ICONS.zap />);
    } else if (slaStatus === 'doneOnTime') {
      setSlaStatusText('Done On Time');
      setSvgIcon(<ICONS.zap />);
    } else if (slaStatus === 'missedDeadline') {
      setSlaStatusText('Missed Deadline');
      setSvgIcon(<ICONS.zap />);
    } else {
      setSlaStatusText('Upcoming');
      setSvgIcon(<ICONS.arrowUpRight />);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slaStatus]);

  return (
    <StatusCtn>
      <StatusBackground slaColor={slaStatusColor} slaBgColor={slaBgStatusColor}>
        <SvgCtn slaColor={slaStatusColor}>{svgIcon}</SvgCtn>
        <StatusText>{slaStatusText}</StatusText>
      </StatusBackground>
    </StatusCtn>
  );
};

export default SlaStatusBubble;
