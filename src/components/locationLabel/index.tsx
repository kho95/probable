import React from 'react';
import { LocCtn, SvgCtn } from './index.style';

import ICONS from '../../assets/icons';

interface SlaProps {
  location?: string;
}

const LocationLabel: React.FC<SlaProps> = ({ location }): React.ReactElement => {
  return (
    <LocCtn>
      <SvgCtn>
        <ICONS.mapPin />
      </SvgCtn>
      <span>{location}</span>
    </LocCtn>
  );
};

export default LocationLabel;
