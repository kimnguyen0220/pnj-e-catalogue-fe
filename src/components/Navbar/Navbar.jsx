import { useAppNavigate } from "hooks";
import { ROUTER_PATH } from "lib/constants";

import "./Navbar.scss";
export const Navbar = () => {
  const { handleNavigatePage, handleNextPage, handlePrevPage } =
  useAppNavigate();
  const navBars = [
    {
      name: "Front page",
      img: "",
      link: "/",
      position: 1,
    },
    {
      name: "Categories",
      img: "",
      link: ROUTER_PATH.CATEGORY,
      position: 2,
    },
    {
      name: "History",
      img: "",
      link: ROUTER_PATH.HISTORY,
      position: 3,
    },
    {
      name: "Cart",
      img: "",
      link: ROUTER_PATH.CART,
      position: 4,
    },
  ];

  const handleNavigate = (item) => {
    handleNavigatePage(item.link, item.position);
  };

  return (
    <div className="nav-bar p-1.5 flex content-center justify-around md:flex-col md:h-full md:pt-4 md:pb-4 md:pl-2 md:pr-2 md:mr-12">
      {navBars.map((item) => (
        <div
          key={item.name}
          className="group-category flex flex-col items-center"
          onClick={() => handleNavigate(item)}
        >
          <div className="image"></div>
          <div className="category-name">{item.name}</div>
        </div>
      ))}
      <div className="max-md:hidden flex flex-col gap-5 mt-14">
        <div
          onClick={() => handleNextPage()}
          className="nav-navigate flex flex-col items-center"
        >
          <div className="image"></div>
          <div className="navigate-name">Next</div>
        </div>
        <div
          onClick={() => handlePrevPage()}
          className="nav-navigate flex flex-col items-center"
        >
          <div className="image"></div>
          <div className="navigate-name">Back</div>
        </div>
      </div>
    </div>
  );
};
