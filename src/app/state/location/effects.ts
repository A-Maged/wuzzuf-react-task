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

export async function getCountriesStatic(): Promise<TAllCountries> {
  return {
    '56': {
      type: 'country',
      id: '56',
      attributes: {
        name: 'egypt',
        iso2Code: '1',
      },
    },
    '2': {
      type: 'country',
      id: '2',
      attributes: {
        name: 'usa',
        iso2Code: '2',
      },
    },
  };
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

export async function getCitiesStatic(
  countryId: ICountry['id']
): Promise<TAllCities> {
  const allCities = {
    '1': {
      type: 'city',
      id: '1',
      attributes: {
        name: 'cairo',
        latitude: '11',
        longitude: '22',
      },
      relationships: {
        country: {
          data: {
            type: 'country',
            id: '56',
          },
        },
      },
    },
    '2': {
      type: 'city',
      id: '2',
      attributes: {
        name: 'alex',
        latitude: '22',
        longitude: '33',
      },
      relationships: {
        country: {
          data: {
            type: 'country',
            id: '56',
          },
        },
      },
    },
    '3': {
      type: 'city',
      id: '3',
      attributes: {
        name: 'washington',
        latitude: '44',
        longitude: '55',
      },
      relationships: {
        country: {
          data: {
            type: 'country',
            id: '2',
          },
        },
      },
    },
  };

  let results: TAllCities = {};

  Object.entries(allCities).forEach(([_, city]) => {
    if (city.relationships.country.data.id === countryId) {
      // @ts-ignore
      results[city.id] = city;
    }
  });

  return results;
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

export async function getAreasStatic({
  countryId,
  cityId,
}: TGetAreasArgs): Promise<TAllAreas> {
  const allAreas = {
    '1': {
      type: 'area',
      id: '1',
      attributes: {
        name: 'nasr city',
        latitude: '11',
        longitude: '22',
      },
      relationships: {
        city: {
          data: {
            type: 'city',
            id: '1',
          },
        },
      },
    },
    '2': {
      type: 'area',
      id: '2',
      attributes: {
        name: '10th of ramadan',
        latitude: '22',
        longitude: '33',
      },
      relationships: {
        city: {
          data: {
            type: 'city',
            id: '1',
          },
        },
      },
    },
    '3': {
      type: 'area',
      id: '3',
      attributes: {
        name: 'asafra',
        latitude: '44',
        longitude: '55',
      },
      relationships: {
        city: {
          data: {
            type: 'city',
            id: '2',
          },
        },
      },
    },
    '4': {
      type: 'area',
      id: '4',
      attributes: {
        name: 'Seattle metropolitan',
        latitude: '99',
        longitude: '110',
      },
      relationships: {
        city: {
          data: {
            type: 'city',
            id: '3',
          },
        },
      },
    },
  };

  let results: TAllAreas = {};

  Object.entries(allAreas).forEach(([_, area]) => {
    if (area.relationships.city.data.id === cityId) {
      // @ts-ignore
      results[area.id] = area;
    }
  });

  return results;
}
