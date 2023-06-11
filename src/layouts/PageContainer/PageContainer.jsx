import { Outlet } from "react-router-dom";
import { Navbar } from "components";
import "./PageContainer.scss";

export const PageContainer = () => {
  return (
    <div className="app-container flex flex-col gap-4 w-full h-full mx-auto max-md:container max-md:p-3.5 md:flex md:flex-row-reverse md:overflow-auto md:p-18 md:overflow-y-hidden">
      <div className="page-container relative flex-1 md:flex md:flex-row">
        <div className="md:hidden page-cover flip"></div>
        <Outlet />
      </div>
      <div className="mt-4 md:mt-10 md:mb-10">
        <Navbar />
      </div>
    </div>
  );
};
