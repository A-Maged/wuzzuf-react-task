import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useActions, useStore } from '@State';
import { ICity, TAllCities } from '@Entities/City';
import { selectStyles } from './style';
import OptionsEmpy from '@Components/OptionsEmpy';
import OptionsFallback from '@Components/OptionsFallback';
import { Select } from 'antd';
import useFilter from '../../useFilter';
import { useLocationFormState } from './state';
import { FieldsErrorMsgs, Fields } from './types';

export default function SelectCity(props: any) {
  const { control, getValues, setValue, watch } = useFormContext();

  const { state, dispatch } = useLocationFormState();

  const appState = useStore();
  const actions = useActions();
  let { filteredData, filterFn, resetFilterFn } = useFilter<TAllCities>(
    appState.location.cities,
    (city: ICity) => city?.attributes.name
  );

  let countryId = watch('country');

  useEffect(
    function loadCities() {
      const countryId = getValues('country');

      if (!countryId) return;

      dispatch({ type: 'loading-cities', value: true });

      actions.location.getCities(countryId).finally(() => {
        dispatch({ type: 'loading-cities', value: false });
      });
    },
    [countryId, getValues, actions.location, dispatch]
  );

  function onSelect() {
    resetFilterFn();

    setValue(Fields.area, null);
  }

  const Options = Object.values(filteredData).map((city: ICity) => {
    return { label: city.attributes.name, value: city.id };
  });

  return (
    <Controller
      as={Select}
      control={control}
      name={Fields.city}
      defaultValue={null}
      showSearch
      filterOption={false}
      size="large"
      css={selectStyles}
      placeholder="Select City"
      onSearch={filterFn}
      onSelect={onSelect}
      notFoundContent={
        state.isLoadingCities ? <OptionsFallback /> : <OptionsEmpy />
      }
      options={Options}
      rules={{ required: FieldsErrorMsgs.city }}
      {...props}
    />
  );
}
