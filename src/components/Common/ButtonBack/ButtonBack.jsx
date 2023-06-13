import arrowBack from "assets/icons/arrow-back.svg";
import { useAppNavigate } from "hooks";

export const ButtonBack = ({ name, link, isBack, isNext }) => {
  const { handleNavigatePage, handleNextPage, handlePrevPage } = useAppNavigate();

  const navigatePage = () => {
    if (isBack) {
      return handlePrevPage();
    } else if (isNext) {
      return handleNextPage()
    } else {
      return handleNavigatePage(link);
    }
  };
  return (
    <div className="flex" onClick={navigatePage}>
      <img src={arrowBack} alt="arrow back" />
      <button className="btn-navigate ml-2">{name}</button>
    </div>
  );
};
