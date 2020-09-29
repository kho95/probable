import React from 'react'; // importing FunctionComponent

import ICONS from '../../assets/icons';

import StyledList, {MainElementComponent as MainElements, ListElementComponent as ListElement} from '../styledList';

const BuildingList: React.FC<any> = ({item, change, filter}): React.ReactElement => {

  const items = Object.keys(item);

  return (
    <StyledList>
      {items.length !=0 &&
      items.map((element) => {
        return (
          <ListElement onClick={() => {
            change(element);
          }} value={element}>
            <MainElements data={filter} value={element}>
              <p value={item}>{item[element].Description}</p>
              <ICONS.check />
            </MainElements>
          </ListElement>
        );
      })}
    </StyledList>
  );
};

export default BuildingList;
