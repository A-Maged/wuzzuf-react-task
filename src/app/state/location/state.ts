import { TAllAreas } from '@Entities/Area';
import { TAllCities } from '@Entities/City';
import { TAllCountries } from '@Entities/Country';

export type State = {
  countries: TAllCountries;
  cities: TAllCities;
  areas: TAllAreas;
};

export const state: State = {
  countries: {},
  cities: {},
  areas: {},
};
