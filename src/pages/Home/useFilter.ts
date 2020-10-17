import { useEffect, useState } from 'react';

type TUseFilterReturn<T> = {
  filteredData: T;
  filterFn: (filterStr: string) => void;
  resetFilterFn: () => void;
};

// TODO: make it compare/handle different types
/* Manage & Filter a list<object> properties with a String */
export default function useFilter<T>(
  data: T,
  getComparisonValue: (item: any) => string
): TUseFilterReturn<T> {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  function filterFn(filterStr: string) {
    if (!filterStr) {
      resetFilterFn();
      return;
    }

    //TODO: replace any with the correct type
    let filtered: any = {};

    Object.entries(data).forEach(([key, item]) => {
      let foundSimilarCountry = getComparisonValue(item)
        .toLowerCase()
        .indexOf(filterStr.toLowerCase());

      if (foundSimilarCountry !== -1) {
        filtered[key] = item;
      }
    });

    setFilteredData(filtered);
  }

  function resetFilterFn() {
    setFilteredData(data);
  }

  return { filterFn, resetFilterFn, filteredData };
}
