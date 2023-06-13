import arrowNext from "assets/icons/arrow-next.svg";
import { useAppNavigate } from "hooks";
export const ButtonNext = ({ name, link }) => {
  const { handleNavigatePage } = useAppNavigate();

  const navigatePage = () => {
    handleNavigatePage(link)
  }

  return (
    <div className="flex" onClick={navigatePage}>
      <button className="btn-navigate mr-2">{name}</button>
      <img src={arrowNext} alt="arrow next" />
    </div>
  );
};
