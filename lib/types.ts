export type CartItem = {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
};

export type UserProfile = {
  name: string;
  email: string;
  role: "customer" | "admin";
};
