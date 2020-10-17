import React from 'react';

import { useStore } from '@State';
import { ICity, TAllCities } from '@Entities/City';
import { selectStyles } from './style';
import OptionsEmpy from '@Components/OptionsEmpy';
import OptionsFallback from '@Components/OptionsFallback';
import { Select } from 'antd';
import useFilter from '../../useFilter';
import { TLocationFormDispatch } from './types';

const { Option } = Select;

type Props = {
  dispatch: TLocationFormDispatch;
  selectedCity: ICity | null;
  isLoadingCities: boolean;
  [key: string]: any;
};

export default function SelectCity({
  dispatch,
  selectedCity,
  isLoadingCities,
  ...props
}: Props) {
  const appState = useStore();

  let { filteredData, filterFn, resetFilterFn } = useFilter<TAllCities>(
    appState.location.cities,
    (city: ICity) => city.attributes.name
  );

  function onCityChange(cityId: string) {
    let selectedCity = appState.location.cities[cityId];

    dispatch({ type: 'select-city', city: selectedCity });

    dispatch({ type: 'reset-area' });
  }

  function onBlur() {
    dispatch({ type: 'touched', field: 'city', value: true });
  }

  function onSelect() {
    resetFilterFn();
  }

  const Options = Object.values(filteredData).map((city: ICity) => (
    <Option key={city.id} value={city.id}>
      {city.attributes.name}
    </Option>
  ));

  return (
    <Select
      showSearch
      filterOption={false}
      size="large"
      css={selectStyles}
      placeholder="Select City"
      onChange={onCityChange}
      onSearch={filterFn}
      onSelect={onSelect}
      onBlur={onBlur}
      value={selectedCity?.id}
      notFoundContent={isLoadingCities ? <OptionsFallback /> : <OptionsEmpy />}
      {...props}
    >
      {Options}
    </Select>
  );
}
