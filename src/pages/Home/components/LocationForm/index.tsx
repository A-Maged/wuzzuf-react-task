import React, { useEffect, useReducer } from 'react';

import SelectArea from './SelectArea';
import SelectCity from './SelectCity';
import SelectCountry from './SelectCountry';
import { useActions } from '@State';
import {
  calculateErrors,
  initState,
  locationReducer,
  useHasAreas,
} from './state';

export default function LocationForm() {
  const [state, dispatch] = useReducer(locationReducer, initState);
  const actions = useActions();
  const hasAreas = useHasAreas(state.fields);
  const errors = calculateErrors(state.touched, state.fields);

  useEffect(
    function loadCountires() {
      dispatch({ type: 'loading-countries', value: true });

      actions.location.getCountries().finally(() => {
        dispatch({ type: 'loading-countries', value: false });
      });
    },
    [actions.location]
  );

  useEffect(
    function loadCities() {
      if (!state.fields.country) return;

      dispatch({ type: 'loading-cities', value: true });

      actions.location.getCities(state.fields.country.id).finally(() => {
        dispatch({ type: 'loading-cities', value: false });
      });
    },
    [state.fields.country, actions.location]
  );

  useEffect(
    function loadAreas() {
      if (!hasAreas) return;

      dispatch({ type: 'loading-areas', value: true });

      /*
       * ignoring typescript errors, because we make sure
       * variables used have a value using hasAreas
       */
      actions.location
        .getAreas({
          // @ts-ignore
          countryId: state.fields.country.id,
          // @ts-ignore
          cityId: state.fields.city.id,
        })
        .finally(() => {
          dispatch({ type: 'loading-areas', value: false });
        });
    },
    [state.fields.country, state.fields.city, hasAreas, actions.location]
  );

  return (
    <div>
      <h3>Country</h3>

      <SelectCountry
        dispatch={dispatch}
        selectedCountry={state.fields.country}
        isLoadingCountries={state.isLoadingCountries}
      />

      {errors.country?.length > 0 && (
        <div style={{ color: 'red' }}>{errors.country}</div>
      )}

      <br />
      <br />

      <h3>City</h3>

      <SelectCity
        dispatch={dispatch}
        selectedCity={state.fields.city}
        isLoadingCities={state.isLoadingCities}
        name="country"
      />

      {errors.city?.length > 0 && (
        <div style={{ color: 'red' }}>{errors.city}</div>
      )}

      <br />
      <br />

      {hasAreas && (
        <>
          <h3>Area</h3>

          <SelectArea
            dispatch={dispatch}
            selectedArea={state.fields.area}
            isLoadingAreas={state.isLoadingAreas}
          />
        </>
      )}
    </div>
  );
}
