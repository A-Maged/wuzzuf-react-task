import { Dispatch } from 'react';

export type Fields = {
  country: string;
  city: string;
  area: string;
};

export enum FieldsErrorMsgs {
  country = 'Please select a country',
  city = 'Please select a city',
}

export type TLocationFormAction =
  | { type: 'loading-countries'; value: boolean }
  | { type: 'loading-cities'; value: boolean }
  | { type: 'loading-areas'; value: boolean };

export type TLocationFormDispatch = Dispatch<TLocationFormAction>;

export type TLocationFormState = {
  isLoadingCountries: boolean;
  isLoadingCities: boolean;
  isLoadingAreas: boolean;
};
