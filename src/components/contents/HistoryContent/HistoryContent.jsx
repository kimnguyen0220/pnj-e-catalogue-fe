import { PageHeader, UserInfo, ProductItem } from "components";
import arrowDown from "assets/icons/arrow-down.svg";

import "./HistoryContent.scss";
export const HistoryContent = ({ data }) => {
  const page1 = data.slice(0, 2);
  return (
    <>
      <PageHeader title="history" heightFull>
        <div className="history-container mb-4 w-full">
          {page1 &&
            page1.map((info,index) => {
              const {
                id,
                status,
                name,
                address,
                phone,
                paymentMethod,
                products,
              } = info;
              return (
                <>
                  <UserInfo
                    key={`${id}-${index}`}
                    id={id}
                    status={status}
                    name={name}
                    address={address}
                    phone={phone}
                    paymentMethod={paymentMethod}
                  />
                  <div className="product-wrapper flex flex-col mt-4 gap-2">
                    {products &&
                      products.map((item, index) => (
                        <ProductItem
                          id={`${item.productTitle}-${index}`}
                          image=""
                          productTitle={item.productTitle}
                          price={item.price}
                        />
                      ))}
                  </div>
                  <p className="btn-show-more flex flex-row gap-2 mt-2">
                    <img src={arrowDown} />
                    <span>Show more items</span>
                  </p>

                  <div className="total-price flex justify-between mb-4 mt-4">
                    <label>Tổng tiền </label>
                    <span>20,000,000Đ</span>
                  </div>
                </>
              );
            })}
        </div>
      </PageHeader>
      <PageHeader flip heightFull contentClassName="md:mt-16">
        <div className="history-container mb-4 w-full">
          {data &&
            data.map((info, index) => {
              const {
                id,
                status,
                name,
                address,
                phone,
                paymentMethod,
                products,
              } = info;
              return (
                <>
                  <UserInfo
                    key={`${id}-${index}`}
                    id={id}
                    status={status}
                    name={name}
                    address={address}
                    phone={phone}
                    paymentMethod={paymentMethod}
                  />
                  <div className="product-wrapper flex flex-col mt-4 gap-2">
                    {products &&
                      products.map((item, index) => (
                        <ProductItem
                          key={`${item.productTitle}-${index}`}
                          image=""
                          productTitle={item.productTitle}
                          price={item.price}
                        />
                      ))}
                  </div>
                  <p className="btn-show-more flex flex-row gap-2 mt-2">
                    <img src={arrowDown} />
                    <span>Show more items</span>
                  </p>
                  <div className="total-price flex justify-between mb-4 mt-4">
                    <label>Tổng tiền </label>
                    <span>20,000,000Đ</span>
                  </div>
                </>
              );
            })}
        </div>
      </PageHeader>
    </>
  );
};
