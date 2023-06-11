import { createContext, useContext, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [classToFlip, setClassToFip] = useState("");

  const handleSetCurrentPage = (pagePosition) => {
    console.log({pagePosition})
    setCurrentPage((prev) => {
      if (pagePosition > prev) {
        setClassToFip("animation-right-to-left");
      } else if (pagePosition < prev) {
        setClassToFip("animation-left-to-right");
      }

      return pagePosition;
    });
  };

  const values = useMemo(() => {
    return {
      currentPage,
      classToFlip,
      handleSetCurrentPage,
    };
  }, [currentPage, classToFlip]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
