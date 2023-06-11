import { CartContent } from "components";

export const CartPage = () => {
  const cartData = [
    {
      name: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
      price: 277000,
      image: "",
    },
    {
      name: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
      price: 277000,
      image: "",
    },
    {
      name: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
      price: 277000,
      image: "",
    },
    
  ];
  return <CartContent data={cartData} />;
};
