import { useReducer } from 'react';
import { TLocationFormAction, TLocationFormState } from './types';

export const initState: TLocationFormState = {
  isLoadingCountries: false,
  isLoadingCities: false,
  isLoadingAreas: false,
};

export function useLocationFormState() {
  const [state, dispatch] = useReducer(locationReducer, initState);

  return { state, dispatch };
}

export function locationReducer(
  state: TLocationFormState,
  action: TLocationFormAction
): TLocationFormState {
  let newState = { ...state };

  switch (action.type) {
    case 'loading-countries':
      newState.isLoadingCountries = action.value;
      break;

    case 'loading-cities':
      newState.isLoadingCities = action.value;
      break;

    case 'loading-areas':
      newState.isLoadingAreas = action.value;
      break;
  }

  return newState;
}

export function countryHasAreas(countryId: string, cityId: string) {
  const COUNTRIES_WITH_AREAS = ['56'];

  return countryId && cityId && COUNTRIES_WITH_AREAS.includes(countryId || '');
}
