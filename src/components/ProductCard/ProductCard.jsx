import "./ProductCard.scss";
export const ProductCard = ({ name, price }) => {
  return (
    <div className="product-container flex flex-col gap-2">
      <div className="product-image"></div>
      <div className="product-content">
        <p>{name}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};
