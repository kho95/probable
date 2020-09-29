import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { DateCtn, SvgCtn } from './index.style';

import ICONS from '../../assets/icons';
import COLORS from '../../assets/styles/config/colors';

interface SlaProps {
  slaStatus: 'upcomingToday' | 'missedDeadline' | 'doneOnTime' | 'urgentlyUpcoming' | 'upcoming';
  date: string;
}

const dateFormats = {
  sameDay: '[Today], h:mma',
  nextDay: '[Tomorrow], h:mma',
  nextWeek: 'ddd, Do MMM, h:mma',
  lastDay: '[Yesterday], h:mma',
  lastWeek: 'ddd, Do MMM, h:mma',
  sameElse: 'ddd, Do MMM, h:mma',
};

const DateLabel: React.FC<SlaProps> = ({ slaStatus, date, page }): React.ReactElement => {
  const getDate = () => {
    if(page === 'planned') {
      return moment(date).format('MMMM')
    } else {
      return moment(date).calendar('',dateFormats)
    }
  };

  const [formattedDataTime, setDateTime] = useState(() => getDate());
  const [slaBold, setSlaBold] = useState(slaStatus === 'upcoming'? false: true);

  const slaColor = COLORS.slaPrimary[slaStatus];

  useEffect(() => {
    setDateTime(getDate());
  },[date]);

  return (
    <DateCtn slaColor={slaColor} slaBold={slaBold}>
      <SvgCtn>
        <ICONS.clock />
      </SvgCtn>
      <span>{formattedDataTime}</span>
    </DateCtn>
  );
};

export default DateLabel;
