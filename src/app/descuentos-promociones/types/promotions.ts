export type Promotion = {
  id: number;
  productId: number;
  name: string;
  promotion: number;
  type: string;
  status: string;
  expirationDate: string;
};

export type FormPromotion = {
  name: string;
  type: string;
  status: string;
  expirationDate: string;
};

export type Items = {
  id: number;
  name: string;
};
