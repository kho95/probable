import React, {useContext, useEffect, useState} from 'react';

import ICONS from '../../../assets/icons';

import computeComponent from './computeComponents';
import ExportButton from '../../../components/exportButton';
import AppStateContext from "../../context/appStateContext";

import { tableData } from "../../../hooks/useFilterHelper";

import {
  Background,
  InfoBox,
  InfoBoxCtn,
  BodyCtn,
  Divider,
  DetailsTableCtn,
  BubbleSection,
  QuickInfo,
  CloseButton,
} from './index.style';
import SalesOrderGetSalesOrder from "../../../functions/SalesOrderGetSalesOrders";
import DetailsTable from "../../../components/detailsTable";

const JobDetailModal: React.FC<any> = props => {
  const { active, data, handleModal, type, onClick } = props;
  const { token,contractCriticalCode } = useContext(AppStateContext);

  const [ currentTableData, setCurrentTableData ] = useState(data);

  const tableHeadings = tableData[type];
  const { getHeading, getBubbleSection } = computeComponent(data, type,tableHeadings);

  const getInvoiceData = async () => {

    if (data.SOOrderNo == '') return;

    let filter = `<SOOrderNo>${data.SOOrderNo}</SOOrderNo>`;
    return await SalesOrderGetSalesOrder(filter,token,data.ContractNo);
  };

  useEffect(() => {
    getInvoiceData().then(invoiceData => {
      setCurrentTableData(_.merge(data,invoiceData))
    })
  },[]);

  return (
    <Background onClick={onClick}>
        <InfoBox active={active}>
          <CloseButton>
            <ICONS.x onClick={handleModal} />
          </CloseButton>
          <InfoBoxCtn>
            {getHeading()}
            <Divider/>
            <BodyCtn>
              <DetailsTableCtn>
                <DetailsTable headings={tableHeadings} tableData={currentTableData}/>
              </DetailsTableCtn>
              <Divider vertical={true}/>
              <QuickInfo>
                <BubbleSection>
                  {getBubbleSection(contractCriticalCode)}
                </BubbleSection>
              </QuickInfo>
            </BodyCtn>
          </InfoBoxCtn>
          <ExportButton data={currentTableData} columns={Object.values(tableHeadings)}/>
        </InfoBox>
    </Background>)

}

export default JobDetailModal;
