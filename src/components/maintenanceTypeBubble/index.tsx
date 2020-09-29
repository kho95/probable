import React, { useEffect, useState } from 'react';
import { BubbleCtn, BubbleText, IconCtn } from './index.style';

import ICONS from '../../assets/icons';

interface StatusBubbleProps {
  type?: string;
}

const MaintenanceTypeBubble: React.FC<StatusBubbleProps> = ({ type }): React.ReactElement => {
  const [maintenanceIcon, setMaintenanceIcon] = useState('M');
  const [bubbleText, setBubbleText] = useState('Monthly');

  useEffect(() => {
    switch (type) {
      case 'Y1':
        setMaintenanceIcon('A');
        setBubbleText('Annual');
        break;
      case 'Y2':
        setMaintenanceIcon(type);
        setBubbleText(type);
        break;
      case 'Y3':
        setMaintenanceIcon(type);
        setBubbleText('3 Yearly');
        break;
      case 'Y4':
        setMaintenanceIcon(type);
        setBubbleText('4 Yearly');
        break;
      case 'Y5':
        setMaintenanceIcon(type);
        setBubbleText('5 Yearly');
        break;
      case 'Y6':
        setMaintenanceIcon(type);
        setBubbleText('6 Yearly');
        break;
      case 'M1':
        setMaintenanceIcon('M');
        setBubbleText('Monthly');
        break;
      case 'M2':
        setMaintenanceIcon(type);
        setBubbleText('Bi-Monthly');
        break;
      case 'M4':
        setMaintenanceIcon(type);
        setBubbleText('Four Monthly');
        break;
      case 'M3':
        setMaintenanceIcon('Q');
        setBubbleText('Quarterly');
        break;
      case 'M6':
        setMaintenanceIcon('HY');
        setBubbleText('Half Yearly');
        break;
      case 'D1':
        setMaintenanceIcon('D');
        setBubbleText('Daily');
        break;
      case 'D7':
        setMaintenanceIcon('W');
        setBubbleText('Weekly');
        break;
      case 'F1':
        setMaintenanceIcon('F');
        setBubbleText('Fortnightly');
        break;
    }
  }, [type]);

  return (
    <BubbleCtn>
      <IconCtn>{maintenanceIcon}</IconCtn>
      <BubbleText>{bubbleText}</BubbleText>
    </BubbleCtn>
  );
};

export default MaintenanceTypeBubble;
