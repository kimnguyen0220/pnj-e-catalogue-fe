import { PageHeader, ProductCard } from "components";

export const SimilarProduct = ({ productList }) => {
  return (
    <PageHeader
      title="YOU MIGHT ALSO LIKE"
      absoluteHeader={false}
      hasPadding={false}
    >
      <div className="grid grid-cols-2 gap-2">
        {productList &&
          productList.map((product) => (
            <div className="col-span-1">
              <ProductCard name={product.name} price={product.price} />
            </div>
          ))}
      </div>
    </PageHeader>
  );
};
