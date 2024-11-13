export type ProductDetail = {
  name: string;
  price: number;
  // id: number
};

export type SavedProductDetail = {
  name: string;
  price: number;
  id: string;
  createdAt: string;
  lastUpdated: string;
};

export type IsError = {
  isError: boolean
  msg: string
}
