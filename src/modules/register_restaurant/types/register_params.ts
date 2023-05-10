export type createRestaurantParams = {
  name: string;
  address: string;
  photo: string;
  businessHours: string;
  productsId?: string;
};

export type getIdRestaurantParams = {
  id: string;
};
