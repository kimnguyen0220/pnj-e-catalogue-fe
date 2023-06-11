import { PageHeader, SelectBox } from "components";
import "./ScanCodeContent.scss";
export const ScanCodeContent = () => {
  const stores = [
    {
      label: "CH Next Hai Ba Trung",
      value: 1,
    },
    {
      label: "CH No Trang Long",
      value: 2,
    },
    {
      label: "CH Quan 1",
      value: 3,
    },
  ];
  return (
    <>
      <PageHeader title="QR CODE" heightFull>
        <div className="scan-code-container h-full w-full flex flex-col gap-16">
          <div className="flex-1 qr-code"></div>
          <div className="flex-1 store-info">
            <h3 className="mb-5">THÔNG TIN CỬA HÀNG</h3>
            <SelectBox options={stores} />
          </div>

          {/* SUBMIT MB */}
          <div className="col-span-1 action mb-20 md:mb-0 md:flex md:justify-end">
            <button className="btn-submit max-md:w-full md:w-36">Hoàn tất</button>
          </div>

          {/* SUBMIT TABLET*/}
          {/* <div className="max-md:hidden flex justify-between mb-">
            <button className="btn-submit w-full">Hoàn tất</button>
          </div> */}
        </div>
      </PageHeader>
      <PageHeader flip></PageHeader>
    </>
  );
};
