import React, { useEffect } from 'react';
import { Select } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

import { useActions, useStore } from '@State';
import { selectStyles } from './style';
import { IArea, TAllAreas } from '@Entities/Area';
import OptionsEmpy from '@Components/OptionsEmpy';
import OptionsFallback from '@Components/OptionsFallback';
import useFilter from '../../useFilter';
import { countryHasAreas, useLocationFormState } from './state';

export default function SelectArea(props: any) {
  const { control, getValues } = useFormContext();

  const appState = useStore();
  const actions = useActions();
  const { state, dispatch } = useLocationFormState();
  let { filteredData, filterFn, resetFilterFn } = useFilter<TAllAreas>(
    appState.location.areas,
    (area: IArea) => area.attributes.name
  );

  const { country, city } = getValues(['country', 'city']);
  const hasAreas = countryHasAreas(country, city);

  useEffect(
    function loadAreas() {
      if (!hasAreas) return;

      dispatch({ type: 'loading-areas', value: true });

      actions.location
        .getAreas({
          countryId: country,
          cityId: city,
        })
        .finally(() => {
          dispatch({ type: 'loading-areas', value: false });
        });
    },
    [country, city, hasAreas, actions.location, dispatch]
  );

  function onSelect() {
    resetFilterFn();
  }

  const Options = Object.values(filteredData).map((area: IArea) => {
    return { label: area.attributes.name, value: area.id };
  });

  return (
    <Controller
      as={Select}
      control={control}
      name="area"
      defaultValue={null}
      showSearch
      filterOption={false}
      size="large"
      css={selectStyles}
      placeholder="Select City"
      onSearch={filterFn}
      onSelect={onSelect}
      notFoundContent={
        state.isLoadingAreas ? <OptionsFallback /> : <OptionsEmpy />
      }
      options={Options}
      {...props}
    />
  );
}
