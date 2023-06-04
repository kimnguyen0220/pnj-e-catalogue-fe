import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
export const Navbar = () => {
  const navigate = useNavigate();
  const navBars = [
    {
      name: "Front page",
      img: "",
      link: '/'
    },
    {
      name: "Categories",
      img: "",
      link: 'category'
    },
    {
      name: "History",
      img: "",
      link: '/'
    },
    {
      name: "Cart",
      img: "",
      link: 'cart'
    },
  ];
  return (
    <div className="nav-bar p-1.5 flex content-center justify-around md:flex-col md:h-full md:pt-4 md:pb-4 md:pl-2 md:pr-2 md:mr-12">
      {navBars.map((item) => (
        <div
          key={item.name}
          className="group-category flex flex-col items-center"
          onClick={ () => navigate(item.link)}
        >
          <div className="image"></div>
          <div className="category-name">{item.name}</div>
        </div>
      ))}
      <div className="max-md:hidden flex flex-col gap-5 mt-14">
        <div onClick={ () => navigate(1)} className="nav-navigate flex flex-col items-center">
          <div className="image"></div>
          <div className="navigate-name">Next</div>
        </div>
        <div onClick={ () => navigate(-1)} className="nav-navigate flex flex-col items-center">
          <div className="image"></div>
          <div className="navigate-name">Back</div>
        </div>
      </div>
    </div>
  );
};
