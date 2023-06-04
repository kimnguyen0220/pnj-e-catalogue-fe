import "./GroupQuantity.scss";
import plusBlackIcon from "assets/icons/plus-black.svg";
import minusIcon from "assets/icons/minus.svg";

export const GroupQuantity = ({ quantity }) => {
  return (
    <>
      <div className="quantity-container flex w-24 mt-5">
        <img src={plusBlackIcon} />
        <span className="mr-6 ml-6">{quantity}</span>
        <img src={minusIcon} />
      </div>
    </>
  );
};
