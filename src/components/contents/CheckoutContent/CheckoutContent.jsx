import { PageHeader, InputText, ButtonNext, ButtonBack } from "components";
import { ROUTER_PATH } from "lib/constants";

export const CheckoutContent = () => {
  return (
    <>
      <PageHeader title="check out" heightFull>
        <form className="w-full h-full flex flex-col gap-48">
          <div className="h-full grid grid-cols-2 gap-4">
            <label className="label-txt col-span-2">
              Customer’s information
            </label>
            <InputText className="col-span-2" placeholder="Tên khách hàng" />
            <InputText className="col-span-2" placeholder="Số điện thoại" />

            <label className="label-txt col-span-2">Shipping</label>
            <InputText className="col-span-2" placeholder="Giao hàng tận nơi" />
            <InputText className="col-span-2" placeholder="Địa chỉ nhận hàng" />

            <InputText
              className="col-span-2 md:col-span-1"
              placeholder="Thành phố"
            />
            <InputText
              className="col-span-2 md:col-span-1"
              placeholder="Quận"
            />
          </div>
          {/* SUBMIT MB */}
          <div className="md:hidden w-full mb-20">
            <button className="btn-submit w-full">Tiếp tục</button>
          </div>

          {/* SUBMIT TABLET*/}
          <div className="max-md:hidden flex justify-between mb-2">
            <ButtonBack name="Cart" link={ROUTER_PATH.CART} />
            <ButtonNext name="Next" link={ROUTER_PATH.SCAN_CODE}/>
          </div>
        </form>
      </PageHeader>
      <PageHeader flip></PageHeader>
    </>
  );
};
