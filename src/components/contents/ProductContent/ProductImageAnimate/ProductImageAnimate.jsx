export const ProductImageAnimate = ({image}) => {
  return (
    <div className="flex justify-center w-full">
      <img className="max-h-96" src={image} alt="product img" />
    </div>
  );
};
