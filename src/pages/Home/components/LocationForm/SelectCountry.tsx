import React from 'react';
import { Select } from 'antd';

import { useActions, useStore } from '@State';
import { ICountry, TAllCountries } from '@Entities/Country';
import OptionsFallback from './OptionsFallback';
import OptionsEmpy from './OptionsEmpy';
import useFilter from '../../useFilter';
import { TLocationFormDispatch } from './types';
import { selectStyles } from './style';

const { Option } = Select;

type TProps = {
  dispatch: TLocationFormDispatch;
  isLoadingCountries: boolean;
  selectedCountry: ICountry | null;
  [key: string]: any;
};

export default function SelectCountry({
  dispatch,
  isLoadingCountries,
  selectedCountry,
  ...props
}: TProps) {
  const appState = useStore();
  const actions = useActions();

  let { filteredData, filterFn, resetFilterFn } = useFilter<TAllCountries>(
    appState.location.countries,
    (country: ICountry) => country.attributes.name
  );

  function onCountryChange(countryId: string) {
    let selectedCountry = appState.location.countries[countryId];

    dispatch({ type: 'reset-city' });

    dispatch({ type: 'select-country', country: selectedCountry });

    actions.location.resetCities();
  }

  function onBlur() {
    dispatch({
      type: 'touched',
      field: 'country',
      value: true,
    });
  }

  const Options = Object.values(filteredData).map((country: ICountry) => (
    <Option key={country.id} value={country.id}>
      {country.attributes.name}
    </Option>
  ));

  return (
    <Select
      showSearch
      filterOption={false}
      size="large"
      css={selectStyles}
      value={selectedCountry?.id}
      onChange={onCountryChange}
      onSearch={filterFn}
      onSelect={resetFilterFn}
      onBlur={onBlur}
      notFoundContent={isLoadingCountries ? OptionsFallback : OptionsEmpy}
      placeholder="Select Country"
      {...props}
    >
      {Options}
    </Select>
  );
}
