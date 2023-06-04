import { Outlet } from "react-router-dom";
import { Navbar } from "components";
export const PageContainer = () => {
  return (
    <div className="app-container grid gird-cols-6 gap-4 w-full mx-auto max-md:container max-md:p-3.5 md:flex md:flex-row-reverse md:overflow-auto md:p-18 md:overflow-y-hidden">
      <div className="row-span-5 md:flex md:flex-row">
        <Outlet />
      </div>
      <div className="row-span-1 mt-4 md:mt-10 md:mb-10">
        <Navbar />
      </div>
    </div>
  );
};
