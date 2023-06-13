import "./ProductCard.scss";
import { useAppNavigate } from "hooks";
import { ROUTER_PATH } from "lib/constants";

export const ProductCard = ({ name, price }) => {
  const { handleNavigatePage } = useAppNavigate()
  return (
    <div className="product-container flex flex-col gap-2" onClick={ () => handleNavigatePage(ROUTER_PATH.PRODUCT)}>
      <div className="product-image"></div>
      <div className="product-content">
        <p>{name}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};
