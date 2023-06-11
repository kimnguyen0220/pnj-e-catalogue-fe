import { PageHeader, ProductCard, ProductMain } from "components";

export const CategoryContent = ({ data }) => {
  const productMain = data && data[0];
  const secondItem = data && data[1];

  return (
    <>
      <PageHeader title="categories" overflowY={false}>
        <div className="flex flex-col gap-4">
          <p className="description mt-2 max-md:hidden">
            Information about products: Visionary creations are among the
            world’s most intricate designs. This delicate pendant is a timeless
            design.
          </p>
          <div className="product-main grid gap-4 md:grid-rows-2 md:grid-cols-3">
            <div className="row-span-2 md:col-span-2">
              <ProductMain
                name={productMain?.name}
                price={productMain?.price}
              />
            </div>
            <div className="row-span-1 grid max-md:grid-cols-2 gap-2 md:col-span-1 md:grid-rows-2 md:gap-4">
              <div className="col-span-1 md:row-span-1">
                <ProductCard name={secondItem.name} price={secondItem.price} />
              </div>
              <div className="col-span-1 md:row-span-1">
                <ProductCard name={secondItem.name} price={secondItem.price} />
              </div>
            </div>
          </div>
        </div>
      </PageHeader>
      <PageHeader flip contentClassName="md:mt-16">
        <div className="grid grid-cols-2 gap-x-2 gap-y-5 pb-4 md:pl-20 md:pr-20 md:gap-x-20 md:pb-20">
          {data &&
            data.map((item) => (
              <div className="col-span-1">
                <ProductCard name={item.name} price={item.price} />
              </div>
            ))}
        </div>
      </PageHeader>
    </>
  );
};
