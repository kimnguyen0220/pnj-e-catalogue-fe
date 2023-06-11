import { useNavigate } from "react-router-dom";
import { useAppContext } from "contexts";
export const useAppNavigate = () => {
const {currentPage, handleSetCurrentPage  } = useAppContext();
    const navigate = useNavigate();
    const handleNextPage = () => {
        handleSetCurrentPage(currentPage + 1)
        navigate(1)
      };
    
      const handlePrevPage = () => {
        handleSetCurrentPage(currentPage - 1)
        navigate(-1)
      };

      const handleNavigatePage = (link, position) => {
        handleSetCurrentPage(position)
        navigate(link)
      };

      return {
        handleNextPage,
        handlePrevPage,
        handleNavigatePage,
      }

}