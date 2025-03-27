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
  images: image[];
  tags: tag[];
};

export type villaDetail = villa & {
  amenities: amenity[];
  long_address: string;
};

export type amenity = {
  name: string;
  image: string;
};

export type tag = {
  tag: string;
};

export type image = {
  url: string;
};
