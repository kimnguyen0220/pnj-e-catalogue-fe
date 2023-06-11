import { PageHeader, ProductImageAnimate, ProductCard } from "components";
import imageProduct from "assets/images/diamond-ring.png";
import "./ProductContent.scss";
export const ProductContent = () => {
  const productData = {
    name: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
    price: 277000,
    image: imageProduct,
  };
  const similarData = [
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
  const tags = ["Loại đá", "Trọng lượng"];
  return (
    <>
      <PageHeader title="product" overflowY={false}>
        <div className="product-content-container w-full grid gap-4 md:grid-rows-2">
          <div className="row-span-3 md:row-span-1">
            <ProductImageAnimate image={productData.image} />
          </div>
          <div className="product-des row-span-1 md:p-5">
            <div>
              <p>{productData.name}</p>
              <span>{productData.price}</span>
            </div>

            <div className="flex gap-2 mt-3">
              {tags.map((tag) => (
                <button className="btn primary">{tag}</button>
              ))}
            </div>
            <div className="flex gap-2 mt-3">
              <button className="btn plus">Add to card</button>
              <button className="btn secondary">AR Conner</button>
            </div>
          </div>
        </div>
      </PageHeader>
      <PageHeader flip title="YOU MIGHT ALSO LIKE">
        <div className="grid grid-cols-2 gap-y-5 gap-x-2 pb-4 md:pl-14 md:pr-14 md:gap-x-20 md:pt-9 md:pb-20">
          {similarData &&
            similarData.map((product) => (
              <div className="col-span-1">
                <ProductCard name={product.name} price={product.price} />
              </div>
            ))}
        </div>
      </PageHeader>
    </>
  );
};
