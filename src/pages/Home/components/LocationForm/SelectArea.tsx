import React from 'react';
import { Select } from 'antd';

import { useStore } from '@State';
import { selectStyles } from './style';
import { IArea, TAllAreas } from '@Entities/Area';
import OptionsFallback from './OptionsFallback';
import OptionsEmpy from './OptionsEmpy';
import useFilter from '../../useFilter';
import { TLocationFormDispatch } from './types';

const { Option } = Select;

type TProps = {
  dispatch: TLocationFormDispatch;
  selectedArea: IArea | null;
  isLoadingAreas: boolean;
  [key: string]: any;
};

export default function SelectArea({
  selectedArea,
  isLoadingAreas,
  dispatch,
  ...props
}: TProps) {
  const appState = useStore();

  let { filteredData, filterFn, resetFilterFn } = useFilter<TAllAreas>(
    appState.location.areas,
    (area: IArea) => area.attributes.name
  );

  function onAreaChange(areaId: string) {
    let selectedArea = appState.location.areas[areaId];

    dispatch({ type: 'select-area', area: selectedArea });
  }

  const Options = Object.values(filteredData).map((area: IArea) => (
    <Option key={area.id} value={area.id}>
      {area.attributes.name}
    </Option>
  ));

  return (
    <Select
      showSearch
      filterOption={false}
      size="large"
      css={selectStyles}
      placeholder="Select City"
      onChange={onAreaChange}
      onSearch={filterFn}
      onSelect={resetFilterFn}
      value={selectedArea?.id}
      notFoundContent={isLoadingAreas ? OptionsFallback : OptionsEmpy}
      {...props}
    >
      {Options}
    </Select>
  );
}
