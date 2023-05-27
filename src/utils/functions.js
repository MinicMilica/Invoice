export const calculateToPay = (list) => {
  let toPay = 0;
  list.forEach((item) => {
    toPay += item.quantity * item.price;
  });
  return toPay;
};
