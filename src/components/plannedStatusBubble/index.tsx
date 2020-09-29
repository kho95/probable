import React, { useEffect, useState } from 'react';
import { BubbleCtn, BubbleText, SvgCtn } from './index.style';

import ICONS from '../../assets/icons';
import COLOR from '../../assets/styles/config/colors';

interface StatusBubbleProps {
  status?: string;
}

const PlannedStatusBubble: React.FC<StatusBubbleProps> = ({ status }): React.ReactElement => {
  
  const getNewStatus = () => {
    let newStatus = {
      icon: <ICONS.loader/>,
      text: 'Open',
      primaryColor: COLOR.slaPrimary.upcoming,
      backgroundColor: COLOR.slaBackground.upcoming,
    };

    if(status == 'Completed') {
      newStatus.icon = <ICONS.checkCircle/>;
      newStatus.text = 'Complete';
      newStatus.primaryColor = COLOR.slaPrimary.doneOnTime;
      newStatus.backgroundColor = COLOR.slaBackground.doneOnTime;
    } else if(status == 'Incomplete') {
      newStatus.icon = <ICONS.x/>;
      newStatus.text = 'Incomplete';
      newStatus.primaryColor = COLOR.slaPrimary.missedDeadline;
      newStatus.backgroundColor = COLOR.slaBackground.missedDeadline;
    }
    return newStatus;
  };

  const [svgIcon, setSvgIcon] = useState(() => getNewStatus().icon);
  const [bubbleText, setBubbleText] = useState(()=> getNewStatus().text);
  const [primaryColor, setPrimaryColor] = useState(()=> getNewStatus().primaryColor);
  const [backgroundColor, setBackgroundColor] = useState(()=> getNewStatus().backgroundColor);

  useEffect(() => {
    let newStatus = getNewStatus();
    setSvgIcon(newStatus.icon);
    setBubbleText(newStatus.text);
    setPrimaryColor(newStatus.primaryColor);
    setBackgroundColor(newStatus.backgroundColor);
  },[status]);

  return (
    <BubbleCtn slaColor={backgroundColor}>
      <SvgCtn slaColor={primaryColor}>{svgIcon}</SvgCtn>
      <BubbleText slaColor={primaryColor}>{bubbleText}</BubbleText>
    </BubbleCtn>
  );
};

export default PlannedStatusBubble;
