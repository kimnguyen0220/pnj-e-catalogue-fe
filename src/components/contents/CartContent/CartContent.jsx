import { PageHeader, ProductCard, GroupQuantity, ButtonNext } from "components";

export const CartContent = ({ data }) => {
  return (
    <>
      <PageHeader title="cart" heightFull>
        <div className="flex flex-col h-full">
          <div className="flex-1 grid grid-cols-2 gap-2 md:gap-x-20 md:pr-24">
            {data &&
              data.map((item) => (
                <div className="col-span-1 mt-4">
                  <ProductCard name={item.name} price={item.price} />
                  <GroupQuantity quantity={1} />
                </div>
              ))}
          </div>
          <div className="flex justify-end mt-6 mb-6 md:mt-2 md:mr-10">
            <ButtonNext name="Check out" link="" />
          </div>
        </div>
      </PageHeader>
      <PageHeader flip>
        {/* EMTYP */}
      </PageHeader>
    </>
  );
};
