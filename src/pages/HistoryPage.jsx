import { HistoryContent } from "components";
export const HistoryPage = () => {
  const historyData = [
    {
      id: 1001,
      name: "Nguyễn Văn Anh",
      address: "01 Nguyễn Trãi, Hồ Chí minh",
      phone: 4234324,
      paymentMethod: "Visa credit",
      status: "Thanh toán thành công",
      products: [
        {
          image: "",
          productTitle: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
          price: 277000,
        },
        {
          image: "",
          productTitle: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
          price: 277000,
        },
        {
            image: "",
            productTitle: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
            price: 277000,
          },
      ],
    },
    {
      id: 1001,
      name: "Nguyễn Văn Anh",
      address: "01 Nguyễn Trãi, Hồ Chí minh",
      phone: 4234324,
      paymentMethod: "Visa credit",
      status: "Thanh toán thành công",
      products: [
        {
          image: "",
          productTitle: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
          price: 277000,
        },
        // {
        //   image: "",
        //   productTitle: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
        //   price: 277000,
        // },
      ],
    },
    {
      id: 1001,
      name: "Nguyễn Văn Anh",
      address: "01 Nguyễn Trãi, Hồ Chí minh",
      phone: 4234324,
      paymentMethod: "Visa credit",
      status: "Thanh toán thành công",
      products: [
        {
          image: "",
          productTitle: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
          price: 277000,
        },
        {
          image: "",
          productTitle: "Bông tai nam bạc đính đá PNJ Silver My man XM00K00180",
          price: 277000,
        },
      ],
    },
  ];
  return <HistoryContent data={historyData} />;
};
