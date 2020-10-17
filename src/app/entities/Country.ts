export interface ICountry {
  type: 'country';
  id: string;
  attributes: {
    name: string;
    iso2Code: string;
  };
}

export type TAllCountries = { [key: string]: ICountry };
