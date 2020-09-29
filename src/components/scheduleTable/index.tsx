import React, {useCallback, useEffect, useRef, useState} from "react";

import { getColumns, getAssetData } from './tableContent';

import InformationTable from "../dynamicTable";
import ExportButton from "../exportButton";

import ApiStatus from "../apiStatus";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

import {
  TableCtn,
  ScheduleCtn,
  ExportCtn,
} from './index.style'
import Asset from "../../app/interfaces/asset";

interface ScheduleTableProps {
  assetData: Asset[],
  status: 0 | 1 | 2 | 3,
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({assetData, status}) => {

  const tableCtnRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const columns = getColumns();
  const data = getAssetData(assetData);
  const exportData = getAssetData(assetData);

  return (
    <ApiStatus status={status} type='bar' disable=''>
      <ScheduleCtn>
        <ExportCtn>
          {data != undefined && data.length && <ExportButton data={exportData} columns={Object.keys(data[0])}/>}
        </ExportCtn>
        <TableCtn ref={tableCtnRef}>
          <InformationTable columns={columns} data={data}/>
        </TableCtn>
      </ScheduleCtn>
    </ApiStatus>
  )
};

export default ScheduleTable;