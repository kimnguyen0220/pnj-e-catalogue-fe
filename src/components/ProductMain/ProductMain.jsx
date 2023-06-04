import "./ProductMain.scss";
export const ProductMain = ({ name, price }) => {
  return (
    <div className="product-main-container relative">
      <div className="product-content bottom-10 right-4 left-7 absolute">
        <p>{name}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};
