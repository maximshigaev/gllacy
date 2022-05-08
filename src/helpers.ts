// Constants
import {
  filterTypes,
  labelToFatnessMap,
  MAXIMUM_PRICE,
  labelToFillerMap,
  labelToSortingMap,
} from './constants';

// Types
import {
  TCartItem,
  TCatalogItem,
  TCurrentFilters,
} from './types';

export const getCartSum = (cartItems: TCartItem[]) => {
  return cartItems.reduce((sum, cur) => sum + cur.price * cur.weight, 0);
}

export const getCartItemsEnding = (amount: number) => {
  if (amount === 1) {
    return '';
  } else if (((amount % 2 === 0) && (amount !== 12))
    || ((amount % 3 === 0) && (amount !== 13))
    || ((amount % 4 === 0) && (amount !== 14))) {
     return 'a';
  } else {
    return 'ов';
  }
}

export const getRenderedCatalogItems = (catalogItems: TCatalogItem[], newFilters: TCurrentFilters, value: string) => {
  const filteredCatalogItems = getFilteredItems([...catalogItems], newFilters);
  const sortedCatalogItems = getSortedItems(filteredCatalogItems, value);

  return sortedCatalogItems;
}

export const getSortedItems = (catalogItems: TCatalogItem[], value: string) => catalogItems
  .sort((catalogItemA, catalogItemB) => {
    const sortedField = (labelToSortingMap as { [key: string]: string })[value as string];
    const order = (value === 'Сначала дорогие')
      ? 'desc'
      : 'asc';

    return (order === 'asc')
      ? (catalogItemA[sortedField as keyof TCatalogItem] as number)
        - (catalogItemB[sortedField as keyof TCatalogItem] as number)
      : (catalogItemB[sortedField as keyof TCatalogItem] as number)
        - (catalogItemA[sortedField as keyof TCatalogItem] as number);
  });

export const getCurrentPrice = (percentage: number) => Math.round(MAXIMUM_PRICE * percentage / 100);

export const getFilteredItems = (
  catalogItems: TCatalogItem[],
  currentFilters: TCurrentFilters,
) => {
  const result = Object.keys(currentFilters).reduce((filteredItems, currentFilter) => {
    switch (currentFilter) {
      case filterTypes.price:
        return filteredItems.filter((catalogItem) =>
          (catalogItem.price < getCurrentPrice(
            (currentFilters[currentFilter as keyof TCurrentFilters] as { min: number, max: number }).max))
          && (catalogItem.price > getCurrentPrice(
            (currentFilters[currentFilter as keyof TCurrentFilters] as { min: number, max: number }).min)));

      case filterTypes.fatness:
        return filteredItems.filter((catalogItem) => {
          const fatnessToCompare = labelToFatnessMap[
            currentFilters[currentFilter as keyof TCurrentFilters] as keyof typeof labelToFatnessMap];

          return (fatnessToCompare === 101)
            ? catalogItem.fatness > 30
            : catalogItem.fatness < fatnessToCompare;
        });

      case filterTypes.fillers:
        return filteredItems.filter((catalogItem) => (currentFilters[currentFilter as keyof
          TCurrentFilters] as string[])
          .some((filler) => labelToFillerMap[filler as keyof typeof labelToFillerMap] === catalogItem.filler));

      default:
        return filteredItems;
    }
  }, catalogItems);

  return result;
}
