import { ICity, TAllCities } from '@Entities/City';
import { ICountry, TAllCountries } from '@Entities/Country';
import { TAllAreas } from '@Entities/Area';
import config from '@Config';

export async function getCountries(): Promise<TAllCountries> {
  const response = await fetch(`${config.baseUrl}/countries`);

  let allCountries = await response.json();

  return allCountries.data.reduce((all: TAllCountries, country: ICountry) => {
    all[country.id] = country;

    return all;
  }, {});
}

export async function getCities(
  countryId: ICountry['id']
): Promise<TAllCities> {
  const response = await fetch(`${config.baseUrl}/country/${countryId}/city`);

  let allCities = await response.json();

  return allCities.data.reduce((all: TAllCities, city: ICity) => {
    all[city.id] = city;

    return all;
  }, {});
}

type TGetAreasArgs = {
  countryId: ICountry['id'];
  cityId: ICity['id'];
};
export async function getAreas({
  countryId,
  cityId,
}: TGetAreasArgs): Promise<TAllAreas> {
  const response = await fetch(
    `${config.baseUrl}/country/${countryId}/city/${cityId}/area`
  );

  let allCities = await response.json();

  return allCities.data.reduce((all: TAllCities, city: ICity) => {
    all[city.id] = city;

    return all;
  }, {});
}
