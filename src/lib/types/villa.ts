export type villa = {
  id: number;
  name: string;
  short_address: string;
  price: number;
  rating: number;
  capacity: number;
  bedroom: number;
  bathroom: number;
  area: number;
  description: string;
  review_count: number;
  images: {
    url: string;
  }[];
  tags: {
    tag: string;
  }[];
};
