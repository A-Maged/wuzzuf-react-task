export interface IArea {
  type: 'area';
  id: string;
  attributes: {
    name: string;
    latitude: string;
    longitude: string;
  };
  relationships: {
    city: {
      data: {
        type: 'city';
        id: string;
      };
    };
  };
}

export type TAllAreas = { [key: string]: IArea };
