import { Dispatch } from 'react';
import { ICountry } from '@Entities/Country';
import { ICity } from '@Entities/City';
import { IArea } from '@Entities/Area';

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
  | { type: 'loading-areas'; value: boolean }
  | { type: 'select-country'; country: ICountry | null }
  | { type: 'select-city'; city: ICity | null }
  | { type: 'select-area'; area: IArea | null }
  | { type: 'reset-city' }
  | { type: 'reset-area' }
  | { type: 'touched'; field: keyof typeof TouchedFields; value: boolean };

export type TLocationFormDispatch = Dispatch<LocationFormAction>;

export type TLocationFormState = {
  isLoadingCountries: boolean;
  isLoadingCities: boolean;
  isLoadingAreas: boolean;
  touched: { [key in TouchedFields]: boolean };
  fields: {
    country: ICountry | null;
    city: ICity | null;
    area: IArea | null;
  };
};
