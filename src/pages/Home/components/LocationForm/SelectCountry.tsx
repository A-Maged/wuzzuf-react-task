import React, { useEffect } from 'react';
import { Select } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

import { useActions, useStore } from '@State';
import { ICountry, TAllCountries } from '@Entities/Country';
import OptionsEmpy from '@Components/OptionsEmpy';
import OptionsFallback from '@Components/OptionsFallback';
import useFilter from '../../useFilter';
import { selectStyles } from './style';
import { useLocationFormState } from './state';
import { FieldsErrorMsgs } from './types';

export default function SelectCountry(props: any) {
  const { control, setValue } = useFormContext();

  const { state, dispatch } = useLocationFormState();

  const appState = useStore();
  const actions = useActions();

  let { filteredData, filterFn, resetFilterFn } = useFilter<TAllCountries>(
    appState.location.countries,
    (country: ICountry) => country.attributes.name
  );

  useEffect(
    function loadCountires() {
      dispatch({ type: 'loading-countries', value: true });

      actions.location.getCountries().finally(() => {
        dispatch({ type: 'loading-countries', value: false });
      });
    },
    [actions.location, dispatch]
  );

  function onSelect() {
    resetFilterFn();

    setValue('city', null);

    actions.location.resetCities();
  }

  const Options = Object.values(filteredData).map((country: ICountry) => {
    return { label: country.attributes.name, value: country.id };
  });

  return (
    <Controller
      as={Select}
      name="country"
      control={control}
      defaultValue={null}
      rules={{ required: FieldsErrorMsgs.country }}
      showSearch
      filterOption={false}
      size="large"
      css={selectStyles}
      placeholder="Select Country"
      options={Options}
      onSearch={filterFn}
      onSelect={onSelect}
      notFoundContent={
        state.isLoadingCountries ? <OptionsFallback /> : <OptionsEmpy />
      }
      {...props}
    />
  );
}
