export interface ICity {
  type: 'city';
  id: string;
  attributes: {
    name: string;
    latitude: string;
    longitude: string;
  };
  relationships: {
    country: {
      data: {
        type: 'country';
        id: string;
      };
    };
  };
}


export type TAllCities = { [key: string]: ICity };
