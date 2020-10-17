import { ICity } from '@Entities/City';
import { ICountry } from '@Entities/Country';
import { Action, AsyncAction } from 'overmind';

export const getCountries: AsyncAction = async ({ state, effects }) => {
  const allCountries = await effects.location.getCountries();

  state.location.countries = allCountries;
};

export const getCities: AsyncAction<ICountry['id']> = async (
  { state, effects },
  countryId: ICountry['id']
) => {
  const allCities = await effects.location.getCities(countryId);

  state.location.cities = allCities;
};

type TGetAreasArgs = {
  countryId: ICountry['id'];
  cityId: ICity['id'];
};
export const getAreas: AsyncAction<TGetAreasArgs> = async (
  { state, effects },
  { countryId, cityId }
) => {
  const allAreas = await effects.location.getAreas({ countryId, cityId });

  state.location.areas = allAreas;
};

export const resetCities: Action = ({ state }) => {
  state.location.cities = {};
};
