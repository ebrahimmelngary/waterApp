interface orderParams {
  type: string;
  data: {
    quntity: number;
    price: number;
    totalPrice: number;
    shipping: number;
    total: number;
  };
}
export const order = ({type, data}: orderParams) => ({
  type: type,
  payload: data,
});
