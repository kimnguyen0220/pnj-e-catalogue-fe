import { VNDong } from "lib/utils";
import "./ProductItem.scss";
export const ProductItem = ({ image, productTitle, price }) => {
  return (
    <div className="item-container flex flex-row gap-2 item-center">
      <div className="image-wrapper row-span-2 col-span-1">
        <img src={image} alt="product img" />
      </div>
      <div className="flex flex-col content-center">
        <span className="title row-span-1 col-span-2">{productTitle}</span>
        <span className="price row-span-1 col-span-2">{VNDong.format(price)}</span>
      </div>
    </div>
  );
};
