import React from 'react';

import ICONS from '../../../assets/icons';

import ConditionRatingBar from "../../../components/conditionRatingBar";
import LocationLabel from '../../../components/locationLabel';
import DetailsTable from "../../../components/detailsTable";
import ExportButton from '../../../components/exportButton';

import GetAssetAttributes from "../../../functions/GetAssetAttributes";

import { tableData } from "../../../hooks/useFilterHelper";

import {
  Background,
  InfoBox,
  InfoBoxCtn,
  BodyHead,
  BodyCtn,
  Divider,
  InfoBoxHeader,
  CloseButton,
  ConditionBody,
} from './index.style';

const AssetDetailModal: React.FC<any> = props => {
  const { active, data, handleModal } = props;

  const dataHeaders = tableData['assets'];

  return (
    <Background>
      <InfoBox active={active}>
        <CloseButton>
          <ICONS.x onClick={handleModal} />
        </CloseButton>
        <InfoBoxCtn>
          <InfoBoxHeader>
            <h2>{data.ItemDescription}</h2>
            <BodyHead>
              <LocationLabel location={data.ContractSiteDesc} />
              <ConditionBody>
                <ConditionRatingBar selectedRating={data.Condition} search={false}/>
              </ConditionBody>
            </BodyHead>
          </InfoBoxHeader>
          <Divider />
          <BodyCtn>
            <DetailsTable headings={dataHeaders} tableData={data}/>
          </BodyCtn>
        </InfoBoxCtn>
        <ExportButton data={data} columns={Object.values(dataHeaders)}/>
      </InfoBox>
    </Background>
  );
};

export default AssetDetailModal;
