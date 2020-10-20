import { Dispatch } from 'react';

export enum TouchedFields {
  country = 'country',
  city = 'city',
}

export enum FieldsErrorMsgs {
  country = 'Please select a country',
  city = 'Please select a city',
}

export type LocationFormAction =
  | { type: 'loading-countries'; value: boolean }
  | { type: 'loading-cities'; value: boolean }
  | { type: 'loading-areas'; value: boolean };

export type TLocationFormDispatch = Dispatch<LocationFormAction>;

export type TLocationFormState = {
  isLoadingCountries: boolean;
  isLoadingCities: boolean;
  isLoadingAreas: boolean;
};
