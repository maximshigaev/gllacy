export type TCartItem = {
  id: number;
  name: string;
  weight: number;
  price: number;
  src: string;
}

export type TCatalogItem = {
  id: number;
  price: number;
  src: string;
  text: string;
  fatness: number;
  filler: string;
  popularity: number;
}

export type TCurrentFilters = {
  sorting: string,
  price: {
    min: number,
    max: number,
  },
  fatness: string,
  fillers: string[],
}
