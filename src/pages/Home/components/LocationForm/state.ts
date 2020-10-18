import {
  FieldsErrorMsgs,
  LocationFormAction,
  TLocationFormState,
  TouchedFields,
} from './types';

export const initState: TLocationFormState = {
  isLoadingCountries: false,
  isLoadingCities: false,
  isLoadingAreas: false,
  touched: {
    country: false,
    city: false,
  },
  fields: {
    country: null,
    city: null,
    area: null,
  },
};

export function locationReducer(
  state: TLocationFormState,
  action: LocationFormAction
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

    case 'select-country':
      newState.fields.country = action.country;
      break;

    case 'select-city':
      newState.fields.city = action.city;
      break;

    case 'select-area':
      newState.fields.area = action.area;
      break;

    case 'reset-city':
      newState.fields.city = null;
      break;

    case 'reset-area':
      newState.fields.area = null;
      break;

    case 'touched':
      newState.touched[action.field] = action.value;
  }

  return newState;
}

export function countryHasAreas(fields: TLocationFormState['fields']) {
  const COUNTRIES_WITH_AREAS = ['egypt'];

  return (
    fields.country &&
    fields.city &&
    COUNTRIES_WITH_AREAS.includes(
      fields.country?.attributes.name.toLowerCase() || ''
    )
  );
}

export function calculateErrors(
  touched: TLocationFormState['touched'],
  fields: { [key in TouchedFields]: any }
) {
  let errors: any = {};

  Object.entries(fields).forEach((field: Array<TouchedFields>) => {
    let [name, fieldValue] = field;

    // TODO: support more usecases
    // TODO: coercion problem if fieldValue is 0
    if (touched[name] && !fieldValue) {
      errors[TouchedFields[name]] = FieldsErrorMsgs[name];
    }
  });

  return errors;
}
